"use client";
import React from "react";
import { Trophy, Medal, Award, Rocket } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import { GlowingEffect } from "@/Components/ui/glowing-effect";

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

                {/* Total Pool Display */}
                <div className="!mb-20">
                    <h3 className="!text-2xl md:!text-3xl !font-bold !text-white !mb-2 font-orbitron">TOTAL PRIZE POOL</h3>
                    <div className="!text-4xl md:!text-6xl !font-black !text-transparent !bg-clip-text !bg-gradient-to-r !from-red-500 !via-white !to-red-500 font-orbitron"
                        style={{ textShadow: "0 0 30px rgba(220, 38, 38, 0.6)" }}>
                        ₹5,00,000+
                    </div>
                </div>

                {/* Podium Section */}
                <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8 !max-w-6xl !mx-auto !mb-20 !items-end">

                    {/* 1st Runner Up (Silver) */}
                    <div className="!order-2 md:!order-1">
                        <CardContainer className="!py-0 !w-full" containerClassName="!py-0 !w-full !flex !items-center !justify-center">
                            <CardBody className="!bg-zinc-900/50 !border !border-gray-600 !relative !group/card !dark:hover:shadow-2xl !dark:hover:shadow-emerald-500/[0.1] !w-full !h-auto !rounded-xl !p-8 !flex !flex-col !items-center">
                                <CardItem translateZ="50" className="!w-full !flex !justify-center !mb-4">
                                    <Medal className="!w-16 !h-16 !text-gray-400 !stroke-[1.5]" />
                                </CardItem>
                                <CardItem translateZ="60" className="!text-xl !font-bold !text-gray-300 !mb-2 font-orbitron">
                                    1st Runner Up
                                </CardItem>
                                <CardItem translateZ="100" className="!text-3xl !font-black !text-white font-orbitron">
                                    ₹75,000
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>

                    {/* Grand Winner (Gold) */}
                    <div className="!order-1 md:!order-2 !transform !scale-110 !z-10">
                        <CardContainer className="!py-0 !w-full" containerClassName="!py-0 !w-full !flex !items-center !justify-center">
                            <CardBody className="!bg-gradient-to-b !from-red-900/40 !to-black !border-2 !border-red-500 !relative !group/card !dark:hover:shadow-2xl !dark:hover:shadow-red-500/[0.1] !w-full !h-auto !rounded-2xl !p-10 !flex !flex-col !items-center !shadow-[0_0_50px_rgba(220,38,38,0.4)]">
                                <CardItem translateZ="80" className="!absolute !-top-6 !bg-red-600 !text-white !px-8 !py-2 !rounded-full !font-bold !tracking-wider font-orbitron !shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                                    CHAMPION
                                </CardItem>
                                <CardItem translateZ="100" className="!w-full !flex !justify-center !mb-6">
                                    <Trophy className="!w-24 !h-24 !text-yellow-500 !stroke-[1.5] !drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                                </CardItem>
                                <CardItem translateZ="60" className="!text-2xl md:!text-4xl !font-black !text-white !mb-2 font-orbitron">
                                    WINNER
                                </CardItem>
                                <CardItem translateZ="120" className="!text-4xl md:!text-5xl !font-black !text-red-500 !drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] font-orbitron">
                                    ₹1,00,000
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>

                    {/* 2nd Runner Up (Bronze) */}
                    <div className="!order-3 md:!order-3">
                        <CardContainer className="!py-0 !w-full" containerClassName="!py-0 !w-full !flex !items-center !justify-center">
                            <CardBody className="!bg-zinc-900/50 !border !border-orange-900/50 !relative !group/card !dark:hover:shadow-2xl !dark:hover:shadow-orange-500/[0.1] !w-full !h-auto !rounded-xl !p-8 !flex !flex-col !items-center">
                                <CardItem translateZ="50" className="!w-full !flex !justify-center !mb-4">
                                    <Medal className="!w-16 !h-16 !text-orange-400 !stroke-[1.5]" />
                                </CardItem>
                                <CardItem translateZ="60" className="!text-xl !font-bold !text-orange-200 !mb-2 font-orbitron">
                                    2nd Runner Up
                                </CardItem>
                                <CardItem translateZ="100" className="!text-3xl !font-black !text-white font-orbitron">
                                    ₹50,000
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>

                {/* Additional Prizes Section */}
                <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8 !max-w-5xl !mx-auto">
                    {/* Finalists */}
                    <div className="!relative !h-full !rounded-2xl !border !border-red-500/20 !p-2 md:!rounded-3xl md:!p-3">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            variant="default"
                            className="!border-red-500/20"
                        />
                        <div className="!relative !flex !h-full !flex-col !justify-between !gap-6 !overflow-hidden !rounded-xl !border-0.75 !p-6 !backdrop-blur-sm !dark:shadow-[0px_0px_27px_0px_#2D2D2D] !border-red-500/20">
                            <div className="!relative !flex !flex-1 !flex-col !justify-between !gap-3">
                                <div className="!space-y-3">
                                    <h3 className="!pt-0.5 !text-2xl !font-bold !text-white !flex !items-center !gap-3">
                                        <Award className="!w-8 !h-8 !text-red-500" /> Top Finalists
                                    </h3>
                                    <ul className="!space-y-4 !mt-8">
                                        <li className="!flex !justify-between !items-center !border-b !border-white/5 !pb-3">
                                            <span className="!text-gray-300">Positions 4-5</span>
                                            <span className="!text-red-400">Certificate of Excellence</span>
                                        </li>
                                        <li className="!flex !justify-between !items-center !border-b !border-white/5 !pb-3">
                                            <span className="!text-gray-300">Positions 6-10</span>
                                            <span className="!text-red-400 !font-bold font-orbitron">₹5,000 each</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Prizes */}
                    <div className="!relative !h-full !rounded-2xl !border !border-red-500/20 !p-2 md:!rounded-3xl md:!p-3">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            variant="default"
                            className="!border-red-500/20"
                        />
                        <div className="!relative !flex !h-full !flex-col !justify-between !gap-6 !overflow-hidden !rounded-xl !border-0.75 !p-6 !backdrop-blur-sm !dark:shadow-[0px_0px_27px_0px_#2D2D2D] !border-red-500/20">
                            <div className="!relative !flex !flex-1 !flex-col !justify-between !gap-3">
                                <div className="!space-y-3">
                                    <h3 className="!pt-0.5 !text-2xl !font-bold !text-white !flex !items-center !gap-3">
                                        <Rocket className="!w-8 !h-8 !text-red-500" /> Category Prizes
                                    </h3>
                                    <div className="!space-y-4 !mt-4">
                                        <div className="!p-3 !bg-white/5 !rounded-lg !border !border-white/5">
                                            <span className="!block !text-xs !text-red-500 !mb-1 font-orbitron">SPECIAL TRACKS</span>
                                            <div className="!flex !flex-wrap !gap-2">
                                                {['AI Innovation', 'FinTech', 'Social Impact'].map((cat) => (
                                                    <span key={cat} className="!px-3 !py-1 !bg-red-900/30 !rounded-full !text-sm !text-gray-200 !border !border-red-500/30">
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="!text-sm !text-gray-400 !mt-4">
                                            Specialized rewards reserved for teams demonstrating exceptional innovation in specific tracks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prizes;
