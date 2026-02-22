'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleItem {
  time: string;
  ampm: string;
  title: string;
  description: string;
  subtitle?: string;
}

const scheduleData: ScheduleItem[] = [
  // DAY 01
  {
    time: '09:30',
    ampm: 'AM',
    title: 'REGISTRATION OPEN',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'Get your badges and welcome kits. The journey begins here. Connect with fellow innovators and prepare for the ultimate challenge.',
  },
  {
    time: '10:00',
    ampm: 'AM',
    title: 'WELCOME CEREMONY',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'Quick hello, introduction, wifi details, health & safety briefing, and a complete run-through of the event schedule.',
  },
  {
    time: '10:10',
    ampm: 'AM',
    title: 'CHALLENGE BRIEFING',
    subtitle: 'DAY 01 : THE CREATION',
    description: '"The Reason Why We are All Here" – plus an overview of the challenge(s) by someone impressive in the field.',
  },
  {
    time: '10:20',
    ampm: 'AM',
    title: 'HACKING BEGINS!',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'The countdown stops and the coding starts. Teams dive into their projects as we refrain from further interruptions.',
  },
  {
    time: '01:00',
    ampm: 'PM',
    title: 'LUNCH BREAK',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'Fuel up and network. High-energy food to keep the brain cells firing for the long coding session ahead.',
  },
  {
    time: '03:00',
    ampm: 'PM',
    title: 'FEEDBACK SESSIONS',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'Audience and mentor feedback sessions – a dedicated service to test your prototypes with the target audience.',
  },
  {
    time: '06:00',
    ampm: 'PM',
    title: 'PROGRESS REPORT',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'Quick "around the room" standup; each team shares a summary of their progress and any roadblocks they face.',
  },
  {
    time: '09:00',
    ampm: 'PM',
    title: 'DINNER TIME',
    subtitle: 'DAY 01 : THE CREATION',
    description: 'Late night fuel. The innovation doesn\'t stop when the sun goes down. Keep building, keep pushing.',
  },
  // DAY 02
  {
    time: '08:00',
    ampm: 'AM',
    title: 'DAY 2 BREAKFAST',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'Rise and shine. Final day of the hackathon starts now. Grab some breakfast and head back to your battle stations.',
  },
  {
    time: '10:00',
    ampm: 'AM',
    title: 'DEMO SLOT BOOKING',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'Participants register their final "hacks" and sign up for their official pitching slots with the judges.',
  },
  {
    time: '11:00',
    ampm: 'AM',
    title: 'PITCH WORKSHOP',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'Optional session to polish your presentation and learn essential pitching techniques to influence the panel.',
  },
  {
    time: '01:00',
    ampm: 'PM',
    title: 'FINAL LUNCH',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'One last meal before the high-stakes presentations begin. Steeling nerves for the pitch sessions.',
  },
  {
    time: '01:45',
    ampm: 'PM',
    title: 'HACKING ENDS',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'Laptops down. Get everyone off their tables and into the seating area for the live demonstrations.',
  },
  {
    time: '02:00',
    ampm: 'PM',
    title: 'PITCH SESSIONS',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'All teams will have 2-3 mins (plus Q&A) to present their innovative hacks to the judging panel and other teams.',
  },
  {
    time: '04:00',
    ampm: 'PM',
    title: 'JUDGES DELIBERATION',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'The judges retire to calculate scores and decide the winners. Drinks and refreshments for all participants.',
  },
  {
    time: '04:30',
    ampm: 'PM',
    title: 'PRIZEGIVING',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'The moment of truth. Celebrating the winners, handing out rewards, and a quick "Thank You" speech to all.',
  },
  {
    time: '05:00',
    ampm: 'PM',
    title: 'GRAND CLOSING',
    subtitle: 'DAY 02 : THE JUDGEMENT',
    description: 'The curtain falls on Bharat Tech Xperience 3.0. Socializing, photos, and a final celebration of the community.',
  },
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const currentScroll = windowHeight - rect.top;
      const scrollRange = container.offsetHeight + windowHeight;
      
      const progress = Math.max(0, Math.min(1, currentScroll / scrollRange));

      const sectionIndex = Math.min(
        scheduleData.length - 1,
        Math.floor(progress * scheduleData.length)
      );
      setCurrentIndex(sectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentItem = scheduleData[currentIndex];
  const currentDay = currentItem.subtitle?.split(':')[0].trim() || 'DAY 01';

  return (
    <div>
      <div ref={containerRef} className="min-h-[1200vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Subtle Background Day Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentDay}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.08, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1 }}
                className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-black text-white"
              >
                {currentDay.replace('DAY ', '')}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Section Header */}
          <div className="absolute top-8 md:top-12 z-20 text-center w-full px-4">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-white mb-4 font-orbitron"
              style={{ textShadow: "0 0 30px rgba(179,0,0,0.6)" }}
            >
              EVENT <span className="text-[#E7000B]">SCHEDULE</span>
            </h1>
            <div className="h-1 w-20 md:w-24 bg-[#B30000] mx-auto shadow-[0_0_15px_#B30000]"></div>
          </div>

          {/* Scrollytelling Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Time Display */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                  <div className="text-center lg:text-right">
                    <motion.span 
                      key={`day-${currentIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[#E7000B] text-xs md:text-sm tracking-[0.5em] font-bold font-orbitron block mb-2 md:mb-4"
                    >
                       {currentDay}
                    </motion.span>
                    <h2 className="text-6xl md:text-8xl lg:text-[9.5rem] font-black text-[#E7000B] leading-none tracking-tighter"
                        style={{ textShadow: "0 0 40px rgba(179,0,0,0.3)" }}>
                      {currentItem.time}
                    </h2>
                    <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-500 tracking-widest mt-1 md:mt-2 block">
                      {currentItem.ampm}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider Line */}
                <div className="hidden lg:flex lg:col-span-1 justify-center h-48">
                  <div className="w-px h-full bg-gradient-to-b from-transparent via-[#E7000B]/50 to-transparent" />
                </div>

                {/* Event Details */}
                <div className="lg:col-span-6 space-y-4 md:space-y-6 text-center lg:text-left">
                  <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight uppercase">
                    {currentItem.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {currentItem.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Elegant Progress Indicator (Bottom) */}
          <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xs md:max-w-md px-8 z-20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[8px] md:text-[10px] text-gray-600 tracking-[0.3em] font-bold font-orbitron">START</span>
              <span className="text-[8px] md:text-[10px] text-[#E7000B] tracking-[0.3em] font-bold font-orbitron">
                {currentIndex + 1} / {scheduleData.length}
              </span>
              <span className="text-[8px] md:text-[10px] text-gray-600 tracking-[0.3em] font-bold font-orbitron">END</span>
            </div>
            <div className="h-[2px] w-full bg-gray-950 overflow-hidden relative rounded-full">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#B30000] shadow-[0_0_10px_#B30000]"
                animate={{ width: `${((currentIndex + 1) / scheduleData.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
            </div>
          </div>

          {/* Minimal Corner Info (Responsive Hidden on small) */}
          <div className="hidden md:block absolute bottom-8 left-8 text-[9px] text-gray-800 tracking-widest font-mono uppercase opacity-30 select-none">
            BTX 3.0 // SYSTEM CORE ACCESS
          </div>
          <div className="hidden md:block absolute bottom-8 right-8 text-[9px] text-gray-800 tracking-widest font-mono uppercase opacity-30 select-none">
            {currentDay} // SEQUENCE STAGE {currentIndex + 1}
          </div>

        </div>
      </div>
    </div>
  );
}