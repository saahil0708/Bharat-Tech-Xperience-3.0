// "use client";
// import React from "react";
// import Image from "next/image";
// import ParticleBackground from "./ParticleBackground";

// const PastGlories = () => {
//   const achievements = [
//     { 
//       rank: "WINNER", 
//       title: "HACKATHON 2023", 
//       loc: "XYZ UNIVERSITY", 
//       achv: "1ST PLACE", 
//       img: "/Images/strange.jpg" 
//     },
//     { 
//       rank: "FINALIST", 
//       title: "MIND FLARE UI", 
//       loc: "NATIONAL DESIGN", 
//       achv: "TOP 3", 
//       img: "/Images/MindFlare.png" 
//     },
//     { 
//       rank: "RUNNER UP", 
//       title: "UPSIDE DOWN DEV", 
//       loc: "GLOBAL CODING", 
//       achv: "SILVER TIER", 
//       img: "/Images/stranger things.jpg.jpeg" 
//     },
//   ];

//   return (
//     <>
//       <style jsx global>{`
//         /* 1. Rising Spark Animation */
//         @keyframes fire-rise {
//           0% { transform: translateY(0) scale(1); opacity: 0; }
//           20% { opacity: 0.6; filter: blur(1px); }
//           50% { 
//             opacity: 1; 
//             transform: translateY(-50vh) scale(2); 
//             filter: brightness(3) blur(0px);
//             box-shadow: 0 0 15px #fff, 0 0 25px #ff0000;
//           }
//           100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
//         }
//         .animate-fire-rise { animation: fire-rise 8s linear infinite; }

//         /* 2. High Voltage Line Flicker */
//         @keyframes energyLine {
//           0%, 100% { opacity: 1; filter: brightness(1.2) drop-shadow(0 0- 10px #ff0000); }
//           50% { opacity: 0.7; filter: brightness(0.8) drop-shadow(0 0 5px #ff0000); }
//         }

//         /* 3. Charred Edge Clipping */
//         .charred-edge {
//           clip-path: polygon(2% 1%, 98% 3%, 100% 7%, 99% 93%, 96% 100%, 5% 98%, 0% 92%, 1% 8%);
//         }

//         /* 4. Heat Glow Animation */
//         @keyframes ember-flicker {
//           0%, 100% { box-shadow: inset 0 0 20px #5c4033, 0 0 5px transparent; }
//           50% { box-shadow: inset 0 0 40px #7a2b00, 0 0 20px #ff4500; }
//         }

//         /* 5. Flying Embers from the Card */
//         @keyframes fly-embers {
//           0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
//           100% { transform: translateY(-60px) translateX(20px) scale(0); opacity: 0; }
//         }

//         .card-burn:hover {
//           animation: ember-flicker 0.4s infinite alternate;
//         }

//         .card-burn:hover::after {
//           content: "";
//           position: absolute;
//           top: 10%; right: 10%;
//           width: 4px; height: 4px;
//           background: #ff4500;
//           border-radius: 50%;
//           filter: blur(1px);
//           box-shadow: -15px 10px 0 #ff8c00, -5px 25px 0 #ff4500, -25px 15px 0 #ff0000;
//           animation: fly-embers 0.8s infinite linear;
//         }
//       `}</style>

//       <section
//         id="past-glories"
//         className="!min-h-screen !w-full !relative !flex !flex-col !items-center !justify-center !bg-black !overflow-hidden !py-20 !border-t !border-red-900/20"
//       >
//         {/* Background Atmosphere */}
//         <div className="!absolute !inset-0 !z-0">
//           <ParticleBackground />
//           <div className="!absolute !inset-0 !bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] !from-red-900/30 !via-black !to-black"></div>
//         </div>

//         <div className="!max-w-7xl !mx-auto !px-4 !relative !z-20 !w-full !text-center">
          
