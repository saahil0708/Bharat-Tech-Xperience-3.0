"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const About = () => {
    const [activeTab, setActiveTab] = useState<'event' | 'community'>('event');

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
                    <div className="!mb-6 !text-left">
                        <h2 className="!text-6xl md:!text-8xl !font-black font-azonix !text-white !tracking-tighter !mb-2 !drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                            ABOUT <span className="!text-red-600">US</span>
                        </h2>
                        <div className="!w-24 !h-2 !bg-red-600 !shadow-[0_0_20px_red] !mb-8"></div>

                        {/* Tabs */}
                        <div className="!flex !gap-8 !pb-0">
                            <button
                                onClick={() => setActiveTab('event')}
                                className={`!text-sm font-azonix !tracking-wider !transition-colors !pb-2 ${activeTab === 'event' ? '!text-red-500 !border-b-2 !border-red-500 -mb-[2px]' : '!text-gray-500 hover:!text-gray-300'}`}
                            >
                                THE EVENT
                            </button>
                            <button
                                onClick={() => setActiveTab('community')}
                                className={`!text-sm font-azonix !tracking-wider !transition-colors !pb-2 ${activeTab === 'community' ? '!text-red-500 !border-b-2 !border-red-500 -mb-[2px]' : '!text-gray-500 hover:!text-gray-300'}`}
                            >
                                WHO ARE WE
                            </button>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="!flex !flex-col !gap-6 !text-left !relative !min-h-[250px] !mt-6">
                        {/* Side decorative line */}
                        <div className="!absolute !-left-8 !top-0 !bottom-0 !w-[1px] !bg-gradient-to-b !from-red-600 !to-transparent !hidden md:!block"></div>

                        <AnimatePresence mode="wait">
                            {activeTab === 'event' ? (
                                <motion.div
                                    key="event"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="!font-lato !text-gray-300 !text-lg md:!text-[16px] !leading-relaxed !tracking-wide !mb-6">
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
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="community"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="!font-lato !text-gray-300 !text-lg md:!text-[16px] !leading-relaxed !tracking-wide !mb-6">
                                        We are a collective of driven developers, designers, and visionaries committed to pushing the boundaries of technology. Organized by passionate students, our community thrives on collaboration and continuous learning.
                                    </p>
                                    <p className="font-orbitron !text-gray-400 !text-lg md:!text-[16px] !leading-relaxed !tracking-wide">
                                        Our mission is to cultivate an ecosystem where ideas evolve into reality. By bridging the gap between academia and industry, we empower the next generation of tech leaders to build solutions that matter and leave a lasting impact.
                                    </p>

                                    {/* Stats with Icons */}
                                    <div className="!flex !flex-wrap !gap-12 !mt-10">
                                        <div className="!group">
                                            <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">27</span>
                                            <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Core Members</span>
                                        </div>
                                        <div className="!w-[1px] !h-12 !bg-gray-800"></div>
                                        <div className="!group">
                                            <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">1</span>
                                            <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Shared Vision</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* RIGHT COLUMN: Visual Element */}
                <div className="!w-full md:!w-1/2 !flex !mt-10 !items-center !justify-center !relative !min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'event' ? (
                            <motion.div
                                key="visual-event"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="!flex !items-center !justify-center !w-full !h-full"
                            >
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
                            </motion.div>
                        ) : (
                            <motion.div
                                key="visual-community"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="!relative !w-full !max-w-md !aspect-[4/3] !z-10"
                            >
                                {/* Community Image */}
                                <div className="!relative !w-full !h-full !overflow-hidden !border-2 !border-gray-800 hover:!border-red-600 !transition-colors !duration-500 !shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                                    <img
                                        src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0Zya2CBWJFnSIJycEK9T8vGaN6OqDf471Xi2ko"
                                        alt="Bharat Tech Community"
                                        className="!w-full !h-full !object-cover !opacity-80 hover:!opacity-100 !transition-all !duration-700 hover:!scale-105"
                                    />

                                    {/* Tech Overlay lines */}
                                    <div className="!absolute !inset-0 !bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px)] !bg-[length:100%_4px] !pointer-events-none"></div>
                                </div>

                                {/* Decorators */}
                                <div className="!absolute !-bottom-4 !-right-4 !w-24 !h-24 !border-b-2 !border-r-2 !border-red-600 !z-0"></div>
                                <div className="!absolute !-top-4 !-left-4 !w-16 !h-16 !border-t-2 !border-l-2 !border-red-600 !z-0"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default About;