"use client";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center !py-12 border-t border-red-900/20 relative z-10">
            {/* Simplified for visibility */}

            <div className="flex flex-col items-center text-center gap-8 max-w-4xl px-4">

                {/* Logo */}
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors duration-500" style={{ textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
                        BHARAT <span className="text-red-600 group-hover:text-white transition-colors duration-500">TECH</span>
                    </h2>
                    <span className="text-xs md:text-sm text-gray-500 tracking-[0.5em] uppercase">Xperience 3.0</span>
                </div>

                {/* Socials */}
                {/* <div className="flex gap-8 mt-4">
                    {['Instagram', 'Twitter', 'LinkedIn', 'Discord'].map((social, index) => (
                        <a key={index} href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] p-2">
                            <span className="sr-only">{social}</span>
                            Placeholder icons
                            <div className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full hover:border-red-500 bg-white/5">
                                <span className="text-xs">🔗</span>
                            </div>
                        </a>
                    ))}
                </div> */}

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold tracking-widest text-gray-400 mt-4 font-orbitron">
                    <a href="#about" className="hover:text-red-500 transition-colors">ABOUT</a>
                    <a href="#timeline" className="hover:text-red-500 transition-colors">TIMELINE</a>
                    <a href="#sponsors" className="hover:text-red-500 transition-colors">SPONSORS</a>
                    <a href="#contact" className="hover:text-red-500 transition-colors">CONTACT</a>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-gray-600 text-xs font-orbitron">
                    <p>PROUDLY CREATED FOR INNOVATORS</p>
                    <p className="mt-2">© 2026 BHARAT TECH XPERIENCE. ALL RIGHTS RESERVED.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