//           {/* Header */}
//           <div className="!mb-16">
//             <h2 
//               className="!text-5xl md:!text-7xl !font-black !text-white !tracking-widest !mb-4" 
//               style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}
//             >
//               PAST GLORIES
//             </h2>
//             <div className="!h-1 !w-32 !bg-red-600 !mx-auto !shadow-[0_0_15px_rgba(220,38,38,0.9)]"></div>
//             <p className="!mt-6 !text-gray-400 !text-xs !tracking-[0.4em] !uppercase font-orbitron">
//               The Chronicles of Victory
//             </p>
//           </div>

//           {/* ⚡ THE HIGH-VOLTAGE LINE */}
//           <div className="!relative !w-full !my-24 !flex !items-center !justify-center">
            
//             {/* The Main Line Body */}
//             <div 
//               className="!absolute !w-[95%] !h-[6px] !animate-[energyLine_2s_infinite_linear]" 
//               style={{ 
//                 maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
//                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
//               }}
//             >
//               <div 
//                 className="!absolute !inset-0 !bg-red-600" 
//                 style={{ clipPath: "polygon(0% 50%, 15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%)", boxShadow: "0 0 30px #ff0000" }}
//               ></div>
//               <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-[90%] !h-[1.5px] !bg-white !blur-[0.5px]"></div>
//             </div>

//             <div className="!relative !w-full !flex !justify-around !max-w-6xl">
//               {achievements.map((item, idx) => (
//                 <div key={idx} className="!relative !flex !flex-col !items-center">
                  
//                   {/* Glowing Node Orb */}
//                   <div className="!relative !w-6 !h-6 !bg-white !rounded-full !z-30 !shadow-[0_0_20px_#fff,0_0_40px_#ff0000]"></div>
                  
//                   {/* Top Rank Label */}
//                   <span className="!absolute !-top-10 !text-white !font-bold !tracking-widest !text-[10px] !uppercase">{item.rank}</span>
                  
//                   {/* Energy Drop Line */}
//                   <div className="!w-[2px] !h-16 !bg-gradient-to-b !from-red-500 !to-transparent"></div>

//                   {/* 🎞️ CHARRED POLAROID CARD */}
//                   <div className={`!mt-2 !group !relative !transition-transform !duration-500 hover:!scale-105 ${idx % 2 === 0 ? "!-rotate-1" : "!rotate-1"}`}>
//                     <div 
//                       className="charred-edge card-burn !bg-[#e3dcd0] !p-3 !pb-12 !shadow-2xl !relative"
//                       style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/p6.png")` }}
//                     >
//                       {/* Internal Scorched Effect */}
//                       <div className="!absolute !inset-0 !shadow-[inset_0_0_20px_#5c4033] !opacity-60 !pointer-events-none group-hover:!opacity-100 !transition-opacity"></div>

//                       <div className="!relative !w-52 !h-40 !overflow-hidden !bg-zinc-900 !border !border-black/20">
//                         <Image 
//                           src={item.img} 
//                           alt={item.title} 
//                           fill 
//                           className="!object-cover !grayscale group-hover:!grayscale-0 !transition-all !duration-700 !brightness-75 group-hover:!brightness-110" 
//                         />
                        
//                         {/* Red CLASSIFIED Stamp */}
//                         <div className="!absolute !bottom-2 !right-2 !border-2 !border-red-800 !text-red-800 !font-black !px-2 !rotate-[-15deg] !text-[10px] !opacity-0 group-hover:!opacity-80 !transition-opacity">
//                           CLASSIFIED
//                         </div>
//                       </div>

