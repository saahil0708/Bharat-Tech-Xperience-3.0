'use client';

import React, { useState } from 'react';

const teamMembers = [
    {
        id: 1,
        name: 'Kshitij Raj',
        role: 'Frontend Architect',
        image: 'https://static.toiimg.com/photo/80482429.cms',
        bio: 'Building immersive user interfaces and interactions.'
    },
    {
        id: 2,
        name: 'Aditi Mishra',
        role: 'Backend Systems',
        image: 'https://img.freepik.com/premium-photo/shot-brunette-stylish-red-sweater-gold-earrings-adorable-girl-with-glasses-looking-camera-with-smile-white-background_197531-26492.jpg',
        bio: 'Optimizing databases and server architecture.'
    },
    {
        id: 3,
        name: 'Saahil',
        role: 'DevOps Engineer',
        image: 'https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-summer-clothes-fashion-male-isolated-studio-posing-near-blue-wall_158538-26352.jpg?semt=ais_user_personalization&w=740&q=80',
        bio: 'Ensuring zero downtime and seamless deployments.'
    },
    {
        id: 4,
        name: 'Khushi Porwal',
        role: 'UI/UX Designer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&q=80',
        bio: 'Crafting the cyber-aesthetic and user journeys.'
    },
    {
        id: 5,
        name: 'Kapil Gupta',
        role: 'Security Lead',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=800&q=80',
        bio: 'Protecting the infrastructure from cyber threats.'
    }
];

export default function OurTeam() {
    const [active, setActive] = useState<number | null>(null); // None active by default

    return (
        <section id="team" className="relative !py-20 overflow-hidden !flex !flex-col !items-center">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

            <div className="relative flex flex-col items-center justify-center w-full max-w-[90vw] md:w-max mx-auto !mb-12 md:!mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white !tracking-wider md:!tracking-widest text-center leading-tight md:leading-normal" style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
                    MEET THE <br className="md:hidden" /><span className="text-red-500">TECH OPERATIVES</span>
                </h2>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] md:w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>

            {/* Expanding Gallery */}
            <div
                className="!flex !flex-col md:!flex-row !justify-center !w-[95%] !max-w-[1600px] h-[75vh] md:!h-[60vh] !min-h-[500px] md:!min-h-[470px] !px-4 !md:px-8 !gap-2 !md:gap-4 !transition-all !duration-500"
                onMouseLeave={() => window.innerWidth >= 768 && setActive(null)} // Reset when cursor leaves the whole gallery only on desktop
            >
                {teamMembers.map((member, index) => (
                    <div key={member.id} className={`relative rounded-xl overflow-hidden !transition-all !duration-700 !ease-in-out group !flex-shrink-0
                            ${active === null ? 'w-full h-[18%] md:h-full md:w-[19%]' :
                            active === index ? 'w-full h-[50%] md:h-full md:w-[50%] shadow-[0_0_30px_rgba(220,38,38,0.4)]' : 'w-full h-[10%] md:h-full md:w-[10%] grayscale'}
                        `}
                        onClick={() => setActive(index)}
                        onMouseEnter={() => { if (typeof window !== 'undefined' && window.innerWidth >= 768) setActive(index); }}
                    >
                        {/* Inner Wrapper for Grayscale specific to closed cards */}
                        <div className={`absolute inset-0 transition-all duration-700 ${active === null ? 'grayscale group-hover:grayscale-0' : ''}`}>
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center !transition-transform !duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${member.image})` }}
                            />

                            {/* Dark/Red Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent !transition-opacity !duration-500
                                    ${active === index ? 'opacity-80' : 'opacity-100'}
                                `} />

                            {/* Cyber border effect */}
                            <div className={`absolute inset-0 border-2 !transition-colors !duration-500 rounded-xl pointer-events-none
                                    ${active === index ? 'border-red-500/50' : 'border-neutral-800'}
                                `} />
                        </div>

                        {/* Content Container */}
                        <div className="absolute bottom-0 left-0 w-full h-full !p-4 md:!p-6 flex flex-col justify-end pointer-events-none">

                            {/* Inactive State Name */}
                            <div className={`absolute inset-0 md:inset-auto md:bottom-6 md:left-6 flex justify-center items-center md:flex-col !transition-all !duration-500
                                    ${active === index ? 'opacity-0 invisible' : 'opacity-100 visible'}
                                `}>
                                {/* Desktop Vertical Text */}
                                <div className="hidden md:block text-sm md:text-base font-bold tracking-[0.2em] !whitespace-nowrap -rotate-180 origin-center !mb-4"
                                    style={{ writingMode: 'vertical-rl', color: '#ef4444' }}>
                                    {member.name.toUpperCase()}
                                </div>
                                {/* Mobile Horizontal Text */}
                                <div className="md:hidden text-lg font-bold tracking-[0.2em] !whitespace-nowrap"
                                    style={{ color: '#ef4444' }}>
                                    {member.name.toUpperCase()}
                                </div>
                                <div className="hidden md:block w-5 h-0.5 bg-red-500"></div>
                            </div>

                            {/* Full Content for active state */}
                            <div className={`!transition-all !duration-500 transform relative z-10 w-full flex flex-col justify-end h-full md:h-auto
                                ${active === index ? 'translate-y-0 opacity-100 visible' : 'translate-y-10 opacity-0 invisible'}
                            `}>
                                {/* Tech deco marks */}
                                <div className="flex items-center !gap-2 !mb-1 md:!mb-3 mt-auto md:mt-0">
                                    <div className="h-px w-8 bg-red-500"></div>
                                    <span className="text-red-500 text-[10px] md:text-xs font-mono tracking-widest">OP-{member.id.toString().padStart(2, '0')}</span>
                                </div>

                                <h3 className="text-2xl md:text-5xl font-black text-white !mb-1 md:!mb-2 leading-none" style={{ textShadow: '2px 2px 0 rgba(220,38,38,1)' }}>
                                    {member.name.toUpperCase()}
                                </h3>

                                <h4 className="text-base md:text-xl text-red-400 font-bold !mb-2 md:!mb-4 tracking-wide uppercase">
                                    {member.role}
                                </h4>

                                <p className="text-neutral-300 text-xs md:text-base max-w-sm border-l-2 border-red-500 !pl-3 md:!pl-4 !py-0.5 md:!py-1 italic">
                                    "{member.bio}"
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        </section>
    );
}
