'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

function CommunityPartner() {

  type TabId = 'community' | 'innovation' | 'mediaEcosystem' | 'corporate';
  const [activeTab, setActiveTab] = useState<TabId>('community');

  const partnerData = {
    community: [
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
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw2aFLNaJqGzP7bQY08D9JOZ2Awrv1flkWEndI",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw3gdy4AbzTfnObYWXHhZLywvtoAjKru4VC7F2",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwqiB4jUKA4TC96RsL1tyDZSnQBWV2jxieHfUE",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwMrBustfm1C4FYUOjBSKVHG78WwoEfivlhQu9",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwrAcZJ39ef8kx1I2ZbXgMTL3Ocjn0SHUWmFap",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwgvR2h1mY4a8b9h0q7wrkDyXFA3QEOKWIscMo",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw3QLOwtbzTfnObYWXHhZLywvtoAjKru4VC7F2",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwRl91jwr6eyIdB2Sm3aJgKwZ04OjANnDGxzov",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwlKTefyv4PqtZOHdMBaDyR9oGbpusSQLezk5h",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwiopkaiQQwoHfyVvJKutbB78lpdSP6RxiZDLq",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwNwFElBsZz4xSQRU3mCBHlitA1PfuWvEFd0I6",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwloYPmyv4PqtZOHdMBaDyR9oGbpusSQLezk5h",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cwati3aF4TzMs9YjkuK2Ll4V50POAiUJDGtbIC",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwDtM05PEYaPt4TShqEbQKRAnD8c0MVzjZpu9O",
    ],
    innovation: [
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw82doVZNP54HUlTxSYFwonIQL97RJiCdOgBrX",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw2b8w2qJqGzP7bQY08D9JOZ2Awrv1flkWEndI",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwUsToOeuBRgrXxDp5P6uomMqW30alVJfFdkcy",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwooDdQvZeKCsIgtOy5bkW72uzPHZp0RdDjqcU",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwDq5Nw3EYaPt4TShqEbQKRAnD8c0MVzjZpu9O",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwTwEeYOAp42W7h8KBFY3GzX9edEQyLfS1nATk",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwHv0ckziX46SdfkNqM9jAUsP02Jg8tzaubOIB",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw6IyxbY81KwuCfiQ05yDXgBbSLRa9HoVYPcjO"
    ],
    mediaEcosystem: [
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwuhoLU0wYX4CwyixjLAMZzK0pW6T8hP3mFJOt",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwtruyedCEeBCb7YwIHRDU3XdWkLPn4Ny02jh9",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwC6h0eZyVsQx5cK3pBhO1ZlvzDUbWCGmHfRa9"
    ],
    corporate: [
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwTknFajAp42W7h8KBFY3GzX9edEQyLfS1nATk",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwGaTlU0tPAaJIVGdiTRZtqKm6Xvy15s4lrH39",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwDQYLijEYaPt4TShqEbQKRAnD8c0MVzjZpu9O",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwDy12L6EYaPt4TShqEbQKRAnD8c0MVzjZpu9O",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw3aao2tbzTfnObYWXHhZLywvtoAjKru4VC7F2",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwDHlonoKEYaPt4TShqEbQKRAnD8c0MVzjZpu9",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4Cw4vQHFp5XSgGi0zO2J6NLEl8jvFsmrefIVyxt",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwGeTdIStPAaJIVGdiTRZtqKm6Xvy15s4lrH39",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwJW0S9j1KkDQqawzAI8ZNX09jtiV74cubPdEG",
      "https://syogjecvuh.ufs.sh/f/utT2UGwYX4CwvJHuaRdRA0qDQSsBxCVPkM1ZXJKF5jN7rwgG"
    ]
  };

  const tabs = [
    { id: 'community', label: 'Community' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'mediaEcosystem', label: 'Media & Ecosystem' },
    { id: 'corporate', label: 'Corporate' }
  ];

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
          className="!mb-20 !text-center !w-full !px-4"
        >
          <div className="!inline-block !relative !w-full">
            <h2
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-white mb-4 font-orbitron uppercase"
                style={{ textShadow: "0 0 30px rgba(179,0,0,0.6)" }}
            >
              OUR <span className="text-[#E7000B]">PARTNERS</span>
            </h2>
          </div>
          <p className="!mt-10 !text-red-500/80 !text-sm md:!text-base !font-mono !tracking-[0.5em] !uppercase">
            /// COLLABORATING FOR A BETTER TOMORROW ///
          </p>
        </motion.div>

        {/* Tabs Selection */}
        <div className="!flex !flex-wrap !justify-center !gap-4 md:!gap-8 !mb-12 !relative !z-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`!text-xs md:!text-sm font-orbitron !tracking-widest !uppercase !transition-all !duration-300 !pb-2 !relative ${
                activeTab === tab.id
                  ? '!text-red-500 !font-bold !border-b-2 !border-red-500 -mb-[2px]'
                  : '!text-gray-500 hover:!text-red-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="!grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-5 !gap-8 md:!gap-12 !mb-20 !min-h-[200px]"
          >
            {partnerData[activeTab].map((logo, index) => (
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
              <div className="!absolute !-bottom-3 !left-1/2 !-translate-x-1/2 !bg-red-600 !text-white !text-[10px] !font-bold !px-3 !py-1 !rounded-full !opacity-0 group-hover:!opacity-100 !transition-all !duration-300 !tracking-widest !uppercase !shadow-[0_0_10px_rgba(220,38,38,0.5)] whitespace-nowrap">
                {tabs.find(t => t.id === activeTab)?.label} Partner
              </div>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>

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
            <span className="relative z-10 uppercase tracking-widest">Join as a Partner</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default CommunityPartner