//                       {/* Handwritten Metadata */}
//                       <div className="!mt-3 !text-left !text-zinc-900 !font-serif">
//                         <h4 className="!font-black !text-[11px] !uppercase !border-b !border-black/20 !mb-1">{item.title}</h4>
//                         <div className="!text-[9px] !leading-tight !font-bold !opacity-80">
//                            <p>LOC: {item.loc}</p>
//                            <p>ACHV: {item.achv}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Secondary Label */}
//                   <span className="!mt-6 !text-red-900/60 !font-bold !tracking-widest !text-[10px] !uppercase">{item.rank}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 📊 FOOTER STATS SECTION */}
//           <div className="!mt-20 !flex !justify-center !gap-16 !border-t !border-red-900/20 !pt-10">
//             {[
//               { val: "08", label: "TOTAL WINS" },
//               { val: "12", label: "FINALISTS" },
//               { val: "20+", label: "PROJECTS" }
//             ].map((stat, i) => (
//               <div key={i} className="!text-center">
//                 <div className="!text-4xl !font-black !text-white !tracking-tighter !drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:!text-red-500 !transition-colors !duration-300">
//                   {stat.val}
//                 </div>
//                 <div className="!text-[10px] !text-gray-500 !tracking-[0.3em] !uppercase !mt-1">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default PastGlories;







// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import ParticleBackground from "./ParticleBackground";

// const PastGlories = () => {
//   const [selectedImg, setSelectedImg] = useState<string | null>(null);

//   // Reordered to put WINNER in the middle
//   const achievements = [
//     { rank: "FINALIST", title: "MIND FLARE UI", loc: "THE VOID", achv: "TOP 3", img: "/Images/MindFlare.png", color: "red" },
//     { rank: "WINNER", title: "HACKATHON 2023", loc: "HAWKINS LAB", achv: "1ST PLACE", img: "/Images/strange.jpg", color: "red", active: true },
//     { rank: "RUNNER UP", title: "UPSIDE DOWN DEV", loc: "STARCOURT", achv: "SILVER", img: "/Images/stranger things.jpg.jpeg", color: "blue" },
//   ];

//   return (
//     <>
//       <style jsx global>{`
//         /* 1. Ultra-Low Opacity Ring */
//         @keyframes ring-glow-faint {
//           0%, 100% { opacity: 0.03; transform: scale(1); }
//           50% { opacity: 0.08; transform: scale(1.05); }
//         }

//         /* 2. Background Atmosphere Lighting */
//         @keyframes pulse-bg-red {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.25; }
//         }

//         .central-ring-faint {
//           border: 1px solid rgba(255, 0, 0, 0.3);
//           border-radius: 50%;
//           animation: ring-glow-faint 8s infinite ease-in-out;
//           box-shadow: 0 0 100px rgba(255, 0, 0, 0.1);
//         }

//         .energy-beam {
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(255,0,0,0.4) 20%, rgba(255,255,255,0.2) 50%, rgba(255,0,0,0.4) 80%, transparent);
//           animation: beam-flicker 4s infinite;
//         }

//         @keyframes beam-flicker {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.1; }
//         }

//         .premium-card-xl {
//           background: #050505;
//           border: 1px solid #1a0000;
//           transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//           width: 380px;
//         }

//         .premium-card-xl:hover {
//           border-color: #ff0000;
//           transform: translateY(-15px);
//           box-shadow: 0 0 50px rgba(255, 0, 0, 0.2);
//         }

//         .active-card {
//           border-color: #ff0000;
//           box-shadow: 0 0 80px rgba(255, 0, 0, 0.3);
//         }

//         .image-container:hover img {
//           transform: scale(1.05);
//           filter: grayscale(0%) contrast(1.1);
//         }
//       `}</style>

//       <section className="!min-h-screen !w-full !relative !flex !flex-col !items-center !justify-center !bg-black !overflow-hidden !py-24">
        
//         {/* --- CINEMATIC BACKGROUND --- */}
//         <div className="!absolute !inset-0 !z-0">
//           <ParticleBackground />
          
