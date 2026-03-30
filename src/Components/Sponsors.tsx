"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";



const Sponsors = () => {
    const sponsors = [

        { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5lt05bpSaUVX5mB4TDjnvbPJgZIzWOY17FsAp", alt: "Sponsor 2" },
        { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5LcPP8LV4dQjwtUe75ApxbP68hlkFNKnGZIqT", alt: "Sponsor 3" },
        // { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5hDD2z1Ndx4bWp0UlI1ZKuzEFvVsLw7JfMokX", alt: "Sponsor 4" },
        { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5BeAwRBKzPWfylH5GYExmgnb83j4RheVQD0JN", alt: "Sponsor 4" },
        { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5UNr23LL1ow0iF26LZCWSKfchnXvyTAIzdqmP", alt: "Sponsor 5" },
        { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5tVLYGpIEyKp7vbuh4aZnGcCs8ARDxHFO2LY0", alt: "Sponsor 6" },
        { src: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw3aao2tbzTfnObYWXHhZLywvtoAjKru4VC7F2", alt: "Sponsor 7" },
        { src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5gh8CwAcLOBCxgv7HbYAsdorPphtX2Fejq9kE", alt: "Sponsor 8" }
    ];

    return (
        <section id="sponsors" className="!min-h-screen !w-full !relative !flex !items-center !justify-center !overflow-hidden !py-24 !border-t !border-red-600/10">
            {/* Dynamic Background Atmosphere */}
            <div className="!absolute !inset-0 !pointer-events-none">
                <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] !from-red-900/30 !via-black !to-black"></div>
                {/* Grid Pattern */}
                <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] !bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                {/* Glowing Orbs */}
                <div className="!absolute !top-0 !left-1/4 !w-96 !h-96 !bg-red-600/10 !rounded-full !blur-[128px] !animate-pulse"></div>
                <div className="!absolute !bottom-0 !right-1/4 !w-96 !h-96 !bg-red-900/10 !rounded-full !blur-[128px] !animate-pulse !delay-1000"></div>
            </div>

            <div className="!max-w-7xl !mx-auto !px-6 !relative !z-10 !w-full !text-center">
                {/* Header Section */}
                <div className="!mb-20 !text-center !w-full !px-4">
                    <div className="!inline-block !relative !w-full">
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-white mb-4 font-orbitron uppercase"
                            style={{ textShadow: "0 0 30px rgba(179,0,0,0.6)" }}
                        >
                            OUR <span className="text-[#E7000B]">SPONSORS</span>
                        </h2>
                    </div>
                    <p className="!mt-10 !text-red-500/80 !text-sm md:!text-base !font-mono !tracking-[0.5em] !uppercase">
                        /// INDUSTRY ALLIANCES ///
                    </p>
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="!grid !grid-cols-2 sm:!grid-cols-3 md:!grid-cols-4 lg:!grid-cols-5 !gap-4 md:!gap-6 !mb-20"
                >
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                            className="!group !relative !aspect-square !flex !items-center !justify-center !bg-zinc-900/20 !backdrop-blur-xl !border !border-white/5 !rounded-xl !p-4 md:!p-6 !transition-all !duration-500 hover:!border-red-500/40 hover:!scale-[1.02] hover:!shadow-[0_0_40px_rgba(220,38,38,0.15)] !cursor-pointer"
                        >
                            {/* Card Content Overlay */}
                            <div className="!absolute !inset-0 !bg-gradient-to-br !from-white/[0.03] !to-transparent !rounded-xl"></div>
                            
                            {/* Animated Corner Accents */}
                            <div className="!absolute !top-3 !left-3 !w-3 !h-3 !border-t !border-l !border-red-500/30 group-hover:!border-red-500 !transition-all !duration-500"></div>
                            <div className="!absolute !bottom-3 !right-3 !w-3 !h-3 !border-b !border-r !border-red-500/30 group-hover:!border-red-500 !transition-all !duration-500"></div>

                            {/* Scanline Effect */}
                            <div className="!absolute !inset-0 !bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] !bg-[length:100%_4px] !pointer-events-none"></div>

                            {/* Logo with Glow */}
                            <div className="!relative !z-10 !w-full !h-full !flex !items-center !justify-center">
                                <img
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className="!max-w-[80%] !max-h-[80%] !object-contain !transition-all !duration-700 group-hover:!scale-110 !drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:!drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                                />
                            </div>

                            {/* Hover Reveal Badge */}
                            <div className="!absolute !-bottom-2 !left-1/2 !-translate-x-1/2 !bg-red-600 !text-white !text-[8px] !font-bold !px-2 !py-0.5 !rounded-full !opacity-0 group-hover:!opacity-100 !transition-all !duration-300 !tracking-widest !uppercase !shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                                Partner
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

               <div className="!mt-12 !text-center !relative !z-30">
          <a
            href="https://forms.gle/MWypPzM7zyKJWVkQ7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block md:!px-10 !px-8 !py-3 bg-red-600 text-white font-orbitron text-base font-bold hover:bg-red-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] relative overflow-hidden group"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 uppercase tracking-widest">Become a Sponsor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </a>
        </div>
            </div>
        </section>
    );
};

export default Sponsors;
