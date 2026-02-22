'use client'

import React, { useState, useEffect } from 'react'

function CommunityPatener() {

  // Original logos array
  const originalLogos = [
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw6UsGYhyn82DNUvCt1MQ5pXgJksoW3ObZPyiI",
  ]

  // Array of new logos to flip to (add your actual different logo URLs here)
  const newLogos = [
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
    "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwo7svsgqHmG9ysCwegNMac5jdLZrk1oA0SbUX",
  ]

  const [currentLogos, setCurrentLogos] = useState(originalLogos)
  const [isFlipping, setIsFlipping] = useState(false)
  const [showNewLogos, setShowNewLogos] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Start flip animation on all logos
      setIsFlipping(true)

      // Change all logos after animation starts
      setTimeout(() => {
        setShowNewLogos(prev => !prev)
        setCurrentLogos(prevLogos => {
          // Toggle between original and new logos for all items
          return prevLogos.map((_, index) =>
            showNewLogos ? originalLogos[index] : newLogos[index]
          )
        })

        // End flip animation
        setTimeout(() => {
          setIsFlipping(false)
        }, 300)
      }, 150)

    }, 4000) // Flip every 4 seconds

    return () => clearInterval(interval)
  }, [showNewLogos])

  const renderLogo = (logo, index) => (
    <div
      key={index}
      className={`relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center group cursor-pointer
        ${isFlipping ? 'animate-flip' : ''}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >

      {/* Outer rotating rectangular frame - primary */}
      <div className="
        absolute
        inset-[-8px]
        rounded-lg
        border-2
        border-dashed
        border-red-500/60
        animate-spin-slow
        group-hover:border-red-500
        group-hover:animate-spin-fast
        shadow-[0_0_15px_rgba(220,38,38,0.3)]
        transition-all
        duration-300
      "></div>

      {/* Middle frame with gradient effect */}
      <div className="
        absolute
        inset-[-4px]
        rounded-md
        border
        border-red-500/30
        animate-spin-reverse-slow
        group-hover:border-red-400/60
        group-hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]
        transition-all
        duration-300
      "></div>

      {/* Inner frame with glow */}
      <div className="
        absolute
        inset-0
        rounded-md
        border-2
        border-transparent
        group-hover:border-red-500/40
        group-hover:scale-105
        transition-all
        duration-300
        bg-gradient-to-r
        from-red-500/0
        via-red-500/20
        to-red-500/0
        animate-shimmer
      "></div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 rounded-tl-md group-hover:scale-125 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500 rounded-tr-md group-hover:scale-125 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500 rounded-bl-md group-hover:scale-125 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 rounded-br-md group-hover:scale-125 transition-all duration-300"></div>

      {/* Diagonal lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform -translate-y-1/2 group-hover:via-red-500/60 transition-all duration-300"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent transform -translate-x-1/2 group-hover:via-red-500/60 transition-all duration-300"></div>

      {/* logo */}
      <img
        src={logo}
        alt={`Partner ${index + 1}`}
        className="
          w-20 md:w-28
          h-20 md:h-28
          object-contain
          relative
          z-10
          opacity-90
          group-hover:scale-125
          group-hover:rotate-2
          transition-all
          duration-300
          ease-out
          drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]
          group-hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.9)]
          bg-black/20
          p-2
          rounded-md
        "
      />

      {/* Hover particle effects */}
      {hoveredIndex === index && (
        <>
          <div className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping-slow top-2 left-2" />
          <div className="absolute w-1.5 h-1.5 bg-red-400 rounded-full animate-ping-slower bottom-2 right-2" />
          <div className="absolute w-1 h-1 bg-red-600 rounded-full animate-ping top-1/2 left-1" />
          <div className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping-slow top-1/2 right-1" />
        </>
      )}
    </div>
  )

  return (
    <div className="!max-w-7xl !mx-auto !px-4 !relative !z-10 !w-full !text-center !py-12">

      {/* Header */}
      <div className="!mb-16">
        <h2
          className="!text-5xl md:!text-7xl !font-black !text-white !tracking-widest !mb-4 !relative !inline-block"
          style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.5)" }}
        >
          COMMUNITY PARTNERS
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
        </h2>

        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent !mx-auto !shadow-[0_0_15px_rgba(220,38,38,1)]"></div>

        <p className="mt-8 !text-gray-400 !text-sm !tracking-[0.3em] !uppercase font-orbitron">
          Collaborating for a Better Tomorrow
        </p>
      </div>

      <div className="!flex !items-center !justify-center w-full max-w-5xl !mx-auto !mt-8 !mb-12 !px-4">
        <h2 className="mx-6 text-xl md:text-3xl font-bold text-white tracking-[0.2em] !text-center !relative !py-4 !px-8 !border !border-red-500/30 !rounded-lg !bg-black/20 !backdrop-blur-sm"
          style={{ textShadow: '0 0 15px rgba(255,255,255,0.6)' }}>
          Partners Who Power Our Mission
          <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500"></span>
          <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500"></span>
          <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500"></span>
        </h2>
      </div>

      {/* Logo Grid */}
      <div className="!mt-20 space-y-16">
        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {currentLogos.slice(0, 4).map((logo, index) => renderLogo(logo, index))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {currentLogos.slice(4, 7).map((logo, index) => renderLogo(logo, index + 4))}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="!mt-20 !relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        <div className="!mt-4 text-gray-600 text-xs tracking-widest">✦ PARTNERS ✦</div>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes flip {
          0% { transform: perspective(400px) rotateY(0); }
          50% { transform: perspective(400px) rotateY(180deg); }
          100% { transform: perspective(400px) rotateY(360deg); }
        }

        @keyframes ping-slow {
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes ping-slower {
          50%, 100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 0.8s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 10s linear infinite;
        }

        .animate-flip {
          animation: flip 0.3s ease-in-out;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(220,38,38,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .group:hover .animate-spin-slow {
          animation-duration: 4s;
        }

        .group:hover .animate-spin-reverse-slow {
          animation-duration: 3s;
        }
      `}</style>

    </div>
  )
}

export default CommunityPatener;