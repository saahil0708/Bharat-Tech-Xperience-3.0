"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trophy, Timer, ArrowRight } from "lucide-react";
import Link from "next/link";

const LoadingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date to April 3rd, 2026
  const targetDate = new Date("2026-04-03T00:00:00");

  useEffect(() => {
    // Show popup after a short delay on load
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const closePopup = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20, x: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="!fixed !bottom-6 !right-6 !z-[9999] !w-[320px] !md:w-[400px] !overflow-hidden !rounded-2xl !border !border-red-500/30 !bg-black/80 !backdrop-blur-xl !shadow-[0_0_40px_rgba(180,0,0,0.4)]"
        >
          {/* Background Image with Overlay */}
          <div className="!absolute !inset-0 !z-0">
            <img
              src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZHEeI46NoMfvUTQAwGnLKdhFm283Zep6jW7Ja"
              alt="Popup Background"
              className="!h-full !w-full !object-cover !opacity-40"
            />
            <div className="!absolute !inset-0 !bg-gradient-to-t !from-black !via-black/40 !to-transparent" />
          </div>

          {/* Close Button */}
          <button
            onClick={closePopup}
            className="!absolute !top-3 !right-3 !z-20 !rounded-full !bg-white/10 !p-1.5 !text-white/70 !transition-colors hover:!bg-red-600 hover:!text-white"
          >
            <X size={18} />
          </button>

          <div className="!relative !z-10 !p-6">
            {/* Header / Prize Pool */}
            <div className="!mb-4 !flex !items-center !gap-3">
              <div className="!flex !h-10 !w-10 !items-center !justify-center !rounded-lg !bg-red-600/20 !text-red-500 !shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                <Trophy size={20} />
              </div>
              <div>
                <p className="!text-[14px] !font-bold !uppercase !tracking-widest !text-red-500 azonix-font" style={{ fontFamily: "Azonix, sans-serif" }}>Bharat Tech Xperience 3.0</p>
                <h3 className="!text-xl !font-black !text-white md:!text-2xl azonix-font" style={{ fontFamily: "Azonix, sans-serif" }}>₹5,00,000+</h3>
              </div>
            </div>

            {/* Countdown */}
            <div className="!mb-6">
              <div className="!mb-2 !flex !items-center !gap-2 !text-white/50">
                <Timer size={14} className="!animate-pulse" />
                <span className="!text-[10px] !font-medium !uppercase !tracking-wider">The Hunt Starts In</span>
              </div>
              <div className="!grid !grid-cols-4 !gap-2">
                {[
                  { label: "Day", value: timeLeft.days },
                  { label: "Hrs", value: timeLeft.hours },
                  { label: "Min", value: timeLeft.minutes },
                  { label: "Sec", value: timeLeft.seconds },
                ].map((item, i) => (
                  <div key={i} className="!flex !flex-col !items-center !rounded-lg !bg-red-950/30 !p-2 !border !border-red-500/10">
                    <span className="!text-lg !font-bold !text-white !tabular-nums !leading-none azonix-font" style={{ fontFamily: "Azonix, sans-serif" }}>
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="!text-[8px] !uppercase !tracking-tighter !text-red-400 !mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              // whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://bharattech-xperience.theuniques.in", "_blank")}
              className="!group !flex !w-full !items-center !justify-between !rounded-md !cursor-pointer !bg-red-600 !px-5 !py-3 !font-bold !text-white !shadow-[0_0_20px_rgba(220,38,38,0.4)] !transition-all hover:!bg-red-500 hover:!shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            >
              <span className="azonix-font" style={{ fontFamily: "Azonix, sans-serif" }}>REGISTER NOW</span>
              <ArrowRight size={18} className="!transition-transform group-hover:!translate-x-1" />
            </motion.button>
            
            <p className="!mt-3 !text-center !text-[10px] !text-white/40 !uppercase !tracking-widest">
              Limited Slots Available
            </p>
          </div>

          {/* Decorative Corner */}
          <div className="!absolute !-bottom-1 !-left-1 !h-8 !w-8 !rounded-tr-3xl !border-t !border-r !border-red-600/50" />
          
          <style dangerouslySetInnerHTML={{ __html: `
            @import url('https://fonts.cdnfonts.com/css/azonix');
            
            .azonix-font {
              font-family: 'Azonix', sans-serif !important;
            }
          ` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPopup;
