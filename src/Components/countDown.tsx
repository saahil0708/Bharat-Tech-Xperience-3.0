"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2026-03-14T00:00:00");

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full z-50 !py-10 relative">
            <h2 className="text-3xl md:text-5xl font-orbitron text-white tracking-[0.2em] font-bold !mb-12 text-center drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] uppercase">
                THE <span className="text-red-700 ">HUNT</span> STARTS IN
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                <CountdownUnit value={timeLeft.days} label="DAYS" />
                <CountdownUnit value={timeLeft.hours} label="HOURS" />
                <CountdownUnit value={timeLeft.minutes} label="MINUTES" />
                <CountdownUnit value={timeLeft.seconds} label="SECONDS" />
            </div>
        </div>
    );
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => {
    // Split value into two digits for separate flipping if needed, 
    // but for simplicity and better visual flow, we'll flip the whole number or use a pad.
    // Actually, handling single digit flip is better. Let's do 2 digits.
    const tens = Math.floor(value / 10);
    const ones = value % 10;

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1">
                <FlipCard digit={tens} />
                <FlipCard digit={ones} />
            </div>
            <span className="text-xs md:text-sm font-orbitron text-red-400/80 tracking-[0.2em] uppercase">
                {label}
            </span>
        </div>
    );
};

const FlipCard = ({ digit }: { digit: number }) => {
    return (
        <div className="relative w-12 h-20 md:w-20 md:h-32 rounded-lg !border !border-red-900/50 shadow-[0_0_15px_rgba(220,38,38,0.2)] overflow-hidden">
            {/* Background Static Number */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-7xl font-orbitron font-bold text-red-600">
                    {digit}
                </span>
            </div>

            {/* Flip Animation Overlay */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={digit}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center border-t border-red-900/30 origin-bottom"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <span className="text-4xl md:text-7xl font-orbitron font-bold text-red-500">
                        {digit}
                    </span>
                </motion.div>
            </AnimatePresence>

            {/* Shine/Gloss effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
        </div>
    );
};

export default Countdown;
