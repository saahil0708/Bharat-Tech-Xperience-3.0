"use client";

import React, { useState, useEffect, useRef } from "react";

interface TimelineItem {
  number: string;
  title: string;
  description: string;
  subtitle?: string;
}

const timelineData: TimelineItem[] = [
  {
    number: "01",
    title: "THE BEGINNING",
    subtitle: "GENESIS",
    description:
      "Where it all started. The foundation of greatness built on vision and determination.",
  },
  {
    number: "02",
    title: "THE RISE",
    subtitle: "ASCENSION",
    description:
      "Breaking barriers and pushing boundaries. The journey to the top begins.",
  },
  {
    number: "03",
    title: "THE PEAK",
    subtitle: "PINNACLE",
    description:
      "Reaching unprecedented heights. Excellence becomes the new standard.",
  },
  {
    number: "04",
    title: "THE LEGACY",
    subtitle: "ETERNAL",
    description:
      "Creating impact that lasts forever. The mark that changes everything.",
  },
];

export default function TimelineCountdown() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const scrollStart = -rect.height + windowHeight;
      const scrollEnd = windowHeight;
      const scrollRange = scrollEnd - scrollStart;
      const currentScroll = windowHeight - rect.top;

      const progress = Math.max(0, Math.min(1, currentScroll / scrollRange));
      setScrollProgress(progress);

      // Determine which section based on scroll progress
      const sectionIndex = Math.min(
        timelineData.length - 1,
        Math.floor(progress * timelineData.length),
      );
      setCurrentIndex(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentItem = timelineData[currentIndex];

  return (
    <div className="min-h-screen ">
      <div ref={containerRef} className="min-h-[400vh] relative">
        {/* Section Heading - Part of the timeline section */}
        <div className="absolute top-8 left-0 right-0 z-30 text-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
              TIMELINE
              <span className="text-red-600 ml-4 animate-pulse">|</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-4 mx-auto" />
          </div>
        </div>

        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"
              style={{
                transform: `scale(${1 + scrollProgress * 0.5})`,
                opacity: 0.3 - scrollProgress * 0.2,
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 rounded-full blur-3xl"
              style={{
                transform: `scale(${1 + scrollProgress * 0.3})`,
                opacity: 0.2,
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Number */}
              <div className="flex flex-col items-start space-y-12">
                {/* Decorative line */}
                <div className="flex items-center gap-4 w-full">
                  <div
                    className="h-1 bg-gradient-to-r from-red-600 to-transparent transition-all duration-700"
                    style={{
                      width: `${(currentIndex + 1) * 25}%`,
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-sm tracking-widest font-light">
                      {"》".repeat(currentIndex + 1)}
                    </span>
                  </div>
                </div>

                {/* Countdown label */}
                <div className="relative mb-4">
                  <span className="text-gray-500 text-sm tracking-[0.3em] font-light uppercase">
                    {"{"}EPISODE{"}"}
                  </span>
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-red-600 text-xl">
                    》
                  </div>
                </div>

                {/* Large number with white color and red outline */}
                <div className="relative">
                  <h1
                    className="text-[20rem] lg:text-[25rem] font-bold leading-none tracking-tighter"
                    style={{
                      color: "#ffffff",
                      WebkitTextStroke: "2px #dc2626",
                      textShadow: `
                        0 0 20px rgba(220, 38, 38, 0.5),
                        0 0 40px rgba(220, 38, 38, 0.3),
                        0 0 60px rgba(220, 38, 38, 0.1),
                        0 0 80px rgba(220, 38, 38, 0.05)
                      `,
                    }}
                  >
                    {currentItem.number}
                  </h1>
                  {/* Red glow effect */}
                  <div
                    className="absolute inset-0 text-[20rem] lg:text-[25rem] font-bold leading-none tracking-tighter opacity-20 blur-2xl"
                    style={{
                      color: "#dc2626",
                    }}
                  >
                    {currentItem.number}
                  </div>
                  {/* Additional soft glow */}
                  <div
                    className="absolute inset-0 text-[20rem] lg:text-[25rem] font-bold leading-none tracking-tighter opacity-10 blur-xl"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    {currentItem.number}
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-12 lg:pl-16">
                {/* Spacing added here */}
                <div className="mb-8"></div>

                {/* Subtitle */}
                {currentItem.subtitle && (
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-red-600" />
                    <span className="text-red-500 text-xs tracking-[0.4em] font-light uppercase">
                      {currentItem.subtitle}
                    </span>
                  </div>
                )}

                {/* Spacing added here */}
                <div className="mb-2"></div>

                {/* Title */}
                <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8">
                  {currentItem.title}
                  <span className="text-red-600 ml-4">{"》》》"}</span>
                </h2>

                {/* Spacing added here */}
                <div className="mb-6"></div>

                {/* Description */}
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-xl mb-12">
                  {currentItem.description}
                </p>

                {/* Spacing added here */}
                <div className="mb-4"></div>

                {/* Progress indicator */}
                <div className="pt-8 space-y-6">
                  <div className="flex items-center justify-between text-xs text-gray-600 tracking-wider">
                    <span>PROGRESS</span>
                    <span>
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(timelineData.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-px bg-gray-800 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 to-red-800 transition-all duration-300"
                      style={{
                        width: `${((currentIndex + 1) / timelineData.length) * 100}%`,
                      }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 bg-red-500 blur-sm opacity-50 transition-all duration-300"
                      style={{
                        width: `${((currentIndex + 1) / timelineData.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 text-red-600/20 text-6xl font-bold">
            {"{"}
          </div>
          <div className="absolute bottom-8 right-8 text-red-600/20 text-6xl font-bold">
            {"}"}
          </div>
        </div>
      </div>
    </div>
  );
}