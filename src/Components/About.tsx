"use client";
import React from "react";

const About = () => {
    return (
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden z-20 min-h-screen">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Background Ambience (Subtle) */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

                {/* LEFT COLUMN: Content */}
                <div className="w-full md:w-1/2 relative z-10">
                    {/* Header */}
                    <div className="mb-8 text-left">
                        <h2 className="text-6xl md:text-8xl font-creepster text-red-600 tracking-wider drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
                            ABOUT
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-transparent mt-2" />
                    </div>

                    {/* Text Content - No Background, Just Text */}
                    <div className="flex flex-col gap-6 text-left">
                        <p className="font-tech text-red-100/90 text-lg md:text-xl leading-relaxed tracking-wide">
                            <span className="text-red-500 font-bold">Bharat Tech Xperience 3.0</span> is the ultimate convergence of technology and innovation.
                            As a National Level Hackathon, we bring together the brightest minds to challenge the norms.
                        </p>
                        <p className="font-tech text-red-100/80 text-lg md:text-xl leading-relaxed tracking-wide">
                            Over <span className="text-red-400 font-bold">24 intense hours</span>, participants will dive deep into problem-solving, coding, and deploying solutions that matter.
                            This is your platform to showcase your skills and survive the code.
                        </p>

                        {/* Minimal Stats Inline */}
                        <div className="flex flex-wrap gap-8 mt-8">
                            <div>
                                <span className="block text-3xl font-tech font-bold text-red-500">24H</span>
                                <span className="text-red-400/60 text-xs uppercase tracking-wider">Duration</span>
                            </div>
                            <div className="w-px h-10 bg-red-900/50" />
                            <div>
                                <span className="block text-3xl font-tech font-bold text-red-500">50+</span>
                                <span className="text-red-400/60 text-xs uppercase tracking-wider">Teams</span>
                            </div>
                            <div className="w-px h-10 bg-red-900/50" />
                            <div>
                                <span className="block text-3xl font-tech font-bold text-red-500">10L+</span>
                                <span className="text-red-400/60 text-xs uppercase tracking-wider">Prizes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Visual Element (Tech Portal / Rift) */}
                <div className="w-full md:w-1/2 flex items-center justify-end relative min-h-[400px]">
                    {/* Center Orb */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                        {/* Core */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-full border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.2)] animate-pulse" />

                        {/* Spinning Rings */}
                        <div className="absolute inset-0 border-t border-red-600/40 rounded-full animate-[spin_4s_linear_infinite]" />
                        <div className="absolute inset-4 border-b border-red-600/40 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
                        <div className="absolute inset-8 border-l border-red-600/40 rounded-full animate-[spin_5s_linear_infinite]" />

                        {/* Tech Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-red-600/20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-px bg-red-600/20" />

                        {/* Inner Content (Symbol or Icon) */}
                        <div className="font-creepster text-red-600 text-9xl opacity-40 select-none">
                            3.0
                        </div>
                    </div>

                    {/* Floating Particles/Nodes (CSS only) */}
                    <div className="absolute top-10 right-20 w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100 shadow-[0_0_10px_red]" />
                    <div className="absolute bottom-20 left-10 w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300 shadow-[0_0_10px_red]" />
                </div>

            </div>
        </section>
    );
};

export default About;
