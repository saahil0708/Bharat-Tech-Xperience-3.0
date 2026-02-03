"use client";
import React from "react";

const Countdown = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full z-50 !py-10 relative">
            {/* Title with Stranger Things vibe */}
            <h2 className="text-4xl md:text-6xl font-creepster text-red-600 tracking-widest !mb-6 text-glow-red text-center drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                THE HUNT STARTS IN
            </h2>

            {/* TBA Display */}
            <div className="flex flex-col items-center justify-center">
                <div className="relative p-8 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm shadow-[0_0_30px_rgba(220,38,38,0.3)] animate-pulse">
                    <span className="font-tech text-6xl md:text-9xl text-red-600 font-bold tracking-[0.2em] drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                        TBA
                    </span>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
                </div>

                <p className="mt-8 font-mono text-red-400/80 text-sm md:text-lg tracking-[0.3em] uppercase">
                    /// AWAITING SIGNAL ///
                </p>
            </div>
        </div>
    );
};

export default Countdown;
