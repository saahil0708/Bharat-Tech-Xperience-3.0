'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

function CommunityPartner() {

  const logos = [
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwoW6qXYZeKCsIgtOy5bkW72uzPHZp0RdDjqcU",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw76UkMmKqp3x8IhQD2sAd415uMWqlSt6gkTac",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw3vUYiubzTfnObYWXHhZLywvtoAjKru4VC7F2",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwAVqkiTowEIAec5uWFbLDYhZVH4CgdOfGknTy",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwiSA0gJQQwoHfyVvJKutbB78lpdSP6RxiZDLq",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw42nunzg5XSgGi0zO2J6NLEl8jvFsmrefIVyx",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwMiFmjBfm1C4FYUOjBSKVHG78WwoEfivlhQu9",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw6uNRhs81KwuCfiQ05yDXgBbSLRa9HoVYPcjO",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwh96Wrw8RrzwxlpCMGVZTSqXOW6J9tLvg4Yny",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwEigaGxUp02FXN3PZszLetEjQYwMdGfRcDyJ1",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw6qAk6C81KwuCfiQ05yDXgBbSLRa9HoVYPcjO",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw6sPvP5T81KwuCfiQ05yDXgBbSLRa9HoVYPcj",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwLtHNbHOzQCIdZh7qbLnk0RsHeOgu8vTD3pWE",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwWqhJ0jD61eHzR9fY2JxIZSPhmyKbLOcEMwUq",
    "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwN96dVqsZz4xSQRU3mCBHlitA1PfuWvEFd0I6",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="community-partners" className="!min-h-screen !w-full !relative !flex !items-center !justify-center !overflow-hidden !py-24 !border-t !border-red-600/10">

      {/* Dynamic Background Atmosphere */}
      <div className="!absolute !inset-0 !pointer-events-none">
        <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] !from-red-900/30 !via-black !to-black"></div>
        {/* Grid Pattern */}
        <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] !bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Glowing Orbs */}
        <div className="!absolute !top-0 !left-1/4 !w-96 !h-96 !bg-red-600/10 !rounded-full !blur-[128px] !animate-pulse"></div>
        <div className="!absolute !bottom-0 !right-1/4 !w-96 !h-96 !bg-red-900/10 !rounded-full !blur-[128px] !animate-pulse !delay-1000"></div>
      </div>

      <div className="!max-w-7xl !mx-auto !px-6 !relative !z-10 !w-full !text-center">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="!mb-20"
        >
          <div className="!inline-block !relative">
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white !tracking-widest text-center uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">
              COMMUNITY PARTNERS
            </h2>
            <div className="!absolute !-bottom-2 !left-0 !right-0 !h-[2px] !bg-gradient-to-r !from-transparent !via-red-600 !to-transparent !shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
          </div>
          <p className="!mt-10 !text-red-500/80 !text-sm md:!text-base !font-mono !tracking-[0.5em] !uppercase">
            /// COLLABORATING FOR A BETTER TOMORROW ///
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="!grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-5 !gap-8 md:!gap-12 !mb-20"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="!group !relative !aspect-square !flex !items-center !justify-center !bg-zinc-900/20 !backdrop-blur-xl !border !border-white/5 !rounded-xl !p-6 md:!p-8 !transition-all !duration-500 hover:!border-red-500/40 hover:!scale-[1.05] hover:!shadow-[0_0_50px_rgba(220,38,38,0.2)] !cursor-pointer"
            >
              {/* Card Content Overlay */}
              <div className="!absolute !inset-0 !bg-gradient-to-br !from-white/[0.03] !to-transparent !rounded-xl"></div>

              {/* Animated Corner Accents */}
              <div className="!absolute !top-4 !left-4 !w-4 !h-4 !border-t !border-l !border-red-500/30 group-hover:!border-red-500 !transition-all !duration-500"></div>
              <div className="!absolute !bottom-4 !right-4 !w-4 !h-4 !border-b !border-r !border-red-500/30 group-hover:!border-red-500 !transition-all !duration-500"></div>

              {/* Scanline Effect */}
              <div className="!absolute !inset-0 !bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] !bg-[length:100%_4px] !pointer-events-none"></div>

              {/* Logo with Glow */}
              <div className="!relative !z-10 !w-full !h-full !flex !items-center !justify-center">
                <img
                  src={logo}
                  alt={`Community Partner ${index + 1}`}
                  className="!max-w-[100%] !max-h-[100%] !object-contain !transition-all !duration-700 group-hover:!scale-110 !drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:!drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]"
                />
              </div>

              {/* Hover Reveal Badge */}
              <div className="!absolute !-bottom-3 !left-1/2 !-translate-x-1/2 !bg-red-600 !text-white !text-[10px] !font-bold !px-3 !py-1 !rounded-full !opacity-0 group-hover:!opacity-100 !transition-all !duration-300 !tracking-widest !uppercase !shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                Partner
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="!mt-12 !text-center !relative !z-30"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScEzeIMqOtszL0ms9FC2uqlPyhf6vIoxvPREaT4VC5FHq_VKw/viewform?usp=sharing&ouid=116434170257346254696"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block md:!px-10 !px-8 !py-3 bg-red-600 text-white font-orbitron text-base font-bold hover:bg-red-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] relative overflow-hidden group"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 uppercase tracking-widest">Join as Community Partner</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default CommunityPartner