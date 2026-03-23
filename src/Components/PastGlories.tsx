"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { MoveHorizontal } from "lucide-react";
import TeamWork from '../Images/TeamWork.jpg';

const PastGlories = () => {
  const [selectedImg, setSelectedImg] = useState<StaticImageData | string | null>(null);

  const achievements = [
    { img: "https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZiRluhi59KHJzBmlOE1WU3aIdNZyMqTDc5XjF" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw6fZzFq81KwuCfiQ05yDXgBbSLRa9HoVYPcjO" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwNuwb5n3sZz4xSQRU3mCBHlitA1PfuWvEFd0I" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwhWlEfTRrzwxlpCMGVZTSqXOW6J9tLvg4Yny3" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwNuLE72KsZz4xSQRU3mCBHlitA1PfuWvEFd0I" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwfLXJsGxILIezEXGvqYdC40DZiyB9aJuP1NRo" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwTv3EvSAp42W7h8KBFY3GzX9edEQyLfS1nATk" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwoPygWRqZeKCsIgtOy5bkW72uzPHZp0RdDjqc" },
    { img: "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwCCezVlyVsQx5cK3pBhO1ZlvzDUbWCGmHfRa9" },
  ];

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  // Map raw X value linearly to rotateY (continuous, no clamping)
  const rotateY = useTransform(springX, (value) => value * -0.2);

  // Handle auto-rotation
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let animationFrameId: number;
    let currentX = x.get();

    const autoRotate = () => {
      if (!isHovered) {
        currentX -= 0.5; // auto-rotation speed
        x.set(currentX);
      } else {
        currentX = x.get();
      }
      animationFrameId = requestAnimationFrame(autoRotate);
    };

    animationFrameId = requestAnimationFrame(autoRotate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [x, isHovered]);

  return (
    <>
      <style jsx global>{`
        :root {
          --carousel-radius: 400px;
          --card-width: 280px;
          --card-height: 340px;
        }
        @media (max-width: 1024px) {
          :root {
            --carousel-radius: 300px;
            --card-width: 220px;
            --card-height: 250px;
          }
        }
        @media (max-width: 640px) {
          :root {
            --carousel-radius: 170px;
            --card-width: 180px;
            --card-height: 240px;
          }
        }

        .carousel-container {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        .carousel {
          transform-style: preserve-3d;
        }
        .carousel-item {
          position: absolute;
          transform-style: preserve-3d;
          /* Remove backface-visibility: hidden so cards on the back of the globe are visible */
          backface-visibility: visible;
        }
      `}</style>

      <section id="past-glories" className="!min-h-screen !w-full !relative !flex !items-center !justify-center !overflow-hidden !py-24 !border-t !border-red-900/20">
        <div className="!absolute !inset-0 !z-0">
          <ParticleBackground />
        </div>

        {/* Global Lighting & 3D Floor Glow */}
        <div className="!absolute !inset-0 !pointer-events-none !z-10">
          <div className="!absolute !inset-0 !bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] !from-red-900/20 !via-black !to-black"></div>
          <div
            className="!absolute !top-[60%] !left-1/2 !w-[100vw] !h-[100vw] !max-w-[1000px] !max-h-[1000px] !bg-[radial-gradient(circle,_rgba(220,38,38,0.1)_0%,_transparent_60%)] !rounded-full !blur-2xl"
            style={{ transform: "translate(-50%, -50%) rotateX(75deg)" }}
          ></div>
        </div>

        <div className="!w-full !max-w-[1200px] !mx-auto !px-4 !relative !z-20 !text-center !flex !flex-col !items-center">

          <div className="!mb-8 md:!mb-12 !relative !text-center !w-full !px-4">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-white mb-4 font-orbitron uppercase !relative !z-10"
              style={{ textShadow: "0 0 30px rgba(179,0,0,0.6)" }}
            >
              PAST <span className="text-[#E7000B]">GLIMPSES</span>
            </h2>
          </div>

          {/* Rotate Indicator */}
          <div className="!flex !items-center !justify-center !gap-2 !text-red-500 !mb-16 !animate-pulse !bg-black/40 !backdrop-blur-sm !py-2 !px-4 !rounded-full !border !border-red-900/50">
            <MoveHorizontal className="w-5 h-5" />
            <span className="!uppercase !tracking-[0.2em] !text-[10px] md:!text-xs !font-bold">Drag to Rotate the Globe</span>
            <MoveHorizontal className="w-5 h-5" />
          </div>

          {/* 3D Carousel container */}
          <motion.div
            className="!relative !w-full !h-[450px] md:!h-[500px] !flex !justify-center !items-center carousel-container cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onPan={(e, info) => {
              // Directly modify the target X value by the pan delta (amplified slightly for feel)
              x.set(x.get() + info.delta.x * 1.5);
            }}
          >
            <motion.div
              className="!relative carousel"
              style={{
                rotateY,
                width: "var(--card-width)",
                height: "var(--card-height)"
              }}
            >
              {achievements.map((item, idx) => {
                const angle = (360 / achievements.length) * idx;
                return (
                  <div
                    key={idx}
                    className="carousel-item !w-full !h-full !absolute !flex !justify-center !items-center"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`
                    }}
                  >
                    <div
                      onClick={() => setSelectedImg(item.img)}
                      className="!w-full !h-full !bg-[#080808] !border !border-red-900/50 !p-2 md:!p-3 !flex !flex-col !shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:!border-red-500 hover:!shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all duration-300 transform hover:!-translate-y-2 !cursor-zoom-in"
                    >
                      <div className="!relative !w-full !flex-1 !bg-zinc-950 !overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.img}
                          fill
                          unoptimized={true}
                          className="!object-cover !transition-all !duration-500 pointer-events-none"
                          style={{ transform: "translateZ(0)" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedImg && (
          <div
            className="!fixed !inset-0 !z-[100] !bg-black/95 !backdrop-blur-xl !flex !items-center !justify-center !p-10 !cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <div className="!relative !w-full !max-w-5xl !h-full !max-h-[80vh]">
              <Image src={selectedImg} alt="Preview" fill unoptimized={true} className="!object-contain pointer-events-none" />
              <button
                className="!absolute !top-[-40px] !right-0 !text-white !text-xl !font-mono hover:!text-red-500 transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                CLOSE_X
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default PastGlories;