//           {/* Volumetric Red Lighting (Left & Right) */}
//           <div className="!absolute !top-0 !left-[-10%] !w-[50%] !h-full !bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.08)_0%,_transparent_70%)] !animate-pulse-bg-red"></div>
//           <div className="!absolute !bottom-0 !right-[-10%] !w-[50%] !h-full !bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.08)_0%,_transparent_70%)] !animate-pulse-bg-red" style={{animationDelay: '2s'}}></div>
          
//           {/* Depth vignette */}
//           <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_center,_transparent_20%,_black_100%)]"></div>
//         </div>

//         {/* --- HEADER --- */}
//         <div className="!relative !z-20 !text-center !mb-12">
//           <h2 className="!text-7xl md:!text-9xl !font-black !text-white !tracking-tighter !uppercase"
//               style={{ filter: "drop-shadow(0 0 30px rgba(255, 0, 0, 0.5))" }}>
//             PAST GLORIES
//           </h2>
//           <div className="!h-[1px] !w-48 !bg-gradient-to-r !from-transparent !via-red-600 !to-transparent !mx-auto !mt-4"></div>
//         </div>

//         {/* --- TIMELINE AREA --- */}
//         <div className="!relative !w-full !max-w-[1600px] !flex !items-center !justify-center !py-20">
          
//           {/* ⚡ THE RING (Now barely visible/haunting) */}
//           <div className="!absolute !w-[700px] !h-[700px] central-ring-faint !z-0"></div>

//           {/* ⚡ THE BEAM */}
//           <div className="!absolute !w-full !top-1/2 !-translate-y-1/2 !z-0">
//              <div className="energy-beam"></div>
//           </div>

//           <div className="!relative !z-10 !flex !justify-between !w-full !max-w-[1450px] !items-center">
//             {achievements.map((item, idx) => (
//               <div key={idx} className="!flex !flex-col !items-center !group">
                
//                 {/* 🔮 THE NODE */}
//                 <div className="!relative !mb-16">
//                    <div className={`!w-12 !h-12 !rounded-full !backdrop-blur-2xl !border !border-white/5 !flex !items-center !justify-center`}>
//                       <div className={`!w-2 !h-2 !rounded-full ${item.rank === 'WINNER' ? '!bg-red-600 !shadow-[0_0_15px_#ff0000]' : '!bg-white/20'}`}></div>
//                    </div>
//                    <div className="!absolute !top-12 !left-1/2 !-translate-x-1/2 !w-[1px] !h-16 !bg-gradient-to-b !from-red-900/50 !to-transparent"></div>
//                 </div>

//                 {/* 🎞️ THE CARD */}
//                 <div 
//                   onClick={() => setSelectedImg(item.img)}
//                   className={`premium-card-xl !cursor-zoom-in !p-[1px] !rounded-sm ${item.rank === 'WINNER' ? 'active-card !scale-110 !z-30' : '!scale-90 !opacity-40 hover:!opacity-100 hover:!scale-95'}`}
//                 >
//                   <div className="!bg-[#080808] !p-4">
//                     <div className="!relative !w-full !h-72 !bg-zinc-950 !overflow-hidden image-container">
//                       <Image 
//                         src={item.img} 
//                         alt={item.title} 
//                         fill 
//                         className="!object-cover !brightness-75 !grayscale group-hover:!grayscale-0 !transition-all !duration-1000"
//                       />
//                       <div className="!absolute !inset-0 !bg-gradient-to-t !from-black !via-transparent !to-transparent !opacity-60"></div>
//                     </div>
                    
