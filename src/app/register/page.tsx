'use client';

import MindFlare from '../../Images/MindFlare.png';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../lib/supabaseClient';
import StrangerThingsModal from '../../Components/StrangerThingsModal';

declare global {
    interface Window {
        Razorpay: any;
    }
}

type Member = {
    name: string;
    email: string;
    phone: string;
};

export default function RegisterPage() {
    const [teamName, setTeamName] = useState('');
    const [leader, setLeader] = useState<Member>({ name: '', email: '', phone: '' });
    // Initialize with 1 empty member since min is 2 (Leader + 1 member)
    const [members, setMembers] = useState<Member[]>([{ name: '', email: '', phone: '' }]);
    const [projectDescription, setProjectDescription] = useState('');
    const [pptLink, setPptLink] = useState('');
    const [requiresAccommodation, setRequiresAccommodation] = useState(false);
    const [referralType, setReferralType] = useState<'individual' | 'community' | null>(null);
    const [referralValue, setReferralValue] = useState('');

    const addMember = () => {
        if (members.length + 1 < 5) {
            setMembers([...members, { name: '', email: '', phone: '' }]);
        }
    };

    const removeMember = (index: number) => {
        if (members.length > 1) {
            const newMembers = [...members];
            newMembers.splice(index, 1);
            setMembers(newMembers);
        }
    };

    const updateMember = (index: number, field: keyof Member, value: string) => {
        const newMembers = [...members];
        newMembers[index][field] = value;
        setMembers(newMembers);
    };

    // Total participants = Leader (1) + members.length
    const totalParticipants = 1 + members.length;

    // Fee calculation: Base 250 + 50 for accommodation
    const totalFee = requiresAccommodation ? 300 : 250;

    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState<{ isOpen: boolean; type: 'success' | 'error'; title: string; message: string }>({
        isOpen: false,
        type: 'success',
        title: '',
        message: ''
    });

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isOpen: false }));
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleSupabaseInsert = async (paymentId: string) => {
        try {
            // 1. Insert into 'teams' table
            const { data: teamData, error: teamError } = await supabase
                .from('teams')
                .insert([
                    {
                        team_name: teamName,
                        leader_name: leader.name,
                        leader_email: leader.email,
                        leader_phone: leader.phone,
                        project_description: projectDescription,
                        ppt_link: pptLink,
                        total_fee: totalFee,
                        total_participants: totalParticipants,
                        referral_type: referralType,
                        referral_code: referralValue
                        // Omitted accommodation and paymentId since columns may not exist yet in DB
                    },
                ])
                .select()
                .single();

            if (teamError) throw teamError;

            const teamId = teamData.id;

            // 2. Insert into 'team_members' table
            const validMembers = members.filter(m => m.name && m.email && m.phone);

            if (validMembers.length > 0) {
                const membersToInsert = validMembers.map(member => ({
                    team_id: teamId,
                    name: member.name,
                    email: member.email,
                    phone: member.phone
                }));

                const { error: membersError } = await supabase
                    .from('team_members')
                    .insert(membersToInsert);

                if (membersError) throw membersError;
            }

            setNotification({
                isOpen: true,
                type: 'success',
                title: 'WELCOME TO THE PARTY',
                message: 'Your payment was successful and squad has been registered. The gate is open.'
            });

        } catch (error: any) {
            console.error('Error inserting data:', error);
            setNotification({
                isOpen: true,
                type: 'error',
                title: 'SOMETHING STRANGE',
                message: 'Registration failed after payment. Please contact admins. Error: ' + (error.message || 'Unknown error')
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await loadRazorpayScript();
            if (!res) {
                setNotification({
                    isOpen: true,
                    type: 'error',
                    title: 'SYSTEM ERROR',
                    message: 'Razorpay SDK failed to load. Are you online?'
                });
                setIsLoading(false);
                return;
            }

            const orderOptions = {
                method: "POST",
                body: JSON.stringify({ amount: totalFee }),
                headers: { "Content-Type": "application/json" }
            };

            const orderResp = await fetch("/api/razorpay/order", orderOptions);
            const orderData = await orderResp.json();

            if (!orderResp.ok) {
                throw new Error("Could not create Razorpay order.");
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: totalFee * 100,
                currency: "INR",
                name: "Bharat Tech Xperience",
                description: "Registration Fee",
                order_id: orderData.orderId,
                handler: async function (response: any) {
                    setIsLoading(true); // Keep loading state while saving to DB
                    await handleSupabaseInsert(response.razorpay_payment_id);
                },
                prefill: {
                    name: leader.name,
                    email: leader.email,
                    contact: leader.phone
                },
                theme: {
                    color: "#dc2626"
                },
                modal: {
                    ondismiss: function () {
                        setIsLoading(false);
                    }
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                setNotification({
                    isOpen: true,
                    type: 'error',
                    title: 'PAYMENT FAILED',
                    message: 'The transaction was unsuccessful. Please try again.'
                });
            });
            paymentObject.open();

        } catch (error: any) {
            console.error('Error initializing payment:', error);
            setNotification({
                isOpen: true,
                type: 'error',
                title: 'SYSTEM ERROR',
                message: 'Could not initialize payment. ' + (error.message || 'Unknown error')
            });
            setIsLoading(false);
        }
    };

    return (
        <main className="!min-h-screen !bg-black !text-white !pt-10 !pb-12 !px-4 selection:!bg-red-900 selection:!text-white relative overflow-hidden">
            <StrangerThingsModal
                isOpen={notification.isOpen}
                onClose={closeNotification}
                type={notification.type}
                title={notification.title}
                message={notification.message}
            />
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <Image
                    src={MindFlare}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] !bg-red-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] !bg-red-900/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Back Button */}
            <Link href="/" className="absolute top-8 left-8 z-50 text-white/50 hover:text-red-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </Link>

            <div className="!max-w-7xl !mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-7xl !font-[family-name:var(--font-azonix)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 tracking-wide" style={{ fontFamily: "'Azonix', sans-serif" }}>
                        UNIT REGISTRATION
                    </h1>
                    <div className="h-1 w-48 !bg-red-600 relative top-12 mx-auto shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
                    <p className="mt-6 !text-gray-400 text-sm tracking-[0.2em] uppercase">Secure Your Squad • Protocol: Register</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 !mt-10">

                    {/* LEFT COLUMN: Form (Takes 2 columns on large screens) */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="!bg-zinc-900/40 backdrop-blur-md !p-5 md:p-12 !border !border-white/5 rounded-none shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] flex flex-col gap-10">

                            {/* Team Details */}
                            <div className="space-y-6">
                                <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-red-500 tracking-wider flex items-center gap-4 !pb-4">
                                    <span className="text-3xl opacity-50">01</span>
                                    TEAM IDENTITY
                                </h2>
                                <div className="relative group pt-2">
                                    <input
                                        type="text"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                        required
                                        placeholder="ENTER SQUADRON DESIGNATION"
                                        className="w-full !bg-black/60 !border !border-gray-800 !text-white !px-3 !py-2 focus:outline-none focus:!border-red-600 focus:ring-1 focus:!ring-red-600 transition-all placeholder:!text-gray-600 group-hover:!border-red-900/50 clip-input text-lg"
                                    />
                                </div>
                            </div>

                            {/* Leader Details */}
                            <div className="space-y-6">
                                <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-red-500 tracking-wider flex items-center gap-4 !pb-4">
                                    <span className="text-3xl opacity-50">02</span>
                                    TEAM LEADER
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                                    <input
                                        type="text"
                                        placeholder="FULL NAME"
                                        value={leader.name}
                                        onChange={(e) => setLeader({ ...leader, name: e.target.value })}
                                        required
                                        className="w-full !bg-black/60 !border !border-gray-800 !text-white !px-3 !py-2 focus:outline-none focus:!border-red-600 transition-all placeholder:!text-gray-600"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="CONTACT NO."
                                        value={leader.phone}
                                        onChange={(e) => setLeader({ ...leader, phone: e.target.value })}
                                        required
                                        className="w-full !bg-black/60 !border !border-gray-800 !text-white !px-3 !py-2 focus:outline-none focus:!border-red-600 transition-all placeholder:!text-gray-600"
                                    />
                                    <input
                                        type="email"
                                        placeholder="EMAIL ADDRESS"
                                        value={leader.email}
                                        onChange={(e) => setLeader({ ...leader, email: e.target.value })}
                                        required
                                        className="w-full md:col-span-2 !bg-black/60 !border !border-gray-800 !text-white !px-3 !py-2 focus:outline-none focus:!border-red-600 transition-all placeholder:!text-gray-600"
                                    />
                                </div>
                            </div>

                            {/* Members */}
                            <div className="!space-y-8">
                                <div className="flex justify-between items-center !pb-2">
                                    <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-red-500 tracking-wider flex items-center gap-4">
                                        <span className="text-3xl opacity-50">03</span>
                                        OPERATIVES
                                    </h2>
                                    <span className="text-sm !text-gray-500 !py-1">
                                        <span className={totalParticipants === 4 ? "text-red-500" : "text-white"}>{totalParticipants}</span>/4 DEPLOYED
                                    </span>
                                </div>

                                <div className="!space-y-4">
                                    {members.map((member, index) => (
                                        <div key={index} className="relative !pt-10 !pb-6 !bg-black/40 group hover:!border-red-900/50 transition-colors shadow-lg !mt-6">
                                            <div className="absolute capitalize top-[-12px] px-3 !bg-black text-sm !text-red-500 border border-gray-900 group-hover:border-red-900/50 transition-colors">
                                                OPERATIVE 0{index + 2}
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 !gap-6 mt-2">
                                                <input
                                                    type="text"
                                                    placeholder="NAME"
                                                    value={member.name}
                                                    onChange={(e) => updateMember(index, 'name', e.target.value)}
                                                    required
                                                    className="!bg-black/80 !border !border-gray-800 !text-white !px-3 !py-2 !text-sm focus:!border-white focus:outline-none transition-colors"
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="CONTACT"
                                                    value={member.phone}
                                                    onChange={(e) => updateMember(index, 'phone', e.target.value)}
                                                    required
                                                    className="!bg-black/80 !border !border-gray-800 !text-white !px-3 !py-2 !text-sm focus:!border-white focus:outline-none transition-colors"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="EMAIL"
                                                    value={member.email}
                                                    onChange={(e) => updateMember(index, 'email', e.target.value)}
                                                    required
                                                    className="!bg-black/80 !border !border-gray-800 !text-white !px-3 !py-2 !text-sm focus:!border-white focus:outline-none transition-colors md:!col-span-2"
                                                />
                                            </div>

                                            {totalParticipants > 2 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeMember(index)}
                                                    className="absolute top-[-10px] right-[-10px] !bg-black !border !border-gray-800 !p-2 !text-gray-400 hover:!text-red-500 hover:!border-red-500 transition-all rounded-none cursor-pointer"
                                                    title="Remove Operative"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                </button>
                                            )}
                                        </div>
                                    ))}

                                    {totalParticipants < 4 && (
                                        <button
                                            type="button"
                                            onClick={addMember}
                                            className="w-full cursor-pointer !py-3 !border !border-dashed !border-gray-700 !text-gray-400 hover:!border-red-500 hover:!text-red-500 hover:!bg-red-900/10 transition-all text-sm uppercase tracking-[0.1em] flex items-center justify-center gap-3 group"
                                        >
                                            <div className="p-1 border border-gray-600 group-hover:border-red-500 rounded-full transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            </div>
                                            Confirm Additional Slot
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="space-y-6">
                                <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-red-500 tracking-wider flex items-center gap-4 !pb-4">
                                    <span className="text-3xl opacity-50">04</span>
                                    PROJECT DETAILS
                                </h2>
                                <div className="space-y-5 pt-2">
                                    <textarea
                                        placeholder="BRIEF DESCRIPTION OF PROJECT"
                                        value={projectDescription}
                                        onChange={(e) => setProjectDescription(e.target.value)}
                                        required
                                        rows={4}
                                        className="w-full !bg-black/60 !border !border-gray-800 !text-white !px-3 !py-2 focus:outline-none focus:!border-red-600 transition-all placeholder:!text-gray-600 resize-none"
                                    />
                                    <input
                                        type="url"
                                        placeholder="PPT LINK (GOOGLE DRIVE / CANVA)"
                                        value={pptLink}
                                        onChange={(e) => setPptLink(e.target.value)}
                                        required
                                        className="w-full !bg-black/60 !border !border-gray-800 !text-white !mt-2 !px-3 !py-2 focus:outline-none focus:!border-red-600 transition-all placeholder:!text-gray-600"
                                    />

                                    {/* Accommodation Toggle */}
                                    <div className="flex items-center space-x-3 !mt-6 !p-4 !border !border-gray-800 !bg-black/40 hover:!border-red-900/50 transition-colors cursor-pointer group" onClick={() => setRequiresAccommodation(!requiresAccommodation)}>
                                        <div className={`w-6 h-6 flex items-center justify-center border transition-all ${requiresAccommodation ? 'bg-red-600 border-red-600' : 'bg-transparent border-gray-600 group-hover:border-red-500'}`}>
                                            {requiresAccommodation && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            )}
                                        </div>
                                        <div className='!ml-2'>
                                            <p className="text-white text-sm tracking-wider uppercase">Accommodation Required</p>
                                            <p className="text-gray-500 text-xs">Adds base operative shelter cost (+ ₹50)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Referral Details */}
                            <div className="space-y-6">
                                <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-red-500 tracking-wider flex items-center gap-4 !pb-4">
                                    <span className="text-3xl opacity-50">05</span>
                                    REFERRAL
                                </h2>
                                <div className="space-y-5 pt-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setReferralType('individual')}
                                            className={`!py-3 !px-4 !border !text-xs !tracking-widest !uppercase !font-bold transition-all ${referralType === 'individual' ? '!bg-red-600 !border-red-600 !text-white' : '!bg-black/40 !border-gray-800 !text-gray-500 hover:!border-red-500/50'}`}
                                        >
                                            Individual Referral
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setReferralType('community')}
                                            className={`!py-3 !px-4 !border !text-xs !tracking-widest !uppercase !font-bold transition-all ${referralType === 'community' ? '!bg-red-600 !border-red-600 !text-white' : '!bg-black/40 !border-gray-800 !text-gray-500 hover:!border-red-500/50'}`}
                                        >
                                            Community Referral
                                        </button>
                                    </div>
                                    
                                    {referralType && (
                                        <div className="relative group animate-in fade-in slide-in-from-top-2 duration-300">
                                            <input
                                                type="text"
                                                value={referralValue}
                                                onChange={(e) => setReferralValue(e.target.value)}
                                                required
                                                placeholder={referralType === 'individual' ? "ENTER REFEREE NAME" : "ENTER COMMUNITY NAME"}
                                                className="w-full !bg-black/60 !border !border-gray-800 !text-white !px-3 !py-2 focus:outline-none focus:!border-red-600 focus:ring-1 focus:!ring-red-600 transition-all placeholder:!text-gray-600 group-hover:!border-red-900/50 text-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Fee & Submit */}
                            <div className="pt-8 !border-t !border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="text-center md:text-left !pt-4 md:min-w-[200px]">
                                    <p className="!text-gray-500 text-xs mb-2 tracking-widest">TOTAL TEAM FEE</p>
                                    <p className="text-4xl !font-[family-name:var(--font-azonix)] !text-white flex justify-center md:justify-start items-start gap-1">
                                        <span className="text-lg mt-1 text-red-500">₹</span>
                                        {totalFee}
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">SECURE PAYMENT PROTOCOL</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="!bg-red-600 !text-white cursor-pointer !px-3 !py-3 !font-[family-name:var(--font-azonix)] text-sm tracking-widest hover:!bg-red-700 active:scale-95 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] relative group overflow-hidden rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10">{isLoading ? 'PROCESSING...' : 'INITIATE PROTOCOL'}</span>
                                    {!isLoading && <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Rules & Regulations */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8 sticky top-32">
                            {/* Futuristic Card for Rules */}
                            <div className="relative !bg-black/80 backdrop-blur-xl !p-3 !border !border-gray-800 overflow-hidden group hover:border-red-600/30 transition-colors duration-500">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-600/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-600/10 to-transparent"></div>
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-red-600 via-transparent to-transparent opacity-50"></div>

                                <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-white tracking-wider !mb-6 flex items-center gap-4 relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                    PROTOCOLS
                                </h2>

                                <div className="!space-y-5 relative z-10">
                                    {[
                                        { title: "MANDATORY ID", desc: "All operatives must carry valid identification at all times." },
                                        { title: "NON-REFUNDABLE", desc: "Credits transferred are locked. No abort refunds." },
                                        { title: "T-MINUS 30", desc: "Report to briefing zone 30 minutes prior to operation." },
                                        { title: "DISQUALIFICATION", desc: "Malpractice or unsanctioned tech use results in immediate ban." },
                                        { title: "CHAIN OF COMMAND", desc: "Squad Leader acts as the sole comms relay." },
                                    ].map((rule, idx) => (
                                        <div key={idx} className="flex gap-4 group/item">
                                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-900 border border-gray-800 text-red-500 font-bold text-xs group-hover/item:border-red-500 transition-colors shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                                                0{idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-gray-200 font-bold text-sm tracking-wider mb-1 group-hover/item:text-red-400 transition-colors uppercase">{rule.title}</h4>
                                                <p className="text-gray-500 text-xs leading-relaxed group-hover/item:text-gray-300 transition-colors">
                                                    {rule.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-6 !border-t !border-gray-800/50">
                                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
                                    </div>
                                </div>
                            </div>

                            {/* Decorative 'System' Box */}
                            <div className="!p-2 border border-dashed border-gray-800 text-center opacity-50 hover:opacity-100 transition-opacity">
                                <p className="text-red-500/80 text-[10px] tracking-[0.3em] uppercase">
                                    /// Awaiting Squad Data ///
                                </p>
                            </div>

                            {/* Event Coordinators */}
                            <div className="!mt-8 relative !bg-black/80 backdrop-blur-xl !p-5 !border !border-gray-800 overflow-hidden group hover:border-red-600/30 transition-colors duration-500">
                                <div className="absolute top-0 right-0 !w-20 !h-20 bg-gradient-to-bl from-red-600/10 to-transparent"></div>
                                <h3 className="text-red-500 font-bold text-sm uppercase tracking-wider font-orbitron !mb-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    SUPPORT CHANNELS
                                </h3>
                                <div className="!space-y-3 relative z-10">
                                    <div className="flex justify-between items-center bg-gray-900/40 !p-2 border border-gray-800/50 hover:border-red-500/30 transition-colors">
                                        <span className="text-gray-400 text-xs font-orbitron uppercase">Saahil</span>
                                        <Link href="tel:+91 94741 56798" className="text-white hover:text-red-500 transition-colors text-xs tracking-wider">+91 94741 56798</Link>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-900/40 !p-2 border border-gray-800/50 hover:border-red-500/30 transition-colors">
                                        <span className="text-gray-400 text-xs font-orbitron uppercase">Kshitij</span>
                                        <Link href="tel:+91 70610 67077" className="text-white hover:text-red-500 transition-colors text-xs tracking-wider">+91 70610 67077</Link>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-900/40 !p-2 border border-gray-800/50 hover:border-red-500/30 transition-colors">
                                        <span className="text-gray-400 text-xs font-orbitron uppercase">Sujal</span>
                                        <Link href="tel:+91 81304 92327" className="text-white hover:text-red-500 transition-colors text-xs tracking-wider">+91 81304 92327</Link>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-900/40 !p-2 border border-gray-800/50 hover:border-red-500/30 transition-colors">
                                        <span className="text-gray-400 text-xs font-orbitron uppercase">Taniya</span>
                                        <Link href="tel:+91 97174 53632" className="text-white hover:text-red-500 transition-colors text-xs tracking-wider">+91 97174 53632</Link>
                                    </div>
                                    {/* <div className="flex justify-between items-center bg-gray-900/40 !p-2 border border-gray-800/50 hover:border-red-500/30 transition-colors">
                                        <span className="text-gray-400 text-xs font-orbitron uppercase">Rohan</span>
                                        <Link href="tel:+916543210987" className="text-white hover:text-red-500 transition-colors text-xs tracking-wider">+91 65432 10987</Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}