"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "motion/react";

const StatCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const animate = (time: number) => {
                if (!startTime) startTime = time;
                const progress = Math.min((time - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
}

const About = () => {
    const [activeTab, setActiveTab] = useState<'event' | 'community'>('event');

    return (
        <section id="about" className="!relative !w-full !py-24 !flex !items-center !justify-center !overflow-hidden !z-20 !min-h-screen">
            {/* Background Video - Increased z-index to composite properly over the dark overlays */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="!absolute !inset-0 !w-full !h-full !object-cover !z-[9] !pointer-events-none"
                style={{ mixBlendMode: 'screen', opacity: 0.30 }}
            >
                <source src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZDXssMor6eLOCVu3qXz5kBA2UdjWyK8vogR0I" type="video/mp4" />
            </video>

            {/* Video Overlay - Adjusted for better visibility of the video while keeping text readable */}
            <div className="!absolute !inset-0 !bg-black/50 !z-[5]"></div>
            <div className="!absolute !inset-0 !bg-gradient-to-t !from-black !via-transparent !to-black/60 !z-[6]"></div>

            {/* Dynamic Background Flare */}
            <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] !from-red-900/10 !via-transparent !to-transparent !pointer-events-none !z-[7]"></div>

            {/* Tech Grid Overlay */}
            <div className="!absolute !inset-0 !bg-[length:50px_50px] !bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] !opacity-10 !z-[8]"></div>

            <div className="!w-full !max-w-7xl !mx-auto !px-6 md:!px-16 !flex !flex-col md:!flex-row !items-center !justify-between !gap-16 !relative !z-10">

                {/* LEFT COLUMN: Content */}
                <div className="!w-full md:!w-1/2 !relative !z-10">
                    {/* Header */}
                    <div className="!mb-6 !text-left">
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-white mb-4 font-orbitron uppercase"
                            style={{ textShadow: "0 0 30px rgba(179,0,0,0.6)" }}
                        >
                            ABOUT <span className="text-[#E7000B]">US</span>
                        </h2>

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
                                            <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">
                                                <StatCounter end={36} />H
                                            </span>
                                            <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Code Sprint</span>
                                        </div>
                                        <div className="!w-[1px] !h-12 !bg-gray-800"></div>
                                        <div className="!group">
                                            <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">
                                                <StatCounter end={500} />+
                                            </span>
                                            <span className="!text-red-600 !text-xs !font-bold !uppercase !tracking-widest">Elite Teams</span>
                                        </div>
                                        <div className="!w-[1px] !h-12 !bg-gray-800"></div>
                                        <div className="!group">
                                            <span className="!block !text-4xl !font-black !text-white group-hover:!text-red-500 transition-colors">
                                                <StatCounter end={5} />L+
                                            </span>
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
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="!w-full !h-full"
                            >
                                {/* Left empty as per user's manual edits to clean up the view */}
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
                                <div className="!relative !w-full !h-full !overflow-hidden !transition-colors !duration-500 hover:!shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                                    <div className="!absolute !inset-2 md:!inset-4">
                                        <Image
                                            src="https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwQsbMm7gYaMrzqbwX4Algs3U6BdNIpZiFneDf"
                                            alt="Bharat Tech Community"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="!object-contain !opacity-80 hover:!opacity-100 !transition-all !duration-700 hover:!scale-105"
                                        />
                                    </div>

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