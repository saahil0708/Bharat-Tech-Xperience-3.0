"use client";
import React from "react";

const Prizes = () => {
    return (
        <section id="prizes" className="!min-h-screen !w-full !relative !flex !items-center !justify-center !bg-transparent !overflow-hidden !py-20">
            {/* Background Atmosphere */}
            <div className="!absolute !inset-0 !pointer-events-none">
                <div className="!absolute !top-0 !left-0 !w-full !h-full !bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] !from-red-900/20 !via-black !to-black"></div>
                <div className="!absolute !top-20 !left-1/4 !w-96 !h-96 !bg-red-600/10 !rounded-full !blur-3xl !animate-pulse"></div>
            </div>

            <div className="!max-w-7xl !mx-auto !px-4 !relative !z-10 !w-full !text-center">
                {/* Header */}
                <div className="!mb-16">
                    <h2 className="!text-5xl md:!text-7xl !font-black !text-white !tracking-widest !mb-4"
                        style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.5)" }}>
                        PRIZES
                    </h2>
                    <div className="!h-1 !w-32 !bg-red-600 !mx-auto !shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
                    <p className="!mt-6 !text-gray-400 !text-sm !tracking-[0.3em] !uppercase font-orbitron">
                        Rewards for the Worthy
                    </p>
                </div>

                {/* TBA Content */}
                <div className="!relative !p-12 !border !border-dashed !border-red-900/50 !bg-zinc-900/20 !backdrop-blur-sm !rounded-lg !max-w-3xl !mx-auto">
                    <div className="!text-6xl md:!text-8xl !font-black !text-red-600 !tracking-tighter !animate-pulse" style={{ textShadow: "0 0 30px rgba(220, 38, 38, 0.8)" }}>
                        COMING SOON
                    </div>
                    <p className="!mt-8 !text-xl !text-gray-300 !font-mono !tracking-widest font-orbitron">
                        /// TRANSMISSION INTERRUPTED ///
                    </p>
                    <p className="!mt-2 !text-gray-500 !text-sm !font-mono font-orbitron">
                        PRIZE POOL DATA ENCRYPTED. DECRYPTION IN PROGRESS...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Prizes;
