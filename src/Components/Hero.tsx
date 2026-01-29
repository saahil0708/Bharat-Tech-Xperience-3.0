'use client';

import React, { useEffect, useState } from "react";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
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
            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Pre-title text */}

                {/* Main title with OUTLINE ONLY text */}
                <h1 className={`relative mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    {/* Outline text effect */}
                    <div className="relative">
                        {/* Main outline text with red border effect */}
                        <div className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.85]">
                            <div className="relative">
                                {/* Border layer 1 - thick */}
                                <span className="absolute inset-0 text-transparent tracking-wider whitespace-nowrap" style={{
                                    WebkitTextStroke: '2px rgba(220, 38, 38, 0.8)',
                                    filter: 'blur(0.5px)'
                                }}>
                                    BHARAT TECH XPERIENCE 3.0
                                </span>

                                {/* Border layer 2 - glow */}
                                <span className="absolute inset-0 text-transparent tracking-wider whitespace-nowrap" style={{
                                    WebkitTextStroke: '1px rgba(220, 38, 38, 0.6)',
                                    filter: 'blur(1px) drop-shadow(0 0 8px rgba(220, 38, 38, 0.3))'
                                }}>
                                    BHARAT TECH XPERIENCE 3.0
                                </span>

                                {/* Border layer 3 - main outline */}
                                <span className="text-transparent tracking-wider whitespace-nowrap" style={{
                                    WebkitTextStroke: '1px rgba(220, 38, 38, 1)',
                                }}>
                                    BHARAT TECH XPERIENCE 3.0
                                </span>
                            </div>
                        </div>
                    </div>
                </h1>
            </div>

            {/* Tech HUD Border Effect - Corners */}
            <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top Left */}
                <svg className="absolute top-8 left-8 w-24 h-24 text-red-600 opacity-80" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Top Right */}
                <svg className="absolute top-8 right-8 w-24 h-24 text-red-600 opacity-80 transform scale-x-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Bottom Left */}
                <svg className="absolute bottom-8 left-8 w-24 h-24 text-red-600 opacity-80 transform scale-y-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Bottom Right */}
                <svg className="absolute bottom-8 right-8 w-24 h-24 text-red-600 opacity-80 transform scale-x-[-1] scale-y-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                {/* Center Tech Lines */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
            </div>

            {/* Floating particles - Upside Down Ash */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(20)].map((_, i) => (
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
      `}</style>
        </section>
    );
}