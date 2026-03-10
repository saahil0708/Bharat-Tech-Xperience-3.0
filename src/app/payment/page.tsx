'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../lib/supabaseClient';
import StrangerThingsModal from '../../Components/StrangerThingsModal';
import MindFlare from '../../Images/MindFlare.png';

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function PaymentPage() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState<1 | 2>(1);
    const [teamData, setTeamData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [requiresAccommodation, setRequiresAccommodation] = useState(false);
    const baseFee = 250;
    const accommodationFee = 50;
    const totalFeeToPay = baseFee + (requiresAccommodation ? accommodationFee : 0);

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

    const verifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data, error } = await supabase
                .from('teams')
                .select('*')
                .eq('leader_email', email)
                .single();

            if (error || !data) {
                setNotification({
                    isOpen: true,
                    type: 'error',
                    title: 'ACCESS DENIED',
                    message: 'No squad found with this operative email.'
                });
                setIsLoading(false);
                return;
            }

            // Assuming `is_selected` is a boolean column and `payment_status` tracks payment state
            if (data.is_selected !== true) {
                setNotification({
                    isOpen: true,
                    type: 'error',
                    title: 'STATUS UNVERIFIED',
                    message: 'Your squad has not been selected for Protocol Round 2. Await further comms.'
                });
                setIsLoading(false);
                return;
            }

            if (data.payment_status === 'paid') {
                setNotification({
                    isOpen: true,
                    type: 'success',
                    title: 'ALREADY SECURED',
                    message: 'Your squad has already completed the payment protocol.'
                });
                setIsLoading(false);
                return;
            }

            setTeamData(data);
            setStep(2);

        } catch (error: any) {
            console.error('Error fetching team:', error);
            setNotification({
                isOpen: true,
                type: 'error',
                title: 'SYSTEM ERROR',
                message: 'Could not verify operative records. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handlePayment = async () => {
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
                body: JSON.stringify({ amount: totalFeeToPay }),
                headers: { "Content-Type": "application/json" }
            };

            const orderResp = await fetch("/api/razorpay/order", orderOptions);
            const orderData = await orderResp.json();

            if (!orderResp.ok) {
                throw new Error("Could not create Razorpay order.");
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: totalFeeToPay * 100,
                currency: "INR",
                name: "Bharat Tech Xperience",
                description: "Round 2 Registration Fee",
                order_id: orderData.orderId,
                handler: async function (response: any) {
                    setIsLoading(true); // Keep loading state while saving to DB

                    try {
                        const { error } = await supabase
                            .from('teams')
                            .update({
                                payment_status: 'paid',
                                razorpay_payment_id: response.razorpay_payment_id,
                                total_fee: totalFeeToPay
                            })
                            .eq('id', teamData.id);

                        if (error) throw error;

                        setNotification({
                            isOpen: true,
                            type: 'success',
                            title: 'PROTOCOL COMPLETE',
                            message: 'Your payment was successful. Secondary protocols engaged. Welcome to Round 2.'
                        });

                        // Optionally set step to something else or just leave on screen
                        setStep(1);
                        setEmail('');

                    } catch (dbError: any) {
                        setNotification({
                            isOpen: true,
                            type: 'error',
                            title: 'DATABASE ERROR',
                            message: 'Payment received but failed to update status. Please contact command.'
                        });
                    } finally {
                        setIsLoading(false);
                    }
                },
                prefill: {
                    name: teamData.leader_name,
                    email: teamData.leader_email,
                    contact: teamData.leader_phone
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
                    message: 'The transaction was unsuccessful. System aborting.'
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
        <main className="!min-h-screen !bg-black !text-white !pt-10 !pb-12 !px-4 selection:!bg-red-900 selection:!text-white relative overflow-hidden flex flex-col justify-center">
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
                    className="object-cover opacity-50"
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

            <div className="!max-w-3xl !mx-auto relative z-10 !w-full">
                <div className="!text-center !mb-5">
                    <h1 className="text-4xl md:text-6xl !font-[family-name:var(--font-azonix)] !font-bold !text-transparent !bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-wide" style={{ fontFamily: "'Azonix', sans-serif" }}>
                        FEE PROTOCOL
                    </h1>
                    <div className="h-1 w-32 !bg-red-600 relative top-2 !mx-auto shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
                    <p className="!mt-8 !text-gray-400 !text-sm !tracking-[0.2em] !uppercase">Round 2 • Clearance Required</p>
                </div>

                <div className="!bg-zinc-900/40 backdrop-blur-md !p-6 !md:p-12 !border !border-white/5 rounded-none shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                    {step === 1 && (
                        <form onSubmit={verifyEmail} className="!flex !flex-col !gap-8">
                            <div className="!space-y-4">
                                <h2 className="text-xl md:text-2xl !font-[family-name:var(--font-azonix)] !text-red-500 tracking-wider flex items-center gap-4 !text-center !justify-center">
                                    VERIFY IDENTITY
                                </h2>
                                <p className="!text-center !text-gray-400 !text-sm !tracking-widest !max-w-md !mx-auto">
                                    ENTER YOUR REGISTERED LEADER EMAIL TO PROCEED WITH PAYMENT PROTOCOLS
                                </p>
                            </div>

                            <div className="relative group !max-w-lg !mx-auto !w-full">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="LEADER EMAIL ADDRESS"
                                    className="w-full !bg-black/60 !border !border-gray-800 !text-white !px-4 !py-3 focus:outline-none focus:!border-red-600 focus:ring-1 focus:!ring-red-600 transition-all placeholder:!text-gray-600 group-hover:!border-red-900/50 text-center tracking-widest text-lg"
                                />
                            </div>

                            <div className="pt-6 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="!bg-red-600 !text-white cursor-pointer rounded !px-8 !py-3 !font-[family-name:var(--font-azonix)] text-sm tracking-widest hover:!bg-red-700 active:scale-95 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                                >
                                    <span className="relative z-10">{isLoading ? 'UPLINKING...' : 'INITIATE PROTOCOL'}</span>
                                    {!isLoading && <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>}
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 2 && teamData && (
                        <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center">
                                <h2 className="text-2xl !font-[family-name:var(--font-azonix)] !text-white tracking-wider">
                                    SQUAD IDENTIFIED
                                </h2>
                                <p className="text-red-500 mt-2 tracking-widest font-bold text-lg">{teamData.team_name}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !p-6 border border-gray-800 bg-black/40">
                                <div>
                                    <p className="text-gray-500 text-xs tracking-widest mb-1">LEADER NAME</p>
                                    <p className="text-gray-200 uppercase tracking-wider">{teamData.leader_name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs tracking-widest mb-1">TOTAL OPERATIVES</p>
                                    <p className="text-gray-200 uppercase tracking-wider">{teamData.total_participants}</p>
                                </div>
                            </div>

                            <div className="pt-4 !border-t !border-gray-800 flex flex-col items-center gap-8">
                                {/* Accommodation Logic */}
                                <div className="w-full flex items-center space-x-3 !p-4 !border !border-gray-800 !bg-black/40 hover:!border-red-900/50 transition-colors cursor-pointer group" onClick={() => setRequiresAccommodation(!requiresAccommodation)}>
                                    <div className={`w-6 h-6 flex items-center justify-center border transition-all ${requiresAccommodation ? 'bg-red-600 border-red-600' : 'bg-transparent border-gray-600 group-hover:border-red-500'}`}>
                                        {requiresAccommodation && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        )}
                                    </div>
                                    <div className='!ml-2'>
                                        <p className="text-white text-sm tracking-wider uppercase">Accommodation Required (+₹{accommodationFee})</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                                    <div className="text-center md:text-left shadow-[0_0_10px_rgba(220,38,38,0.2)] !p-4 border border-red-900/30 w-full md:w-auto">
                                        <p className="!text-gray-500 text-xs !mb-2 tracking-widest">REQUIRED TEAM FEE</p>
                                        <p className="text-4xl !font-[family-name:var(--font-azonix)] !text-white flex justify-center md:justify-start items-start gap-1">
                                            <span className="text-lg mt-1 text-red-500">₹</span>
                                            {totalFeeToPay}
                                        </p>
                                        <p className="text-xs text-gray-600 !mt-1 uppercase">BASE REGISTRATION: ₹{baseFee}</p>
                                        {requiresAccommodation && <p className="text-xs text-red-500 !mt-1 uppercase">ACCOMMODATION ADDED: ₹{accommodationFee}</p>}
                                    </div>

                                    <button
                                        onClick={handlePayment}
                                        disabled={isLoading}
                                        className="!bg-red-600 !text-white cursor-pointer !px-8 !py-4 !font-[family-name:var(--font-azonix)] text-sm tracking-widest hover:!bg-red-700 active:scale-95 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                                    >
                                        <span className="relative z-10">{isLoading ? 'PROCESSING...' : 'INITIATE PAYMENT'}</span>
                                        {!isLoading && <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
