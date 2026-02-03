"use client";
import React from "react";

const About = () => {
    return (
        <section id="about" className="!relative !w-full !py-24 !flex !items-center !justify-center !overflow-hidden !z-20 !min-h-screen">
            {/* Dynamic Background */}
            <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] !from-red-900/10 !via-transparent !to-transparent !pointer-events-none"></div>

            {/* Tech Grid Overlay */}
            <div className="!absolute !inset-0 !bg-[length:50px_50px] !bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] !opacity-20"></div>

            <div className="!w-full !max-w-7xl !mx-auto !px-6 md:!px-16 !flex !flex-col md:!flex-row !items-center !justify-between !gap-16">

                {/* LEFT COLUMN: Content */}
                <div className="!w-full md:!w-1/2 !relative !z-10">
                    {/* Header */}
                    <div className="!mb-10 !text-left">
                        <h2 className="!text-6xl md:!text-8xl !font-black font-azonix !text-white !tracking-tighter !mb-2 !drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                            ABOUT <span className="!text-red-600">US</span>
                        </h2>
                        <div className="!w-24 !h-2 !bg-red-600 !shadow-[0_0_20px_red]"></div>
                    </div>

                    {/* Text Content */}
                    <div className="!flex !flex-col !gap-6 !text-left !relative">
                        {/* Side decorative line */}
                        <div className="!absolute !-left-8 !top-0 !bottom-0 !w-[1px] !bg-gradient-to-b !from-red-600 !to-transparent !hidden md:!block"></div>

                        <p className="!font-lato !text-gray-300 !text-lg md:!text-[16px] !leading-relaxed !tracking-wide">
                            <span className="!text-red-500 !font-bold font-azonix text-xl">Bharat Tech Xperience 3.0</span> represents the apex of collegiate innovation. We are not just a hackathon; we are a crucible where code meets creativity.
                        </p>
                        <p className="font-orbitron !text-gray-400 !text-lg md:!text-[16px] !leading-relaxed !tracking-wide">
                            In this <span className="!text-white !border-b !border-red-600 font-azonix text-xl">36-hour saga</span>, you will face challenges that test your limits. Navigate through the unknown, deploy solutions from the void, and emerge as the architect of the future.
                        </p>

                        {/* Stats with Icons */}
                        <div className="!flex !flex-wrap !gap-12 !mt-10">
                            <div className="!group">
                                <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">36H</span>
                                <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Code Sprint</span>
                            </div>
                            <div className="!w-[1px] !h-12 !bg-gray-800"></div>
                            <div className="!group">
                                <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">500+</span>
                                <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Elite Teams</span>
                            </div>
                            <div className="!w-[1px] !h-12 !bg-gray-800"></div>
                            <div className="!group">
                                <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">5L+</span>
                                <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Total Bounty</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Visual Element */}
                <div className="!w-full md:!w-1/2 !flex !items-center !justify-center !relative !min-h-[400px]">
                    {/* Floating Cards / Glitch Effect */}
                    <div className="!relative !w-80 !h-80 !bg-black/40 !backdrop-blur-md !border !border-red-600 !rotate-3 hover:!rotate-0 transition-all duration-700 !z-10 !flex !items-center !justify-center !shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                        <div className="!absolute !inset-0 !bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] !opacity-20"></div>
                        <h3 className="!text-9xl !font-black !text-red-600/20 !absolute !-top-12 !-right-12 select-none">3.0</h3>

                        <div className="!text-center !relative !z-20">
                            <div className="!text-6xl !mb-4">🚀</div>
                            <div className="!text-2xl !font-bold !text-white !tracking-widest">LEVEL UP</div>
                            <div className="!text-red-500 !text-sm !font-mono">/// SYSTEM READY</div>
                        </div>
                    </div>

                    {/* Background Glitch Elements */}
                    <div className="!absolute !top-10 !right-10 !w-64 !h-64 !border-2 !border-gray-800 !-z-10 !rotate-12"></div>
                    <div className="!absolute !-bottom-5 !-left-5 !w-full !h-full !bg-red-600/5 !-z-20 !blur-3xl"></div>
                </div>

            </div>
        </section>
    );
};

export default About;
