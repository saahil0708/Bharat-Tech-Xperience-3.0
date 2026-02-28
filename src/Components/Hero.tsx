'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Scrollytelling Transforms
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const bg3Opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Function to render custom-sized letters (Stranger Things style) with zoom-out animation
    const renderCustomText = (text: string, isFirstLine: boolean) => {
        return text.split('').map((letter, index) => {
            let fontSize = '1em'; // Default size
            const bigSize = '1.4em';
            
            // Determine if it's an edge letter (Stranger Things style)
            let isEdge = false;
            if (isFirstLine) {
                // "BHARAT" and "TECH"
                if (index === 0 || index === 5 || index === 7 || index === 10) isEdge = true;
            } else {
                // "XPERIENCE"
                if (index === 0 || index === 8) isEdge = true;
            }

            if (isEdge) fontSize = bigSize;
            if (letter === ' ') return <span key={index} className="mx-2"> </span>;

            // Alternate letter logic: pairs like (0,2), (1,3), (4,6), (5,7)...
            const quad = Math.floor(index / 4);
            const isOdd = index % 2 !== 0;
            const delayStep = (quad * 2) + (isOdd ? 1 : 0);
            const baseDelay = isFirstLine ? 0.3 : 1.2;

            return (
                <motion.span
                    key={index}
                    initial={{ 
                        scale: 4, 
                        opacity: 0, 
                        filter: 'blur(10px)',
                        y: 0
                    }}
                    animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        filter: 'blur(0px)',
                        y: 0
                    }}
                    transition={{ 
                        duration: 1.5, 
                        delay: baseDelay + (delayStep * 0.3),
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block"
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize,
                        lineHeight: '0.8',
                        verticalAlign: 'top',
                        marginTop: isEdge ? '0' : '0.15em',
                        marginLeft: '0.02em',
                        marginRight: '0.02em',
                        display: 'inline-block'
                    }}
                >
                    {letter}
                </motion.span>
            );
        });
    };

    return (
        <section 
            id="home" 
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
        >
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
            <div className="relative z-10 !mt-16 container mx-auto px-6 md:px-4 text-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ opacity, y: textY }}
                    className="relative"
                >
                    
                    {/* Visual Composition */}
                    <div className="relative inline-block mb-12 select-none">
                        
                        {/* BIG "3" BACKGROUND */}
                        <motion.div 
                            style={{ scale, opacity: bg3Opacity }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                        >
                            <span className="text-[22rem] md:text-[35rem] lg:text-[45rem] font-black leading-none select-none pointer-events-none"
                                style={{
                                    fontFamily: "'DM Serif Display', serif",
                                    color: '#8b0000',
                                    background: 'linear-gradient(to bottom, #ff0000, #4b0000)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    filter: 'drop-shadow(10px 10px 20px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))',
                                    transform: 'scaleY(1.1)',
                                    display: 'block'
                                }}>
                                3
                            </span>
                        </motion.div>

                    {/* HOLLOW TEXT HEADINGS */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 flex flex-col items-center"
                    >
                        {/* BHARAT TECH */}
                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, scale: 1.3, y: -50 },
                                visible: { 
                                    opacity: 1, 
                                    scale: 1, 
                                    y: 0,
                                    transition: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 } 
                                }
                            }}
                            className="text-4xl md:text-7xl lg:text-9xl font-normal text-transparent mb-4"
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                WebkitTextStroke: '3px #dc2626',
                                letterSpacing: '0.05em'
                            }}>
                            {renderCustomText("BHARAT TECH", true)}
                        </motion.h1>

                        {/* XPERIENCE */}
                        <motion.h2 
                            variants={{
                                hidden: { opacity: 0, scale: 1.3, y: -50 },
                                visible: { 
                                    opacity: 1, 
                                    scale: 1, 
                                    y: 0,
                                    transition: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1 } 
                                }
                            }}
                            className="text-3xl md:text-6xl lg:text-8xl font-normal text-transparent"
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                WebkitTextStroke: '3px #dc2626',
                                letterSpacing: '0.1em'
                            }}>
                            {renderCustomText("XPERIENCE", false)}
                        </motion.h2>
                    </motion.div>
                    </div>

                    {/* Decorative Divider with Text */}
                    <div className="!flex !items-center !justify-center w-full max-w-5xl !mx-auto !mt-12 !mb-6 !px-4">
                        <div className="h-0.5 !mr-5 !flex-grow bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
                        <h2 className="mx-6 text-xl md:text-3xl font-bold text-white tracking-[0.2em] !text-center uppercase"
                            style={{ 
                                textShadow: '0 0 15px rgba(255,255,255,0.6)' 
                            }}>
                            National Level <br className="md:hidden" /> Hackathon
                        </h2>
                        <div className="h-0.5 !ml-5 !flex-grow bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
                    </div>

                    {/* Tagline */}
                    <div className="relative w-full max-w-5xl !mx-auto !text-center">
                        <p className="text-gray-100 text-xs md:text-sm lg:text-base font-light tracking-wide leading-relaxed uppercase !text-center"
                           style={{ fontFamily: "'DM Serif Display', serif" }}>
                            <span className="text-red-500 font-bold">EMPOWER YOUR TECH DREAMS:</span> REGISTER FOR BHARAT TECH XPERIENCE AND TURN YOUR IDEAS INTO REALITY. JOIN US ON A PATH OF LIMITLESS INNOVATION!
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Tech HUD Border Effect - Corners */}
            <div className="absolute inset-0 pointer-events-none z-20">
                {/* HUD Corners... */}
                {/* (Kept SVG HUD structure for visual consistency) */}
                <svg className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>
                <svg className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80 transform scale-x-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>
                <svg className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80 transform scale-y-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>
                <svg className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-red-600 opacity-80 transform scale-x-[-1] scale-y-[-1]" viewBox="0 0 100 100">
                    <path d="M0 0 L40 0 L50 10 L10 10 L10 50 L0 60 Z" fill="currentColor" />
                    <rect x="0" y="70" width="5" height="30" fill="currentColor" className="animate-pulse" />
                </svg>

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
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
