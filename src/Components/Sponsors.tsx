"use client";
import React from "react";

const Sponsors = () => {
    return (
        <section id="sponsors" className="!min-h-[60vh] !w-full !relative !flex !items-center !justify-center !bg-transparent !overflow-hidden !py-20 !border-t !border-red-900/20">
            {/* Background Atmosphere */}
            <div className="!absolute !inset-0 !pointer-events-none">
                <div className="!absolute !inset-0 !bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] !from-red-900/10 !via-black !to-black"></div>
                {/* Horizontal scan lines */}
                <div className="!absolute !inset-0 !bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_1px,rgba(0,0,0,0.4)_1px)] !bg-[length:100%_4px] !opacity-20"></div>
            </div>

            <div className="!max-w-7xl !mx-auto !px-4 !relative !z-10 !w-full !text-center">
                {/* Header */}
                <div className="!mb-16">
                    <h2 className="!text-4xl md:!text-6xl !font-black !text-white !tracking-widest !mb-4"
                        style={{ textShadow: "0 0 15px rgba(220, 38, 38, 0.4)" }}>
                        SPONSORS
                    </h2>
                    <div className="!h-1 !w-24 !bg-red-600 !mx-auto !shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                    <p className="!mt-6 !text-gray-500 !text-xs !tracking-[0.4em] !uppercase font-orbitron">
                        Powered By The Giants
                    </p>
                </div>

                {/* TBA Content */}
                <div className="!relative !p-12 !border !border-dashed !border-gray-800 !bg-zinc-900/20 !backdrop-blur-sm !rounded-lg !max-w-3xl !mx-auto">
                    <div className="!text-5xl md:!text-7xl !font-black !text-gray-700 !tracking-tighter !animate-pulse">
                        RECRUITING
                    </div>
                    <p className="!mt-6 !text-lg !text-red-500 !font-mono !tracking-widest !uppercase">
                        /// ALLIANCE FORMATION IN PROGRESS ///
                    </p>
                    
                    {/* Join Button */}
                    <div className="!mt-10 !relative !z-30">
                        <a
                            href="https://forms.gle/MWypPzM7zyKJWVkQ7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block !px-10 !py-3 bg-red-600 text-white font-orbitron text-base font-bold hover:bg-red-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] relative overflow-hidden group"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                        >
                            <span className="relative z-10 uppercase tracking-widest">Become a Sponsor</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
