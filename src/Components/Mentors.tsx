'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Linkedin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ElectricBorder from './ElectricBorder ';

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
  };
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Yash Khandelwal",
    role: "Founder / Senior System Engineer",
    company: "Xpensease / Infosys",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw1rc8tvnhLXfCZ8OjK0TYSwvp4n9VGQzUolki",
    bio: "A tech-driven founder with hands-on expertise in Flutter, Firebase, GCP, and fintech product development.",
    socials: { linkedin: "https://www.linkedin.com/in/yashkhandelwal10/" }
  },
  {
    id: 2,
    name: "Yuvraj",
    role: "Software Engineer",
    company: "Deloitte",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwDvpxiIEYaPt4TShqEbQKRAnD8c0MVzjZpu9O",
    bio: "A tech-driven founder with hands-on expertise in Flutter, Firebase, GCP, and fintech product development.",
    socials: { linkedin: "https://www.linkedin.com/in/yuvrajroy03" }
  },
  
  {
    id: 3,
    name: "Loveleen Kaur",
    role: "Senior Software Engineer",
    company: "Twin Health",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwn17kLq2rJMho5TI2U9s1FYPm6GOaNxujpiHQ",
    bio: "Hailing from the technology field, she loves logic, but also has a passion for creativity.",
    socials: { linkedin: "https://www.linkedin.com/in/loveleen-kaur/" }
  },
  {
    id: 4,
    name: "Piyush Sharma",
    role: "Tech Mentor | Influencer",
    company: "TrickyMan",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwuFjtFBwYX4CwyixjLAMZzK0pW6T8hP3mFJOt",
    bio: "The founder of Youtube channel @TrickyMan, a web geek, solo entrepreneur and loves making things on the Internet.",
    socials: { linkedin: "https://www.linkedin.com/in/piyush-sharmaaaa/" }
  },
  {
    id: 5,
    name: "Pranav Kumar",
    role: "Technical Lead",
    company: "Wipro",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwCtKn0hyVsQx5cK3pBhO1ZlvzDUbWCGmHfRa9",
    bio: "Innovative IT professional with a proven track record of over 8 years in the industry, fueling business success through cutting-edge solutions.",
    socials: { linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/" }
  },
  {
    id: 6,
    name: "Kanishk Tyagi",
    role: "Senior Software Engineer",
    company: "American Express",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwGMmbxFtPAaJIVGdiTRZtqKm6Xvy15s4lrH39",
    bio: "Aspiring Data Analyst with a strong foundation in customer support, problem-solving, and data-driven decision-making. ",
    socials: { linkedin: "https://www.linkedin.com/in/kanishk-tyagi-32970a173/" }
  },
  {
    id: 7,
    name: "Jyoti Mishra",
    role: "Software Engineer",
    company: "Everts.io",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwswfPrsMUYOTv7p5jLqE90fwVSbiXxDJyRGth",
    bio: "DevOps Engineer working on AWS, Docker, Jenkins, Terraform, Bazel and Ansible.",
    socials: { linkedin: "https://www.linkedin.com/in/jyotim29/" }
  },
  {
    id: 8,
    name: "Praveen Jaiswal",
    role: "Blockchain Dev",
    company: "Polygon",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwgJD9yqY4a8b9h0q7wrkDyXFA3QEOKWIscMoV",
    bio: "Pioneering decentralized solutions and smart contract security in the Web3 space.",
    socials: { linkedin: "#" }
  },
  {
    id: 9,
    name: "Naveen Jaiswal",
    role: "Software Developer",
    company: "ENTAB",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwHLmqIAiX46SdfkNqM9jAUsP02Jg8tzaubOIB",
    bio: "Full-stack developer crafting scalable apps with modern web technologies",
    socials: { linkedin: "https://www.linkedin.com/in/naveen-jaiswal/" }
  },
  {
    id: 10,
    name: "Tathagat Kumar",
    role: "Founder & Startup Mentor",
    company: "Foundr Flow",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwylYQztjXWRnlctd78Q3gaEevU4bui2wrzoIk",
    bio: "As a startup mentor and ecosystem enabler, I am focused on empowering the next generation of founders through practical mentorship, strategic guidance, and community-led innovation.",
    socials: { linkedin: "https://www.linkedin.com/in/heytathagat/" }
  },
  {
    id: 11,
    name: "Gurpreet Singh Sodhi",
    role: "Co Founder & CTO",
    company: "Momentum Software",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwao2A3n4TzMs9YjkuK2Ll4V50POAiUJDGtbIC",
    bio: "Building AI-Powered Solutions for Enterprises & Growing Businesses",
    socials: { linkedin: "https://www.linkedin.com/in/gurpreetsodhi/" }
  },
  {
    id: 12,
    name: "Chhavi Garg",
    role: "Founder & Community Lead ",
    company: "Arexa , Bharat XR",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw58RA2ynzcew7W8RNMtfy41VHZUlCxb39uvLE",
    bio: "XR innovator empowering creators through immersive tech and learning",
    socials: { linkedin: "https://www.linkedin.com/in/chhavigg/" }
  },
  {
    id: 13,
    name: "Ayush Gupta",
    role: "NEXTJS Developer",
    company: "Jungleworks",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw6sZgg1281KwuCfiQ05yDXgBbSLRa9HoVYPcj",
    bio: "Full-stack developer building scalable apps with Next.js and Rails",
    socials: { linkedin: "https://www.linkedin.com/in/ayush-gupta-0a7126211/" }
  },
  {
    id: 14,
    name: "Keshav Gambhir",
    role: "Product marketing",
    company: "Silstone group & Doctustech",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwUEoLOruBRgrXxDp5P6uomMqW30alVJfFdkcy",
    bio: "Product marketer driving growth through strategy, storytelling, and execution",
    socials: { linkedin: "https://www.linkedin.com/in/keshav-gambhir/" }
  },
  {
    id: 15,
    name: "Abhishek Saini",
    role: "Software Localization Engineer",
    company: "Welocalize",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw1lKji9hLXfCZ8OjK0TYSwvp4n9VGQzUolkiB",
    bio: "Software engineer passionate about problem-solving, innovation, and building impactful solutions",
    socials: { linkedin: "https://www.linkedin.com/in/abhisheksaini03/" }
  },
  {
    id: 16,
    name: "Amber Hashmi",
    role: "Associate Software Engineer ",
    company: "NeoSoft Technologies",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwo16nyPZeKCsIgtOy5bkW72uzPHZp0RdDjqcU",
    bio: "In the world of bits and bytes, I translate ideas into reality.",
    socials: { linkedin: "https://www.linkedin.com/in/amber-hashmi-940689253/" }
  },
  {
    id: 17,
    name: "Anam Rashid",
    role: "Associate Software Engineer ",
    company: "NeoSoft Technologies",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwn5ZPBw2rJMho5TI2U9s1FYPm6GOaNxujpiHQ",
    bio: "In the world of bits and bytes, I translate ideas into reality.",
    socials: { linkedin: "https://www.linkedin.com/in/anam-rashid-b3527a255/" }
  },
  {
    id: 17,
    name: "Muntaha",
    role: "Software Engineer  ",
    company: "Revocept Solutions",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwyAm80ljXWRnlctd78Q3gaEevU4bui2wrzoIk",
    bio: "In the world of bits and bytes, I translate ideas into reality.",
    socials: { linkedin: "https://www.linkedin.com/in/muntaha-tabassum/" }
  },
  {
    id: 17,
    name: "Vaishnavi Bajpai",
    role: "Application Developer",
    company: "Caelius Consulting",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwlm5QKHrv4PqtZOHdMBaDyR9oGbpusSQLezk5",
    bio: "I thrive at the intersection of technology, creativity, and leadership — always eager to connect, collaborate, and build something meaningful. ",
    socials: { linkedin: "https://www.linkedin.com/in/vaishnavibajpai90/" }
  },
  {
    id: 17,
    name: "Laxmi Rajput",
    role: "Application Developer",
    company: "Caelius Consulting",
    image: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw8dspb4NP54HUlTxSYFwonIQL97RJiCdOgBrX",
    bio: "Application developer crafting user-friendly and scalable digital solutions",
    socials: { linkedin: "https://www.linkedin.com/in/laxmi-rajput-b51452253/" }
  },
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
          <div className="!flex !flex-col !gap-1">
            <p className="!text-[#FF2E2E] !text-xs !font-black !tracking-[0.5em] !uppercase !opacity-80">{mentor.role}</p>
            <p className="!text-white/60 !text-[10px] !font-bold !tracking-[0.2em] !uppercase">@ {mentor.company}</p>
          </div>
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
          <div className="!flex !items-center !justify-center !gap-1.5 !mb-1">
            <h3 className="!text-2xl !font-black !text-white !tracking-tight">{mentor.name}</h3>
            <BadgeCheck className="!text-[#FF2E2E]" size={20} />
          </div>
          <p className="!text-[#FF2E2E] !text-[10px] !font-black !tracking-[0.4em] !uppercase !mb-1">{mentor.role}</p>
          <p className="!text-white/40 !text-[9px] !font-bold !tracking-[0.2em] !uppercase !mb-5">@ {mentor.company}</p>
          
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
          className="!text-center !mb-6 !w-full !px-4"
        >
          <span className="!text-[#B30000] !text-xs !font-black !tracking-[0.8em] !uppercase !block !mb-2 font-orbitron">
            EXPERT COUNCIL
          </span>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-white mb-4 font-orbitron uppercase"
            style={{ textShadow: "0 0 30px rgba(179,0,0,0.6)" }}
          >
            MEET OUR <span className="text-[#E7000B]">MENTORS</span>
          </h2>
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
          
          <div className="!w-full">
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