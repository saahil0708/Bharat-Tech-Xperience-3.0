"use client";
import React, { useState, useEffect } from "react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set the date we're counting down to (7 days from now for demo)
        const countDownDate = new Date().getTime() + 28 * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeBlocks = [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full z-50 !py-10 relative">
            {/* Title with Stranger Things vibe */}
            <h2 className="text-4xl md:text-6xl font-creepster text-red-600 tracking-widest !mb-6 text-glow-red text-center drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                THE HUNT STARTS IN
            </h2>

            {/* Countdown Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl px-4">
                {timeBlocks.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 group"
                    >
                        {/* Number */}
                        <div className="relative">
                            <span className="font-tech text-6xl md:text-8xl text-red-500 font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:text-red-400 transition-colors">
                                {block.value.toString().padStart(2, "0")}
                            </span>
                            {/* Scanline effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent pointer-events-none bg-[length:100%_4px]" />
                        </div>

                        {/* Label */}
                        <span className="mt-2 font-tech text-red-400/80 text-sm md:text-lg tracking-[0.2em] border-t border-red-900/50 pt-2 w-full text-center">
                            {block.label}
                        </span>

                        {/* Techy corner markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600/60" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-600/60" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-600/60" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600/60" />
                    </div>
                ))}
            </div>

            {/* Atmospheric bottom text */}
            {/* <div className="mt-12 text-center">
                <p className="font-tech text-red-400/60 text-sm md:text-base tracking-[0.3em] uppercase animate-pulse">
                    System Synchronization: <span className="text-red-500">Active</span>
                </p>
            </div> */}
        </div>
    );
};

export default Countdown;
