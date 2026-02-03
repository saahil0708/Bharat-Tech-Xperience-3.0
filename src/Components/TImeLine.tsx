"use client";

import React from "react";

export default function TimelineCountdown() {
  return (
    <div id="timeline" className="!min-h-screen !relative !flex !items-center !justify-center !bg-transparent !overflow-hidden">
      {/* Background gradient */}
      <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] !from-red-900/20 !via-transparent !to-transparent" />

      {/* Main content */}
      <div className="!relative !z-10 !max-w-7xl !mx-auto !px-8 !w-full !text-center">
        {/* Section Heading */}
        <div className="!mb-24">
          <h1 className="!text-5xl lg:!text-6xl !font-black !text-white !tracking-widest">
            TIMELINE
          </h1>
          <div className="!w-40 !h-1 !bg-red-600 !mx-auto !mt-6 !shadow-[0_0_20px_red]" />
        </div>

        {/* TBA Display */}
        <div className="!relative">
          {/* Center Glow */}
          <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-96 !h-96 !bg-red-600/20 !rounded-full !blur-[100px] !animate-pulse"></div>

          <div className="!flex !flex-col !items-center !justify-center !gap-6">
            <div className="!text-[10rem] md:!text-[15rem] !leading-none !font-black !text-transparent !tracking-tighter !animate-pulse !select-none"
              style={{
                WebkitTextStroke: "2px rgba(220, 38, 38, 0.5)",
                filter: "drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))"
              }}>
              ?
            </div>

            <h2 className="!text-4xl md:!text-6xl !font-bold !text-white !uppercase !tracking-widest !mt-[-40px] md:!mt-[-80px] !z-10">
              TO BE REVEALED
            </h2>

            <p className="!text-gray-500 !text-sm !md:!text-base !font-mono !tracking-[0.5em] !mt-8 font-orbitron">
              SCHEDULE SEQUENCE PENDING DECLASSIFICATION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}