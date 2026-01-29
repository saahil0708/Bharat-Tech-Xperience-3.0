'use client';

import React, { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function HackathonCountdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isCritical, setIsCritical] = useState(false);
    const [glitch, setGlitch] = useState(false);

    // Set hackathon end date (24 hours from now for demo)
    const hackathonEnd = new Date();
    hackathonEnd.setDate(hackathonEnd.getDate() + 2); // 2 days from now
    hackathonEnd.setHours(23, 59, 59, 999);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = hackathonEnd.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });

                // Critical mode when less than 1 hour remaining
                setIsCritical(difference < 3600000);
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsCritical(true);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        // Random glitch effect
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                setGlitch(true);
                setTimeout(() => setGlitch(false), 100);
            }
        }, 2000);

        return () => {
            clearInterval(timer);
            clearInterval(glitchInterval);
        };
    }, []);

    const TimeUnit = ({ value, label, isCritical }: { value: number; label: string; isCritical: boolean }) => (
        <div className="relative group">
            <div className={`relative z-10 flex flex-col items-center justify-center p-4 md:p-6 rounded-xl 
        ${isCritical
                    ? 'bg-gradient-to-br from-red-900/40 to-black/60 border-2 border-red-600/60'
                    : 'bg-gradient-to-br from-gray-900/40 to-black/60 border border-red-500/30'
                } backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-500/70`}>

                {/* Glitch effect overlay */}
                {glitch && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 rounded-xl animate-pulse"></div>
                )}

                {/* Main value with neon effect */}
                <div className={`text-3xl md:text-5xl lg:text-6xl font-bold font-mono mb-1 
          ${isCritical ? 'animate-pulse' : ''}`}
                    style={{
                        textShadow: isCritical
                            ? '0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444'
                            : '0 0 5px #ef4444, 0 0 10px #ef4444'
                    }}>
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r 
            ${isCritical
                            ? 'from-red-400 via-red-300 to-red-500'
                            : 'from-red-500 via-red-400 to-red-600'
                        }`}>
                        {value.toString().padStart(2, '0')}
                    </span>
                </div>

                {/* Unit label */}
                <div className="text-xs md:text-sm font-mono tracking-widest uppercase">
                    <span className={`${isCritical ? 'text-red-400' : 'text-gray-300'}`}>
                        {label}
                    </span>
                </div>

                {/* Pulsing dot for critical state */}
                {isCritical && label === 'SECONDS' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                )}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-xl blur-xl 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
    );

    return (
        <div className="relative w-full max-w-4xl mx-auto p-4 md:p-6">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10 rounded-2xl blur-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-2xl opacity-50 animate-pulse"></div>

            {/* Main container */}
            <div className="relative bg-black/20 backdrop-blur-xl 
        border border-red-500/20 rounded-2xl p-6 md:p-8 shadow-2xl shadow-red-900/20">

                {/* Header with terminal style */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="font-mono text-gray-300 text-sm md:text-base tracking-wider">
                                HACKATHON_COUNTDOWN.EXE
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${isCritical ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                            <span className="font-mono text-xs text-gray-400">
                                {isCritical ? 'CRITICAL' : 'ACTIVE'}
                            </span>
                        </div>
                    </div>

                    {/* Title with glitch effect */}
                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            <span className={`font-mono tracking-wider ${glitch ? 'opacity-80' : 'opacity-100'}`}>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                                    TIME REMAINING
                                </span>
                                <span className="text-red-500 ml-2">_</span>
                            </span>
                        </h2>

                        {/* Subtitle */}
                        <p className="font-mono text-gray-400 text-sm md:text-base tracking-wide">
                            <span className="text-red-500">HACKATHON TERMINATION SEQUENCE INITIATED</span>
                        </p>
                    </div>
                </div>

                {/* Countdown units grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <TimeUnit value={timeLeft.days} label="DAYS" isCritical={isCritical} />
                    <TimeUnit value={timeLeft.hours} label="HOURS" isCritical={isCritical} />
                    <TimeUnit value={timeLeft.minutes} label="MINUTES" isCritical={isCritical} />
                    <TimeUnit value={timeLeft.seconds} label="SECONDS" isCritical={isCritical} />
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-gray-300 text-sm tracking-wider">PROGRESS</span>
                        <span className="font-mono text-red-400 text-sm">
                            {isCritical ? 'FINAL_PHASE' : 'IN_PROGRESS'}
                        </span>
                    </div>
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out
                ${isCritical
                                    ? 'bg-gradient-to-r from-red-600 to-red-500 animate-pulse'
                                    : 'bg-gradient-to-r from-red-500 via-red-400 to-red-600'
                                }`}
                            style={{
                                width: `${100 - (timeLeft.days * 100 / 2)}%` // Progress based on days remaining
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                animate-shimmer"></div>
                        </div>
                    </div>
                </div>

                {/* Terminal output */}
                <div className="font-mono text-xs md:text-sm bg-black/50 rounded-lg p-4 border border-gray-800">
                    <div className="text-green-400 mb-1">
                        <span className="text-red-500">$</span> status --countdown --verbose
                    </div>
                    <div className="text-gray-300 space-y-1">
                        <div>
                            <span className="text-blue-400">[INFO]</span> HACKATHON DURATION: 48 HOURS
                        </div>
                        <div>
                            <span className="text-yellow-400">[WARNING]</span> TIME REMAINING: {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
                        </div>
                        <div>
                            <span className={`${isCritical ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
                                [STATUS]
                            </span> SYSTEM: {isCritical ? 'CRITICAL - FINAL SUBMISSION PHASE' : 'NOMINAL - DEVELOPMENT IN PROGRESS'}
                        </div>
                        <div className="pt-2 border-t border-gray-800">
                            <span className="text-purple-400">[ACTION]</span> SUBMISSIONS CLOSE IN:{" "}
                            <span className={`font-bold ${isCritical ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                                {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Critical warning */}
                {isCritical && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-red-900/30 to-transparent border-l-4 border-red-500 rounded-r-lg">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-red-500 rounded-full animate-ping mr-3"></div>
                            <div>
                                <div className="font-mono text-red-300 font-bold tracking-wider">
                                    ⚠️ FINAL COUNTDOWN INITIATED
                                </div>
                                <div className="font-mono text-gray-300 text-sm mt-1">
                                    SUBMIT YOUR PROJECT BEFORE TERMINATION SEQUENCE COMPLETES
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Animated border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-transparent to-blue-600 rounded-2xl 
          opacity-30 animate-gradient-xy -z-10"></div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
        </div>
    );
}