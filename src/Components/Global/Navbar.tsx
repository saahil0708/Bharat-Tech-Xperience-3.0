'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "HOME", href: "#home" },
        { label: "ABOUT", href: "#about" },
        { label: "TIMELINE", href: "#timeline" },
        { label: "PRIZES", href: "#prizes" },
        { label: "SPONSORS", href: "#sponsors" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 flex justify-center items-center w-full z-50 bg-transparent">
            <div className="max-w-6xl mx-auto !px-6 !sm:px-6 lg:px-8 w-full">
                <div className="flex w-full items-center justify-between h-20">

                    {/* Logo/Brand */}
                    <div className="flex-shrink-0 md:w-1/3 flex justify-start">
                        <Link
                            href="#home"
                            className="text-xl font-bold text-white tracking-wider hover:text-red-500 transition-colors duration-300"
                        >
                            LOGO
                        </Link>
                    </div>

                    {/* Navigation Links (Desktop) - Centered */}
                    <div className="hidden md:flex items-center justify-center md:w-1/3">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="relative group px-1 py-1 text-sm font-mono font-bold text-gray-300 transition-all duration-300 hover:text-red-500 flex items-center justify-center"
                                >
                                    <span className="relative z-10 tracking-widest">{item.label}</span>

                                    {/* Hover Underline Effect */}
                                    <span className="absolute left-0 bottom-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>

                                    {/* Glitch effect on hover */}
                                    <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 blur-sm transition-opacity duration-300"></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="flex-shrink-0 md:w-1/3 md:flex justify-end">
                        <Link href="/register">
                            <button
                                className="ml-4 !px-7 !py-2 bg-red-600 text-white font-orbitron text-base font-bold hover:bg-red-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] relative overflow-hidden group"
                                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                            >
                                <span className="relative z-10">Register</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-all duration-300"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close Icon */}
                            <svg
                                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden absolute top-20 left-0 w-full z-40`}>
                <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 bg-black/95 backdrop-blur-xl border-b border-red-900/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-4 text-center text-lg font-orbitron font-bold text-gray-300 hover:text-white hover:bg-gradient-to-r from-transparent via-red-900/20 to-transparent transition-all duration-300 group relative overflow-hidden boarder-b border-white/5"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                {item.label}
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}