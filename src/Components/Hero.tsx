'use client';

import React, { useEffect, useState } from "react";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Function to render custom-sized letters
    // Function to render custom-sized letters
    const renderCustomText = (text: string, isFirstLine: boolean) => {
        return text.split('').map((letter, index) => {
            let fontSize = '1em'; // Default size
            let lineHeight = '0.85'; // Default line height
            const bigSize = '1.4em';

            if (isFirstLine) {
                // "BHARAT TECH"
                // BHARAT (0-5)
                if (index === 0 || index === 5) { // B and T of BHARAT
                    fontSize = bigSize;
                } else if (index === 6) { // Space
                    return <span key={index} className="mx-2"> </span>;
                } else if (index === 7 || index === 10) { // T and H of TECH
                    fontSize = bigSize;
                }
            } else {
                // "XPERIENCE" (0-8)
                if (index === 0 || index === 8) { // X and E of XPERIENCE
                    fontSize = bigSize;
                }
            }

            return (
                <span
                    key={index}
                    className="inline-block align-top"
                    style={{
                        fontSize,
                        lineHeight,
                        marginLeft: index === 0 ? '0' : '0.02em', // Adjusted for wider tracking
                        marginRight: '0.02em'
                    }}
                >
                    {letter}
                </span>
            );
        });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Red overlay grid background */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                        backgroundPosition: 'center center'
                    }}
                />
            </div>

            {/* Red pulsing orb */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/5 rounded-full blur-3xl"></div>

            {/* Scan lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)50%,rgba(0,0,0,0.2)50%)] bg-[length:100%_4px] opacity-30"></div>

            {/* CRT screen curvature effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6 md:px-4 text-center">
                {/* Main title with custom typography */}
                <div className={`relative mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>

                    {/* "BHARAT TECH" line - with multiple outline layers */}
                    <div className="relative mb-2">
                        {/* Outline layer 1 - thick glow */}
                        <div className="absolute inset-0 text-transparent">
                            <div className="text-4xl md:text-7xl lg:text-9xl font-black leading-none">
                                {renderCustomText("BHARAT TECH", true)}
                            </div>
                        </div>

                        {/* Outline layer 2 - main stroke */}
                        <div
                            className="text-4xl md:text-7xl lg:text-9xl font-black leading-none"
                            style={{
                                WebkitTextStroke: '1px rgba(220, 38, 38, 0.9)',
                                color: 'transparent',
                                filter: 'drop-shadow(0 0 5px rgba(220, 38, 38, 0.5))'
                            }}
                        >
                            {renderCustomText("BHARAT TECH", true)}
                        </div>

                        {/* Outline layer 3 - subtle inner shadow */}
                        <div
                            className="absolute inset-0 text-transparent opacity-60"
                            style={{
                                WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)',
                                filter: 'blur(0.5px)'
                            }}
                        >
                            <div className="text-4xl md:text-7xl lg:text-9xl font-black leading-none">
                                {renderCustomText("BHARAT TECH", true)}
                            </div>
                        </div>
                    </div>

                    {/* "XPERIENCE" line - with multiple outline layers */}
                    <div className="relative">
                        {/* Outline layer 1 - thick glow */}
                        <div className="absolute inset-0 text-transparent">
                            <div className="text-3xl md:text-6xl lg:text-8xl font-black leading-none">
                                {renderCustomText("XPERIENCE", false)}
                            </div>
                        </div>

                        {/* Outline layer 2 - main stroke */}
                        <div
                            className="text-3xl md:text-6xl lg:text-8xl font-black leading-none"
                            style={{
                                WebkitTextStroke: '1px rgba(220, 38, 38, 0.9)',
                                color: 'transparent',
                                filter: 'drop-shadow(0 0 5px rgba(220, 38, 38, 0.5))'
                            }}
                        >
                            {renderCustomText("XPERIENCE", false)}
                        </div>

                        {/* Outline layer 3 - subtle inner shadow */}
                        <div
                            className="absolute inset-0 text-transparent opacity-60"
                            style={{
                                WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)',
                                filter: 'blur(0.5px)'
                            }}
                        >
                            <div className="text-3xl md:text-6xl lg:text-8xl font-black leading-none">
                                {renderCustomText("XPERIENCE", false)}
                            </div>
                        </div>
                    </div>


                    {/* Version number - "3.0" */}
                    <div className="relative mt-4">
                        <div
                            className="text-xl md:text-4xl lg:text-5xl font-black tracking-widest"
                            style={{
                                WebkitTextStroke: '1px rgba(220, 38, 38, 0.8)',
                                color: 'transparent',
                                filter: 'drop-shadow(0 0 3px rgba(220, 38, 38, 0.3))'
                            }}
                        >
                            3.0
                        </div>
                    </div>



                    {/* Decorative Divider with Text */}
                    <div className="!flex !items-center !justify-center w-full max-w-5xl !mx-auto !mt-8 !mb-4 !px-4">
                        <div className="h-0.5 !mr-5 !flex-grow bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
                        <h2 className="mx-6 text-xl md:text-3xl font-bold text-white tracking-[0.2em] !text-center"
                            style={{ textShadow: '0 0 15px rgba(255,255,255,0.6)' }}>
                            NATIONAL LEVEL <br className="md:hidden" /> HACKATHON
                        </h2>
                        <div className="h-0.5 !ml-5 !flex-grow bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
                    </div>


                    {/* Tagline */}
                    <div className="relative w-full max-w-5xl !mx-auto !text-center">
                        <p className="text-gray-100 text-xs md:text-sm lg:text-base font-light tracking-wide leading-relaxed uppercase !text-center">
                            <span className="text-red-500 font-bold">EMPOWER YOUR TECH DREAMS:</span> REGISTER FOR BHARAT TECH XPERIENCE AND TURN YOUR IDEAS INTO REALITY. JOIN US ON A PATH OF LIMITLESS INNOVATION!
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech HUD Border Effect - Corners */}
            <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top Left */}
                <svg className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Top Right */}
                <svg className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80 transform scale-x-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Bottom Left */}
                <svg className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80 transform scale-y-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Bottom Right */}
                <svg className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80 transform scale-x-[-1] scale-y-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Center Tech Lines */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
            </div>

            {/* Floating particles - Upside Down Ash */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {isLoaded && [...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-400 rounded-full animate-float opacity-50"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Custom animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Custom spacing adjustments */
        .tracking-tighter {
          letter-spacing: -0.05em;
        }
        
        /* Ensure proper alignment */
        .align-top {
          vertical-align: top;
        }
      `}</style>
        </section>
    );
}