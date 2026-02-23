"use client";
import React, { useMemo } from 'react';

const ParticleBackground = () => {
  // Create stable random values for particles
  const particles = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${6 + Math.random() * 8}s`,
      size: Math.random() * 4 + 1,
    })), []);

  return (
    <div className="!absolute !inset-0 !overflow-hidden !pointer-events-none !z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="!absolute !bg-red-500 !rounded-full !opacity-0 !animate-fire-rise"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            bottom: '-5%',
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {/* Inner Glow - This will "ignite" when it hits the line via the CSS animation below */}
          <div className="!w-full !h-full !bg-white !rounded-full !blur-[1px] !opacity-50"></div>
        </div>
      ))}
    </div>
  );
};

export default ParticleBackground;