//                     <div className="!mt-6 !text-left !border-l-[1px] !border-red-900 !pl-5">
//                       <h4 className="!text-white !font-bold !text-xl !tracking-tight !uppercase">{item.title}</h4>
//                       <p className="!text-zinc-500 !text-[10px] !font-mono !mt-1">
//                         {item.loc} <span className="!mx-2">/</span> {item.achv}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <span className={`!mt-12 !font-bold !text-[9px] !tracking-[0.5em] !uppercase ${item.rank === 'WINNER' ? '!text-red-600' : '!text-zinc-800'}`}>
//                   {item.rank}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- STATS --- */}
//         <div className="!mt-20 !flex !justify-center !gap-32">
//            {[
//              { val: "08", label: "VICTORIES" },
//              { val: "12", label: "FINALISTS" },
//              { val: "20+", label: "DEPLOYMENTS" }
//            ].map((stat, i) => (
//              <div key={i} className="!text-center">
//                 <div className="!text-6xl !font-black !text-white/90 !tracking-tighter hover:!text-red-600 !transition-colors">
//                    {stat.val}
//                 </div>
//                 <div className="!text-[9px] !text-zinc-700 !font-bold !tracking-[0.4em] !uppercase !mt-2">
//                    {stat.label}
//                 </div>
//              </div>
//            ))}
//         </div>

//         {/* --- LIGHTBOX --- */}
//         {selectedImg && (
//           <div 
//             className="!fixed !inset-0 !z-[100] !bg-black/98 !backdrop-blur-2xl !flex !items-center !justify-center !p-10 !cursor-zoom-out"
//             onClick={() => setSelectedImg(null)}
//           >
//             <div className="!relative !w-full !max-w-5xl !h-full !max-h-[85vh]">
//               <Image src={selectedImg} alt="Preview" fill className="!object-contain" />
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default PastGlories;


"use client";
import React, { useState } from "react";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

