"use client";
import React from "react";
import { Trophy, Medal, Award, Rocket } from "lucide-react";
import { GlowingEffect } from "@/Components/ui/glowing-effect";
import PrizePool from "@/Images/PrizePool.png";

const PrizeCard = ({ rank, amount, icon, isWinner, textColor, scaleClass }) => (
  <div className={`!relative !flex !flex-col !items-center !justify-center !transition-all !duration-1000 !ease-out ${scaleClass}`}
       style={{
         transformStyle: "preserve-3d",
         perspective: "1000px",
       }}>
    {/* Frame Container with smooth 3D transform */}
    <div className="!relative !w-full !max-w-[310px] !aspect-[3/4] !flex !items-center !justify-center !overflow-hidden !rounded-[2rem] !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)] hover:!rotate-y-12 hover:!shadow-2xl"
         style={{
           transformStyle: "preserve-3d",
           transform: "rotateX(2deg) rotateY(-2deg)",
           transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
         }}>
      
      {/* 1. The Background Image - NO COLOR CHANGE */}
      <img
        src={PrizePool.src || PrizePool}
        alt="Vine Portal Frame"
        className="!absolute !inset-0 !w-full !h-full !object-cover !object-center !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ 
          clipPath: "inset(0 round 2rem)",
          transform: "translateZ(-10px) scale(1.02)",
          transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* 2. Brightness Resolver - PRESERVED ORIGINAL */}
      <div className="!absolute !inset-0 !bg-black/40 !pointer-events-none !z-[1] !rounded-[2rem] !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{ 
             transform: "translateZ(-5px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>
      
      {/* 3. Radial Vignette - PRESERVED ORIGINAL */}
      <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_center,transparent_20%,black_70%)] !opacity-60 !z-[2] !rounded-[2rem] !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{ 
             transform: "translateZ(0px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>

      {/* 4. Original Border Effect - PRESERVED */}
      <div className="!absolute !inset-0 !pointer-events-none !z-[3] !rounded-[2rem] !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{
             boxShadow: `
               inset 0 0 30px rgba(220, 38, 38, 0.1),
               0 0 20px rgba(220, 38, 38, 0.2),
               inset 0 0 15px rgba(220, 38, 38, 0.15)
             `,
             border: "1px solid rgba(220, 38, 38, 0.15)",
             filter: "blur(0.5px)",
             transform: "translateZ(5px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}>
      </div>

      {/* 5. Original Corner Effects - PRESERVED */}
      <div className="!absolute !top-0 !left-0 !w-8 !h-8 !bg-gradient-to-br !from-red-500/30 !to-transparent !rounded-tl-[2rem] !z-[4] !pointer-events-none !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{ 
             filter: "blur(2px)", 
             transform: "translateZ(8px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>
      <div className="!absolute !top-0 !right-0 !w-8 !h-8 !bg-gradient-to-bl !from-red-500/30 !to-transparent !rounded-tr-[2rem] !z-[4] !pointer-events-none !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{ 
             filter: "blur(2px)", 
             transform: "translateZ(8px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>
      <div className="!absolute !bottom-0 !left-0 !w-8 !h-8 !bg-gradient-to-tr !from-red-500/30 !to-transparent !rounded-bl-[2rem] !z-[4] !pointer-events-none !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{ 
             filter: "blur(2px)", 
             transform: "translateZ(8px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>
      <div className="!absolute !bottom-0 !right-0 !w-8 !h-8 !bg-gradient-to-tl !from-red-500/30 !to-transparent !rounded-br-[2rem] !z-[4] !pointer-events-none !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{ 
             filter: "blur(2px)", 
             transform: "translateZ(8px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>

      {/* 6. Original Edge Effect - PRESERVED */}
      <div className="!absolute !inset-0 !rounded-[2rem] !z-[3] !pointer-events-none !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{
             background: "radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.3) 100%)",
             mixBlendMode: "multiply",
             transform: "translateZ(2px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>

      {/* 7. Original Glow - PRESERVED */}
      <div className="!absolute !inset-[-2px] !rounded-[2.1rem] !opacity-30 !animate-pulse !z-[1] !pointer-events-none !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{
             background: "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.2), transparent 70%)",
             filter: "blur(8px)",
             transform: "translateZ(-15px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}></div>

      {/* Content Layer with smooth 3D depth */}
      <div className="!relative !z-10 !flex !flex-col !items-center !text-center !px-6 !translate-y-[-5%] !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
           style={{
             transform: "translateZ(25px)",
             transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
           }}>
        <div className={`!mb-4 !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)] ${isWinner ? "!scale-125 !drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]" : ""}`}
             style={{
               transform: "translateZ(15px)",
               transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
             }}>
          {icon}
        </div>
        
        <h4 className={`!text-base md:!text-lg !font-black !uppercase !tracking-[0.2em] font-orbitron ${textColor} !mb-2 !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]`}
            style={{
              transform: "translateZ(10px)",
              transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
          {rank}
        </h4>
        
        <div className="!text-2xl md:!text-3xl !font-black !text-white !mt-1 font-orbitron !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
             style={{
               transform: "translateZ(20px)",
               transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
             }}>
          {amount}
        </div>

        {isWinner && (
          <div className="!absolute !bottom-[-35px] !px-3 !py-0.5 !bg-red-600/20 !border !border-red-500/40 !rounded-full !text-[8px] !text-red-400 !uppercase !tracking-[0.4em] !animate-pulse !transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
               style={{
                 transform: "translateZ(15px)",
                 transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
               }}>
            Champion
          </div>
        )}
      </div>
    </div>
  </div>
);

const Prizes = () => {
  const podiumPrizes = [
    {
      rank: "1st Runner Up",
      amount: "₹75,000",
      icon: <Medal className="!w-11 !h-11 !text-gray-400 !stroke-[1.5]" />,
      textColor: "!text-gray-300",
      scaleClass: "!order-2 md:!order-1 !scale-90 md:!scale-95",
    },
    {
      rank: "Winner",
      amount: "₹1,00,000",
      icon: <Trophy className="!w-15 !h-15 !text-yellow-500" />,
      isWinner: true,
      textColor: "!text-red-500",
      scaleClass: "!order-1 md:!order-2 !z-20 !scale-105 md:!scale-115",
    },
    {
      rank: "2nd Runner Up",
      amount: "₹50,000",
      icon: <Medal className="!w-11 !h-11 !text-orange-400 !stroke-[1.5]" />,
      textColor: "!text-orange-300",
      scaleClass: "!order-3 md:!order-3 !scale-90 md:!scale-95",
    },
  ];

  return (
    <section id="prizes" className="!min-h-screen !w-full !relative !flex !items-center !justify-center !overflow-hidden !py-20">
      {/* Smooth hover animation - INCREASED ZOOM */}
      <style jsx>{`
        .hover\:rotate-y-12:hover {
          transform: rotateX(10deg) rotateY(18deg) translateY(-25px) scale(1.15) !important;
          transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>

      {/* Deep Background Atmosphere - PRESERVED */}
      <div className="!absolute !inset-0 !pointer-events-none">
        <div className="!absolute !top-0 !left-0 !w-full !h-full !bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] !from-red-950/20 !via-black !to-black"></div>
      </div>

      <div className="!max-w-7xl !mx-auto !px-4 !relative !z-10 !w-full !text-center">
        {/* Header Section */}
        <div className="!mb-10">
          <h2 className="!text-4xl md:!text-6xl !font-black !text-white !tracking-widest !mb-3"
              style={{ textShadow: "0 0 25px rgba(220, 38, 38, 0.6)" }}>
            PRIZES
          </h2>
          <div className="!h-1 !w-28 !bg-red-600 !mx-auto !shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
          <p className="!mt-6 !text-gray-500 !text-xs !tracking-[0.5em] !uppercase font-orbitron">
            Enter the portal of glory
          </p>
        </div>

        {/* Total Prize Pool Display */}
        <div className="!mb-14">
          <div className="!text-4xl md:!text-7xl !font-black !text-transparent !bg-clip-text !bg-gradient-to-b !from-white !to-red-600 font-orbitron"
               style={{ filter: "drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))" }}>
            ₹5,00,000+
          </div>
          <p className="!mt-2 !text-red-500/80 !font-bold !tracking-widest !text-xs">TOTAL PRIZE POOL</p>
        </div>

        {/* Podium with smooth 3D cards */}
        <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8 md:!gap-4 !max-w-5xl !mx-auto !mb-20 !items-end"
             style={{
               transformStyle: "preserve-3d",
               perspective: "2000px",
             }}>
          {podiumPrizes.map((prize, idx) => (
            <div key={idx}
                 className="!transition-all !duration-1000 !ease-[cubic-bezier(0.4,0,0.2,1)]"
                 style={{
                   transform: `translateZ(${idx === 1 ? '30px' : '0px'})`,
                   transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
                 }}>
              <PrizeCard {...prize} />
            </div>
          ))}
        </div>

        {/* Finalists & Tracks - PRESERVED */}
        <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-7 !max-w-4xl !mx-auto">
          <div className="!relative !group">
            <div className="!relative !h-full !rounded-[2rem] !border !border-white/5 !bg-zinc-950/60 !backdrop-blur-xl !p-7 !overflow-hidden !transition-all !duration-700 !ease-out hover:!scale-[1.02]">
              <GlowingEffect spread={50} glow={true} proximity={64} className="!opacity-30" />
              <div className="!relative !z-10">
                <h3 className="!text-lg !font-bold !text-white !flex !items-center !gap-2 !mb-5 font-orbitron">
                  <Award className="!w-5 !h-5 !text-red-600" /> TOP FINALISTS
                </h3>
                <div className="!space-y-5">
                  <div className="!flex !justify-between !items-center !border-b !border-white/5 !pb-3">
                    <span className="!text-gray-500 !text-xs uppercase">Rank 4 - 5</span>
                    <span className="!text-red-400 !font-bold !text-sm">Special Recognition</span>
                  </div>
                  <div className="!flex !justify-between !items-center !border-b !border-white/5 !pb-3">
                    <span className="!text-gray-500 !text-xs uppercase">Rank 6 - 10</span>
                    <span className="!text-white !font-black !text-base font-orbitron">₹5,000 <span className="!text-[9px] !text-gray-600">EACH</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="!relative !group">
            <div className="!relative !h-full !rounded-[2rem] !border !border-white/5 !bg-zinc-950/60 !backdrop-blur-xl !p-7 !overflow-hidden !transition-all !duration-700 !ease-out hover:!scale-[1.02]">
              <GlowingEffect spread={50} glow={true} proximity={64} className="!opacity-30" />
              <div className="!relative !z-10">
                <h3 className="!text-lg !font-bold !text-white !flex !items-center !gap-2 !mb-5 font-orbitron">
                  <Rocket className="!w-5 !h-5 !text-red-600" /> TRACK PRIZES
                </h3>
                <div className="!space-y-4">
                  <div className="!flex !flex-wrap !gap-2 !mb-3">
                    {['AI', 'Web3', 'Social', 'FinTech'].map((track) => (
                      <span key={track} className="!px-2 !py-0.5 !bg-red-900/20 !border !border-red-500/30 !rounded-md !text-[9px] !text-gray-300 !font-bold">
                        {track}
                      </span>
                    ))}
                  </div>
                  <p className="!text-xs !text-gray-500 !leading-relaxed !text-left">
                    Specialized rewards for teams pushing boundaries in specific industry tracks.
                  </p>
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