"use client";
import React from "react";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact" className="!min-h-[60vh] !w-full !relative !flex !items-center !justify-center !bg-transparent !overflow-hidden !py-24 !border-t !border-red-900/40">
            {/* Background Atmosphere - Simplified for transparency */}
            <div className="!absolute !inset-0 !pointer-events-none">
                <div className="!absolute !bottom-0 !left-0 !w-full !h-full !bg-gradient-to-t !from-red-900/20 !to-transparent"></div>
            </div>

            <div className="!max-w-6xl !mx-auto !px-4 !relative !z-20 !w-full">

                <div className="!flex !flex-col !items-center !text-center !gap-12">

                    {/* Contact Info Centered */}
                    <div className="!w-full !max-w-3xl">
                        <h2 className="!text-5xl md:!text-7xl !font-black !text-white !mb-8 !tracking-tight">
                            GET IN <span className="!text-red-600" style={{ textShadow: "0 0 20px red" }}>TOUCH</span>
                        </h2>

                        <p className="!text-gray-400 !text-lg !mb-12 !leading-relaxed font-orbitron">
                            Have questions about the upside down? Need coordinates for the portal?
                            The Hawkins Lab is listening.
                        </p>

                        <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-6">
                            <Link href="mailto:team.theuniques@sviet.ac.in" className="!flex !flex-col !items-center !gap-4 !p-6 !px-6 !bg-black/40 !backdrop-blur-md !border !border-red-900/30 !rounded-lg hover:!border-red-600 transition-colors group cursor-pointer">
                                <Mail className="w-10 h-10 text-red-500 group-hover:text-red-400 transition-colors" />
                                <div>
                                    <h3 className="!text-white !font-bold !text-sm !uppercase !tracking-wider !mb-1 font-orbitron">Frequency</h3>
                                    <p className="!text-gray-400 !text-sm font-orbitron">team.theuniques@sviet.ac.in</p>
                                </div>
                            </Link>
                            <Link href="https://wa.me/919587308788" target="_blank" rel="noopener noreferrer" className="!flex !flex-col !items-center !gap-4 !p-6 !bg-black/40 !backdrop-blur-md !border !border-red-900/30 !rounded-lg hover:!border-red-600 transition-colors group cursor-pointer">
                                <Phone className="w-10 h-10 text-red-500 group-hover:text-red-400 transition-colors" />
                                <div>
                                    <h3 className="!text-white !font-bold !text-sm !uppercase !tracking-wider !mb-1 font-orbitron">WhatsApp</h3>
                                    <p className="!text-gray-400 !text-sm font-orbitron">+91 95873 08788</p>
                                </div>
                            </Link>
                            <Link href="https://www.google.com/maps/search/Swami+Vivekanand+Institute+of+Engineering+%26+Technology+Ramnagar+Banur+Patiala+Punjab" target="_blank" rel="noopener noreferrer" className="!flex !flex-col !items-center !gap-4 !p-6 !bg-black/40 !backdrop-blur-md !border !border-red-900/30 !rounded-lg hover:!border-red-600 transition-colors group cursor-pointer">
                                <MapPin className="w-10 h-10 text-red-500 group-hover:text-red-400 transition-colors" />
                                <div>
                                    <h3 className="!text-white !font-bold !text-sm !uppercase !tracking-wider !mb-1">Base Spec</h3>
                                    <p className="!text-gray-400 !text-sm">SVIET, Punjab</p>
                                </div>
                            </Link>
                        </div>

                        {/* <div className="!flex !justify-center !gap-6 !mt-12">
                            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                                <a key={social} href="#" className="!text-gray-500 hover:!text-white !bg-black/40 !w-12 !h-12 !flex !items-center !justify-center !rounded-full !border !border-gray-800 hover:!border-red-600 transition-all">
                                    <span className="!sr-only">{social}</span>
                                    <span className="!text-lg">🔗</span>
                                </a>
                            ))}
                        </div> */}

                        {/* <div className="!mt-16 !pt-8 !border-t !border-red-900/20">
                            <p className="!text-gray-600 !text-xs !font-mono">© 2026 BHARAT TECH XPERIENCE. ALL RIGHTS RESERVED.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
