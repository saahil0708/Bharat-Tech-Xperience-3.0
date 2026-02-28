'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    instagram?: string;
  };
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Vikram Singh",
    role: "Head of Innovation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "Visionary leader focused on disruptive technologies and global AI architecture strategy.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Cybersecurity Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Passionate about building secure systems and mentoring the next generation of defenders.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Full Stack Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    bio: "Expert in building scalable web applications and high-performance distributed systems.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "UI/UX Design Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Crafting immersive digital experiences that combine aesthetics with seamless function.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 5,
    name: "David Park",
    role: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Optimizing global cloud architectures and implementing robust DevOps frameworks.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 6,
    name: "Anya Sharma",
    role: "Data Science Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Extracting actionable insights from complex datasets to drive business intelligence.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 7,
    name: "Marcus Thorne",
    role: "Blockchain Dev",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    bio: "Pioneering decentralized solutions and smart contract security in the Web3 space.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 8,
    name: "Leila Jafari",
    role: "Mobile Strategy",
    image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2ea6?q=80&w=1974&auto=format&fit=crop",
    bio: "Engineering high-performance native and cross-platform mobile experiences.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 9,
    name: "Hiroshi Tanaka",
    role: "AI Research",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    bio: "Advancing natural language processing and computer vision field research.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 10,
    name: "Sophia Bennett",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop",
    bio: "Defining product roadmaps and bridge the gap between users and engineering.",
    socials: { linkedin: "#", instagram: "#" }
  }
];

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  return (
    <div
      className="!relative !w-[280px] !aspect-[3/4.5] !rounded-[2.5rem] !overflow-hidden !cursor-pointer !border !border-white/10 !bg-[#111]"
      style={{ flexShrink: 0 }}
    >
      {/* Background Image */}
      <img
        src={mentor.image}
        alt={mentor.name}
        className="!absolute !inset-0 !w-full !h-full !object-cover !opacity-80 !transition-all !duration-700"
        style={{ transition: 'transform 0.7s ease, opacity 0.7s ease' }}
      />

      {/* Hover transitions via CSS group */}
      <style>{`
        .mentor-card:hover img {
          transform: scale(1.08);
          opacity: 1;
        }
        .mentor-card:hover .glass-overlay {
          transform: translateY(0%);
        }
        .mentor-card:hover .identity-layer {
          opacity: 0;
          transform: translateY(-20px);
        }
        .mentor-card .glass-overlay {
          transform: translateY(100%);
          transition: transform 0.65s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .mentor-card .identity-layer {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
      `}</style>

      {/* Base gradient overlay */}
      <div className="!absolute !inset-0 !bg-gradient-to-t !from-black !via-black/40 !to-transparent !opacity-90 !z-10" />

      {/* Identity layer (name + role shown by default) */}
      <div
        className="identity-layer !absolute !bottom-10 !left-0 !right-0 !px-6 !text-center !z-20"
      >
        <div className="!flex !items-center !justify-center !gap-1.5 !mb-2">
          <h3 className="!text-xl !font-black !text-white !tracking-tight">
            {mentor.name}
          </h3>
          <BadgeCheck className="!text-[#FF2E2E]" size={18} />
        </div>
        <p className="!text-[#FF2E2E] !text-[10px] !font-bold !tracking-[0.3em] !uppercase">
          {mentor.role}
        </p>
      </div>

      {/* Glass slide-up overlay */}
      <div
        className="glass-overlay !absolute !inset-0 !z-30 !flex !flex-col !justify-end !items-center !pb-10 !px-8 !text-center"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 50%, rgba(10,0,0,0.6) 100%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        {/* Inner content */}
        <div className="!w-full !flex !flex-col !items-center !gap-5">
          {/* Name */}
          <div>
            <h3 className="!text-xl !font-black !text-white !tracking-tight !mb-2">
              {mentor.name}
            </h3>
            <p className="!text-[#FF2E2E] !text-[10px] !font-bold !tracking-[0.3em] !uppercase !mb-3">
              {mentor.role}
            </p>
            <div className="!h-[2px] !w-10 !bg-[#B30000] !mx-auto !rounded-full" style={{ boxShadow: '0 0 10px #B30000' }} />
          </div>

          {/* Bio */}
          <p className="!text-gray-300 !text-[13px] !font-medium !leading-relaxed !line-clamp-4">
            {mentor.bio}
          </p>

          {/* Social Icons */}
          <div className="!flex !gap-6 !mt-1">
            {mentor.socials.linkedin && (
              <a
                href={mentor.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="!flex !flex-col !items-center !gap-2 !text-white !transition-all !duration-300"
                style={{ transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FF2E2E'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >
                <div className="!p-3 !rounded-xl !border !border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}>
                  <Linkedin size={22} />
                </div>
                <span className="!text-[9px] !font-black !tracking-widest !uppercase !text-gray-400">LinkedIn</span>
              </a>
            )}
            {mentor.socials.instagram && (
              <a
                href={mentor.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="!flex !flex-col !items-center !gap-2 !text-white !transition-all !duration-300"
                style={{ transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FF2E2E'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >
                <div className="!p-3 !rounded-xl !border !border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}>
                  <Instagram size={22} />
                </div>
                <span className="!text-[9px] !font-black !tracking-widest !uppercase !text-gray-400">Instagram</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Border glow ring */}
      <div
        className="!absolute !inset-0 !pointer-events-none !rounded-[2.5rem] !border-2 !border-white/5 !z-40"
        style={{ transition: 'border-color 0.5s' }}
      />
    </div>
  );
};

// Wrap card in a div that applies the mentor-card class for CSS hooks
const MentorCardWrapper = ({ mentor }: { mentor: Mentor }) => (
  <div className="mentor-card" style={{ flexShrink: 0 }}>
    <MentorCard mentor={mentor} />
  </div>
);

export default function Mentors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320;
      const newPosition =
        direction === 'left'
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              containerRef.current.scrollWidth - containerRef.current.clientWidth,
              scrollPosition + scrollAmount
            );
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="mentors" className="!py-24 !bg-transparent !relative !overflow-hidden">
      {/* Atmospheric glow */}
      <div className="!absolute !inset-0 !pointer-events-none">
        <div className="!absolute !top-0 !left-1/2 !-translate-x-1/2 !w-full !max-w-[1000px] !h-[600px] !bg-red-900/10 !blur-[150px] !opacity-20" />
      </div>

      <div className="!max-w-7xl !mx-auto !px-6 !relative !z-10">
        {/* ── CENTERED HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="!text-center !mb-12"
        >
          <span className="!text-[#B30000] !text-xs !font-black !tracking-[0.8em] !uppercase !block !mb-4">
            EXPERT COUNCIL
          </span>
          <h2 className="!text-4xl md:!text-5xl !font-black !text-white !tracking-tighter">
            MEET OUR <span className="!text-[#FF2E2E]">MENTORS</span>
          </h2>
          <div
            className="!h-1 !w-24 !bg-[#B30000] !mt-4 !rounded-full !mx-auto"
            style={{ boxShadow: '0 0 20px #B30000' }}
          />
        </motion.div>

        {/* Navigation Controls (right-aligned above carousel) */}
        <div className="!flex !justify-end !mb-6 !gap-4">
          <button
            onClick={() => scroll('left')}
            className="!p-4 !rounded-full !bg-white/5 !backdrop-blur-md !border !border-white/10 !text-white !transition-all !duration-300"
            style={{ transition: 'background 0.3s, border-color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#B30000'; (e.currentTarget as HTMLElement).style.borderColor = '#B30000'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
            title="Previous Mentors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="!p-4 !rounded-full !bg-white/5 !backdrop-blur-md !border !border-white/10 !text-white !transition-all !duration-300"
            style={{ transition: 'background 0.3s, border-color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#B30000'; (e.currentTarget as HTMLElement).style.borderColor = '#B30000'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
            title="Next Mentors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="!flex !gap-10 !overflow-x-auto !pt-10 !pb-8 !snap-x !snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mentorsData.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="!snap-center"
              style={{ flexShrink: 0 }}
            >
              <MentorCardWrapper mentor={mentor} />
            </motion.div>
          ))}
        </div>

        {/* Join Button */}
        <div className="!mt-12 !text-center !relative !z-30">
          <a
            href="https://forms.gle/LWRwXgjo6iCW3hSQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block md:!px-10 !px-8 !py-3 bg-red-600 text-white font-orbitron text-base font-bold hover:bg-red-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] relative overflow-hidden group"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 uppercase tracking-widest">Become a Mentor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
}