"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import Image from "next/image";
import { GlowingEffect } from "@/Components/ui/glowing-effect";

/* =========================
   ScrollStackItem
========================= */

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => {
  return (
    <div
      className={`
        scroll-stack-card sticky top-[20vh]
        w-[880px] h-[380px]
        !ml-80 !mb-12
        rounded-[28px]
        border border-white/10
        bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-black/80
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        flex items-center gap-8
        px-8 py-6
        transition-all duration-500 ease-out
        hover:border-red-500/40
        hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]
        hover:scale-[1.02]
        group
        ${itemClassName}
      `}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      <GlowingEffect spread={50} glow proximity={80} className="opacity-20" />
      {children}
    </div>
  );
};

/* =========================
   ScrollStack
========================= */

interface ScrollStackProps {
  children: ReactNode;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const scrollRef = useRef(0);
  const rafRef = useRef<number>();
  const offsetsRef = useRef<number[]>([]);

  const updateOffsets = () => {
    offsetsRef.current = cardsRef.current.map((card) => card.offsetTop);
  };

  const animate = useCallback(() => {
    const scroll = scrollRef.current;

    cardsRef.current.forEach((card, i) => {
      const offset = offsetsRef.current[i];
      const distance = scroll - offset;

      if (distance > 0) {
        const scale = Math.max(0.92, 1 - distance * 0.0003);
        card.style.transform = `translateZ(0) scale(${scale})`;
      } else {
        card.style.transform = "translateZ(0) scale(1)";
      }
    });
  }, []);

  /* Lenis Setup */
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on("scroll", (e: any) => {
      scrollRef.current = e.scroll;
      animate();
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafRef.current!);
    };
  }, [animate]);

  /* collect cards */
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    cardsRef.current = Array.from(
      containerRef.current.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];

    updateOffsets();

    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  return (
    <div ref={containerRef}>
      {children}
      <div className="h-[60vh]" />
    </div>
  );
};

/* =========================
   Demo Component
========================= */

export default function ScrollStackDemo() {
  const judges = [
  {
    name: "Dr. Aarav Sharma",
    role: "AI Research Scientist, Google",
    desc: "Specialist in Machine Learning, Deep Learning, and Generative AI with 12+ years of experience building scalable AI systems.",
    exp: "12+",
    location: "Google, Bangalore",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    badge: "AI Expert",
  },
  {
    name: "Priya Verma",
    role: "Senior Software Engineer, Microsoft",
    desc: "Full-stack engineer with expertise in distributed systems, cloud computing, and enterprise-scale application architecture.",
    exp: "10+",
    location: "Microsoft, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    badge: "Cloud Specialist",
  },
  {
    name: "Rohan Mehta",
    role: "Founder & CTO, TechNova",
    desc: "Startup founder and innovator with experience in building scalable SaaS products, mentoring developers, and leading tech teams.",
    exp: "14+",
    location: "TechNova, Gurgaon",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    badge: "Startup Founder",
  },
  {
    name: "Ananya Gupta",
    role: "Cybersecurity Expert, IBM",
    desc: "Cybersecurity specialist focused on ethical hacking, network security, and protecting enterprise systems from modern threats.",
    exp: "9+",
    location: "IBM, Pune",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    badge: "Security Expert",
  },
  {
    name: "Karan Patel",
    role: "Senior Backend Engineer, Amazon",
    desc: "Backend specialist building high-performance distributed systems serving millions of users globally.",
    exp: "11+",
    location: "Amazon, Bangalore",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    badge: "System Architect",
  },
  {
    name: "Neha Singh",
    role: "Data Scientist, NVIDIA",
    desc: "Expert in AI, data science, and GPU computing with experience in building high-performance ML models.",
    exp: "8+",
    location: "NVIDIA, Delhi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    badge: "Data Scientist",
  },
];

  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="!mb-16 !ml-130">
        <h2
          className="!text-4xl md:!text-6xl !ml-5 !font-black !text-white !tracking-widest !mb-4"
          style={{ textShadow: "0 0 15px rgba(220, 38, 38, 0.4)" }}
        >
          OUR JUDGES
        </h2>
        <div className="!h-1 !w-24 !bg-red-600 !ml-50 !shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
        <p className="!mt-6 !text-gray-500 !text-xs !tracking-[0.4em] !uppercase font-orbitron">
          Guided by Experience, Driven by Excellence
        </p>
      </div>

      {/* ScrollStack */}
      <ScrollStack>
        {judges.map((judge, index) => (
          <ScrollStackItem key={index}>

            {/* Image */}
            <div className="relative flex-shrink-0">

              <div className="absolute inset-0 bg-red-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

              <Image
                src={judge.image}
                alt={judge.name}
                width={180}
                height={180}
                className="relative !ml-10 rounded-2xl object-cover border border-white/10 shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">

              <div className="flex items-center gap-4 mb-1">

                <h2 className="text-2xl font-semibold text-white">
                  {judge.name}
                </h2>

                <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
                  {judge.badge}
                </span>

              </div>

              <p className="text-red-400 text-sm font-medium mb-2">
                {judge.role}
              </p>

              <p className="text-gray-400 text-sm max-w-xl">
                {judge.desc}
              </p>

              <div className="flex gap-10 mt-4">

                <div>
                  <p className="text-white font-semibold text-sm">
                    {judge.exp}
                  </p>
                  <p className="text-gray-500 text-xs">Years Experience</p>
                </div>

                <div>
                  <p className="text-white font-semibold text-sm">
                    Legal Expert
                  </p>
                  <p className="text-gray-500 text-xs">Specialization</p>
                </div>

                <div>
                  <p className="text-white font-semibold text-sm">
                    {judge.location}
                  </p>
                  <p className="text-gray-500 text-xs">Location</p>
                </div>

              </div>

            </div>

          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}