const PastGlories = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const achievements = [
    { rank: "FINALIST", title: "MIND FLARE UI", loc: "THE VOID", achv: "TOP 3", img: "/Images/MindFlare.png", active: false },
    { rank: "WINNER", title: "HACKATHON 2023", loc: "HAWKINS LAB", achv: "1ST PLACE", img: "/Images/strange.jpg", active: true },
    { rank: "RUNNER UP", title: "UPSIDE DOWN DEV", loc: "STARCOURT", achv: "SILVER", img: "/Images/stranger things.jpg.jpeg", active: false },
  ];

  return (
    <>
      {/* 1. Global Styles */}
      <style jsx global>{`
        @keyframes fire-rise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; filter: blur(1px); }
          50% { opacity: 1; transform: translateY(-50vh) scale(2); filter: brightness(3) blur(0px); box-shadow: 0 0 15px #fff, 0 0 25px #ff0000; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        .animate-fire-rise { animation: fire-rise 8s linear infinite; }

        @keyframes energyLine {
          0%, 100% { opacity: 1; filter: brightness(1.2); }
          50% { opacity: 0.7; filter: brightness(0.8); }
        }

        /* Card Specific Styles */
        .premium-card-xl {
          background: #080808;
          border: 1px solid #2d0000;
          box-shadow: 0 20px 50px rgba(0,0,0,1);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          width: 380px;
        }
        .premium-card-xl:hover {
          border-color: #ff0000;
          transform: translateY(-20px) scale(1.02);
          box-shadow: 0 0 40px rgba(255, 0, 0, 0.3);
          z-index: 50;
        }
        .active-card {
          border-color: #fd0101;
          box-shadow: 0 0 60px rgba(255, 0, 0, 0.5);
        }
        .image-container:hover img {
          transform: scale(1.08);
          filter: grayscale(0%) brightness(1.1);
        }
      `}</style>

      <section
        id="past-glories"
        className="!min-h-screen !w-full !relative !flex !items-center !justify-center !bg-transparent !overflow-hidden !py-24 !border-t !border-red-900/20"
      >
        <div className="!absolute !inset-0 !z-0">
          <ParticleBackground />
        </div>

        

        {/* Background Atmosphere */}
        <div className="!absolute !inset-0 !pointer-events-none !z-10">
          <div className="!absolute !inset-0 !bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] !from-red-900/20 !via-black !to-black"></div>
          <div className="!absolute !inset-0 !bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_1px,rgba(0,0,0,0.4)_1px)] !bg-[length:100%_4px] !opacity-20"></div>
          {/* Subtle Central Ring */}
          <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-[600px] !h-[600px] !border !border-red-600/10 !rounded-full !z-0"></div>
        </div>

        <div className="!max-w-7xl !mx-auto !px-4 !relative !z-20 !w-full !text-center">
          {/* Header */}
          <div className="!mb-16">
            <h2
              className="!text-5xl md:!text-7xl !font-black !text-white !tracking-widest !mb-4"
              style={{ textShadow: "0 0 15px rgba(220, 38, 38, 0.6)" }}
            >
              PAST GLORIES
            </h2>
            <div className="!h-1 !w-24 !bg-red-600 !mx-auto !shadow-[0_0_15px_rgba(220, 38, 38, 0.9)]"></div>
            <p className="!mt-6 !text-gray-400 !text-xs !tracking-[0.4em] !uppercase">
              The Chronicles of Victory
            </p>
          </div>

          {/* ⚡ THE HIGH-VOLTAGE TAPERED LINE */}
          <div className="!relative !w-full !my-24 !flex !items-center !justify-center">
            <div 
              className="!absolute !w-[95%] !h-[6px] animate-[energyLine_2s_infinite_linear]"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              <div 
                className="!absolute !inset-0 !bg-red-600"
                style={{ 
                  clipPath: "polygon(0% 50%, 15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%)",
                  boxShadow: "0 0 30px #ff0000"
                }}
              ></div>
            </div>

            {/* --- THE CARDS --- */}
            <div className="!relative !w-full !flex !justify-between !max-w-[1400px] !z-30">
              {achievements.map((item, idx) => (
                <div key={idx} className="!relative !flex !flex-col !items-center">
                  {/* Node Orb */}
                  <div className="!relative !w-6 !h-6 !bg-white !rounded-full !z-40 !mb-16" 
                       style={{ boxShadow: "0 0 15px 2px #fff, 0 0 30px 5px #ff0000" }}>
                    <div className="!absolute !top-full !left-1/2 !-translate-x-1/2 !w-[2px] !h-16 !bg-gradient-to-b !from-red-500 !to-transparent"></div>
                  </div>

                  {/* XL Card Box */}
                  <div 
                    onClick={() => setSelectedImg(item.img)}
                    className={`premium-card-xl !cursor-zoom-in !p-1 !rounded-sm ${item.active ? 'active-card !scale-110 !z-50' : '!scale-95 !opacity-60 hover:!opacity-100'}`}
                  >
                    <div className="!bg-black !p-4">
                      <div className="!relative !w-full !h-72 !bg-zinc-950 !overflow-hidden image-container">
                        <Image 
                          src={item.img} 
                          alt={item.title} 
                          fill 
                          className="!object-cover !brightness-90 !grayscale group-hover:!grayscale-0 !transition-all !duration-1000"
                        />
                      </div>
                      <div className="!mt-6 !text-left !border-l-4 !border-red-600 !pl-5">
                        <h4 className="!text-white !font-black !text-2xl !tracking-tighter !uppercase">{item.title}</h4>
                        <p className="!text-red-700 !text-[10px] !font-mono !font-bold !tracking-[0.2em] !mt-1">
                          {item.loc} <span className="!mx-2 !text-zinc-800">/</span> {item.achv}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="!mt-8 !text-zinc-600 !font-bold !text-[10px] !tracking-[0.5em] !uppercase">
                    {item.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- LIGHTBOX MODAL --- */}
        {selectedImg && (
          <div 
            className="!fixed !inset-0 !z-[100] !bg-black/95 !backdrop-blur-xl !flex !items-center !justify-center !p-10 !cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <div className="!relative !w-full !max-w-5xl !h-full !max-h-[80vh]">
              <Image src={selectedImg} alt="Preview" fill className="!object-contain" />
              <button className="!absolute !top-[-40px] !right-0 !text-white !text-xl !font-mono">CLOSE_X</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default PastGlories;
