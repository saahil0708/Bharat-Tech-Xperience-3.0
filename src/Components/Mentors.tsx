'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Instagram, Linkedin, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ElectricBorder from './ElectricBorder ';

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Vikram Singh",
    role: "Head of Innovation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "Visionary leader focused on disruptive technologies and global AI architecture strategy.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Cybersecurity Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Passionate about building secure systems and mentoring the next generation of defenders.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Full Stack Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    bio: "Expert in building scalable web applications and high-performance distributed systems.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "UI/UX Design Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Crafting immersive digital experiences that combine aesthetics with seamless function.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 5,
    name: "David Park",
    role: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Optimizing global cloud architectures and implementing robust DevOps frameworks.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 6,
    name: "Anya Sharma",
    role: "Data Science Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Extracting actionable insights from complex datasets to drive business intelligence.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 7,
    name: "Marcus Thorne",
    role: "Blockchain Dev",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    bio: "Pioneering decentralized solutions and smart contract security in the Web3 space.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 8,
    name: "Leila Jafari",
    role: "Mobile Strategy",
    image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2ea6?q=80&w=1974&auto=format&fit=crop",
    bio: "Engineering high-performance native and cross-platform mobile experiences.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 9,
    name: "Hiroshi Tanaka",
    role: "AI Research",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    bio: "Advancing natural language processing and computer vision field research.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    id: 10,
    name: "Sophia Bennett",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop",
    bio: "Defining product roadmaps and bridge the gap between users and engineering.",
    socials: { linkedin: "#", instagram: "#", github: "#" }
  }
];

