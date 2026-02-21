'use client';

import React, { useState } from 'react';

const teamMembers = [
    {
        id: 1,
        name: 'Alex Mercer',
        role: 'Frontend Architect',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80',
        bio: 'Building immersive user interfaces and interactions.'
    },
    {
        id: 2,
        name: 'Sarah Chen',
        role: 'Backend Systems',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80',
        bio: 'Optimizing databases and server architecture.'
    },
    {
        id: 3,
        name: 'Rahul Patel',
        role: 'DevOps Engineer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80',
        bio: 'Ensuring zero downtime and seamless deployments.'
    },
    {
        id: 4,
        name: 'Emily Davis',
        role: 'UI/UX Designer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&q=80',
        bio: 'Crafting the cyber-aesthetic and user journeys.'
    },
    {
        id: 5,
        name: 'Michael Chang',
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

            <div className="relative inline-block w-max mx-auto !mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white !tracking-widest text-center" style={{ textShadow: '0 0 20px rgba(220,38,38,0.5)' }}>
                    MEET THE <span className="text-red-500">TECH OPERATIVES</span>
                </h2>
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>

            {/* Expanding Gallery */}
            <div
                className="!flex !justify-center !w-[95%] !max-w-[1600px] !h-[60vh] !min-h-[470px] !px-4 !md:px-8 !gap-2 !md:gap-4 !transition-all !duration-500"
                onMouseLeave={() => setActive(null)} // Reset when cursor leaves the whole gallery
            >
                {teamMembers.map((member, index) => (
                    <div key={member.id} className={`relative rounded-xl overflow-hidden !transition-all !duration-700 !ease-in-out group !flex-shrink-0
                            ${active === null ? 'w-[19%]' :
                            active === index ? 'w-[48%] md:w-[50%] shadow-[0_0_30px_rgba(220,38,38,0.4)]' : 'w-[10%] md:w-[10%] grayscale'}
                        `}
                        onClick={() => setActive(index)}
                        onMouseEnter={() => setActive(index)}
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

                        {/* Content Container (Outside Grayscale Wrapper!) */}
                        <div className="absolute bottom-0 left-0 w-full h-full !p-6 flex flex-col justify-end pointer-events-none">

                            <div className={`absolute bottom-6 left-6 flex flex-col items-center !transition-all !duration-500
                                    ${active === index ? 'opacity-0 invisible' : 'opacity-100 visible'}
                                `}>
                                <div className="text-sm md:text-base font-bold tracking-[0.2em] !whitespace-nowrap -rotate-180 origin-center !mb-4"
                                    style={{ writingMode: 'vertical-rl', color: '#ef4444' /* red-500 explicitly */ }}>
                                    {member.name.toUpperCase()}
                                </div>
                                <div className="w-5 h-0.5 bg-red-500"></div>
                            </div>

                            {/* Full Content for active state */}
                            <div className={`!transition-all !duration-500 transform relative z-10 w-full
                                ${active === index ? 'translate-y-0 opacity-100 visible' : 'translate-y-10 opacity-0 invisible'}
                            `}>
                                {/* Tech deco marks */}
                                <div className="flex items-center !gap-2 !mb-3">
                                    <div className="h-px w-8 bg-red-500"></div>
                                    <span className="text-red-500 text-xs font-mono tracking-widest">OP-{member.id.toString().padStart(2, '0')}</span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black text-white !mb-2 leading-none" style={{ textShadow: '2px 2px 0 rgba(220,38,38,1)' }}>
                                    {member.name.toUpperCase()}
                                </h3>

                                <h4 className="text-lg md:text-xl text-red-400 font-bold !mb-4 tracking-wide uppercase">
                                    {member.role}
                                </h4>

                                <p className="text-neutral-300 text-sm md:text-base max-w-sm border-l-2 border-red-500 !pl-4 !py-1 italic hidden md:block">
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
