"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export default function AnimatedTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:"Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);
  const autoplay = true;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <>
      {/* Section Heading */}
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

      {/* Testimonials */}
      <div className="!ml-70 mx-auto max-w-sm px-4 py-10 md:max-w-5xl md:px-8">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.4,
                    scale: isActive(index) ? 1 : 0.95,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-3xl object-cover shadow-xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>

              <p className="text-gray-400">
                {testimonials[active].designation}
              </p>

              <p className="mt-4 text-gray-300">{testimonials[active].quote}</p>
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"
              >
                <ArrowLeft className="h-5 w-5 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