// ─── Modal ────────────────────────────────────────────────────────────────────
const MentorModal = ({ mentor, onClose }: { mentor: Mentor; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="!fixed !inset-0 !z-[100] !flex !items-center !justify-center !p-4 md:!p-8 !bg-black/80 !backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      onClick={(e) => e.stopPropagation()}
      className="!relative !w-full !max-w-4xl !bg-[#050505] !border !border-white/10 !rounded-[2.5rem] !overflow-hidden !shadow-[0_0_50px_rgba(255,46,46,0.15)] !flex !flex-col md:!flex-row"
    >
      <div className="!absolute !inset-0 !bg-gradient-to-br !from-[#FF2E2E]/5 !via-transparent !to-transparent !pointer-events-none" />

      <button
        onClick={onClose}
        className="!absolute !top-6 !right-6 !z-30 !p-3 !rounded-full !bg-white/5 !text-white hover:!bg-red-600 hover:!shadow-[0_0_20px_rgba(255,46,46,0.5)] !transition-all !duration-300"
      >
        <X size={24} />
      </button>

      {/* Left Side: Image */}
      <div className="!w-full md:!w-2/5 !h-80 md:!h-auto !relative !overflow-hidden">
        <img src={mentor.image} alt={mentor.name} className="!w-full !h-full !object-cover !scale-105" />
        <div className="!absolute !inset-0 !bg-gradient-to-t md:!bg-gradient-to-r !from-[#050505] !via-transparent !to-transparent" />
      </div>

      {/* Right Side: Content */}
      <div className="!flex-1 !p-8 md:!p-12 !flex !flex-col !justify-center !relative !z-10">
        <div className="!mb-8">
          <div className="!flex !items-center !gap-3 !mb-2">
            <h2 className="!text-3xl md:!text-5xl !font-black !text-white !tracking-tighter">{mentor.name}</h2>
            <BadgeCheck className="!text-[#FF2E2E]" size={32} />
          </div>
          <p className="!text-[#FF2E2E] !text-xs !font-black !tracking-[0.5em] !uppercase !opacity-80">{mentor.role}</p>
        </div>

        <div className="!space-y-8">
          <div>
            <div className="!flex !items-center !gap-2 !mb-4">
              <div className="!w-6 !h-[2px] !bg-[#FF2E2E] !rounded-full" />
              <h4 className="!text-white !text-[10px] !font-black !uppercase !tracking-[0.3em] !opacity-40">Mission Brief</h4>
            </div>
            <p className="!text-gray-300 !text-lg !font-medium !leading-relaxed !tracking-wide">
              {mentor.bio}
            </p>
          </div>

          <div>
            <h4 className="!text-white !text-[10px] !font-black !uppercase !tracking-[0.3em] !mb-5 !opacity-40">Direct Channels</h4>
            <div className="!flex !gap-5">
              {mentor.socials.linkedin && (
                <a href={mentor.socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="!p-4 !rounded-2xl !bg-white/5 !border !border-white/10 !text-white hover:!bg-[#FF2E2E] hover:!border-[#FF2E2E] hover:!shadow-[0_0_30px_rgba(255,46,46,0.4)] hover:!-translate-y-1 !transition-all !duration-300">
                  <Linkedin size={24} />
                </a>
              )}
              {mentor.socials.github && (
                <a href={mentor.socials.github} target="_blank" rel="noopener noreferrer"
                  className="!p-4 !rounded-2xl !bg-white/5 !border !border-white/10 !text-white hover:!bg-[#FF2E2E] hover:!border-[#FF2E2E] hover:!shadow-[0_0_30px_rgba(255,46,46,0.4)] hover:!-translate-y-1 !transition-all !duration-300">
                  <Github size={24} />
                </a>
              )}
              {mentor.socials.instagram && (
                <a href={mentor.socials.instagram} target="_blank" rel="noopener noreferrer"
                  className="!p-4 !rounded-2xl !bg-white/5 !border !border-white/10 !text-white hover:!bg-[#FF2E2E] hover:!border-[#FF2E2E] hover:!shadow-[0_0_30px_rgba(255,46,46,0.4)] hover:!-translate-y-1 !transition-all !duration-300">
                  <Instagram size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// ─── Card ─────────────────────────────────────────────────────────────────────
const MentorCard = ({ mentor, onOpen }: { mentor: Mentor; onOpen: () => void }) => {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="!relative !w-full !aspect-[3/4] !rounded-[2.5rem] !cursor-pointer"
    >
      {/* ElectricBorder: visual only, pointer-events-none, no interactive children */}
      <ElectricBorder
        color="#FF2E2E"
        speed={0.8}
        chaos={0.08}
        borderRadius={40}
        className="!absolute !inset-0 !w-full !h-full !pointer-events-none"
      >
        <div className="!relative !w-full !h-full !rounded-[2.5rem] !overflow-hidden !bg-[#0a0a0a]">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="!absolute !inset-0 !w-full !h-full !object-cover !transition-all !duration-700"
            style={{
              opacity: 1,
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <div className="!absolute !inset-0 !bg-[url('https://grainy-gradients.vercel.app/noise.svg')] !opacity-20 !pointer-events-none !mix-blend-overlay !z-[1]" />
          <div className="!absolute !inset-0 !bg-gradient-to-t !from-black !via-black/20 !to-transparent !opacity-80 !z-[2]" />
        </div>
      </ElectricBorder>

      {/* Always visible content layer */}
      <div className="!absolute !inset-0 !flex !flex-col !justify-end !items-center !pb-8 !px-6 !z-20">
        <div className="!flex !flex-col !items-center !text-center !w-full">
          <div className="!flex !items-center !justify-center !gap-1.5 !mb-1.5">
            <h3 className="!text-2xl !font-black !text-white !tracking-tight">{mentor.name}</h3>
            <BadgeCheck className="!text-[#FF2E2E]" size={20} />
          </div>
          <p className="!text-[#FF2E2E] !text-[10px] !font-black !tracking-[0.4em] !uppercase !mb-5">{mentor.role}</p>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="!w-full !max-w-[180px] !py-3 !rounded-xl !bg-[#FF2E2E] !text-white !text-[10px] !font-black !uppercase !tracking-[0.2em] !shadow-[0_0_20px_rgba(255,46,46,0.3)] hover:!shadow-[0_0_30px_rgba(255,46,46,0.5)] !transition-all !duration-300"
          >
            Know More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Mentors() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(mentorsData.length / visibleCount);
  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentMentors = useMemo(() => {
    const start = currentPage * visibleCount;
    return mentorsData.slice(start, start + visibleCount);
  }, [currentPage, visibleCount]);

  return (
    <section id="mentors" className="!py-16 !bg-transparent !relative !overflow-hidden">
      <div className="!absolute !inset-0 !pointer-events-none">
        <div className="!absolute !top-0 !left-1/4 !w-[600px] !h-[600px] !bg-red-600/10 !blur-[120px] !rounded-full !animate-pulse" />
        <div
          className="!absolute !bottom-0 !right-1/4 !w-[600px] !h-[600px] !bg-red-900/10 !blur-[120px] !rounded-full !animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="!max-w-7xl !mx-auto !px-6 !relative !z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="!text-center !mb-6"
        >
          <span className="!text-[#B30000] !text-xs !font-black !tracking-[0.8em] !uppercase !block !mb-2">
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

        {/* Navigation */}
        <div className="!flex !justify-end !mb-6 !gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={prevPage}
            className="!p-4 !rounded-2xl !bg-[#111] !border !border-white/10 !text-white !shadow-xl !transition-all !duration-300 hover:!border-[#FF2E2E] hover:!text-[#FF2E2E] hover:!shadow-[0_0_20px_rgba(255,46,46,0.3)]"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={nextPage}
            className="!p-4 !rounded-2xl !bg-[#111] !border !border-white/10 !text-white !shadow-xl !transition-all !duration-300 hover:!border-[#FF2E2E] hover:!text-[#FF2E2E] hover:!shadow-[0_0_20px_rgba(255,46,46,0.3)]"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Cards Grid */}
        <div className="!relative !min-h-[400px] !flex !items-center !justify-center !w-full">
          
          {/* Glass Overlay with Badge */}
          <div className="!absolute !inset-[-1rem] sm:!inset-[-2rem] !z-30 !flex !items-center !justify-center !bg-[#050505]/40 !backdrop-blur-[8px] !rounded-[3rem] !border !border-white/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="!px-8 !py-8 md:!px-12 md:!py-10 !rounded-3xl !bg-white/5 !border !border-white/10 !backdrop-blur-xl !flex !flex-col !items-center !gap-4 !shadow-[0_0_50px_rgba(255,46,46,0.2)]"
            >
              <BadgeCheck className="!text-[#FF2E2E]" size={56} />
              <h3 className="!text-3xl md:!text-5xl !font-black !text-white !tracking-tighter !uppercase !text-center">To Be Revealed</h3>
              <p className="!text-[#FF2E2E] !text-xs !font-black !tracking-[0.4em] !uppercase !text-center">Stay Tuned for Updates</p>
            </motion.div>
          </div>

          <div className="!w-full !opacity-30 !pointer-events-none !select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-10 !w-full !py-10"
              >
                {currentMentors.map((mentor) => (
                  <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                    onOpen={() => setSelectedMentor(mentor)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="!mt-12 !text-center !relative !z-30">
          <a
            href="https://forms.gle/LWRwXgjo6iCW3hSQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block md:!px-10 !px-8 !py-3 bg-red-600 text-white font-orbitron text-base font-bold hover:bg-red-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] relative overflow-hidden group"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 uppercase tracking-widest">Become a Mentor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}