"use client";
import React from "react";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/Components/ui/stateful-button";

const Contact = () => {
    const handleEmail = () => {
        window.location.href = "mailto:team.theuniques@sviet.ac.in";
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/919587308788", "_blank");
    };

    const handleLocation = () => {
        window.open("https://www.google.com/maps/search/Swami+Vivekanand+Institute+of+Engineering+%26+Technology+Ramnagar+Banur+Patiala+Punjab", "_blank");
    };

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
                            {/* Frequency / Email Button */}
                            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl bg-zinc-950 border-2 border-red-900/50 !p-6 transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                <div className="flex flex-col items-center gap-4 z-10 mb-6">
                                    <div className="p-3 rounded-lg bg-red-950/30 group-hover:bg-red-600/20 transition-colors">
                                        <Mail className="w-8 h-8 text-red-600 group-hover:text-red-400 transition-colors" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-white font-bold text-lg uppercase tracking-wider font-orbitron mb-1">Frequency</h3>
                                        <p className="text-gray-500 text-xs font-orbitron group-hover:text-gray-300 transition-colors">team.theuniques@sviet.ac.in</p>
                                    </div>
                                </div>
                                <Button className="!bg-red-600 !hover:bg-red-500 hover:ring-red-500 !py-1 !tracking-wider !w-full relative z-10 !text-white" onClick={handleEmail}>
                                    CONNECT
                                </Button>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl bg-zinc-950 border-2 border-red-900/50 !p-6 transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                <div className="flex flex-col items-center gap-4 z-10 mb-6">
                                    <div className="p-3 rounded-lg bg-red-950/30 group-hover:bg-red-600/20 transition-colors">
                                        <Phone className="w-8 h-8 text-red-600 group-hover:text-red-400 transition-colors" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-white font-bold text-lg uppercase tracking-wider font-orbitron mb-1">WhatsApp</h3>
                                        <p className="text-gray-500 text-xs font-orbitron group-hover:text-gray-300 transition-colors">+91 95873 08788</p>
                                    </div>
                                </div>
                                <Button className="!bg-red-600 !hover:bg-red-500 !py-1 hover:ring-red-500 !text-white !tracking-wider !w-full relative z-10" onClick={handleWhatsApp}>
                                    CHAT
                                </Button>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>

                            {/* Base Spec / Location Button */}
                            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl bg-zinc-950 border-2 border-red-900/50 !p-6 transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                <div className="flex flex-col items-center gap-4 z-10 !mb-6">
                                    <div className="p-3 rounded-lg bg-red-950/30 group-hover:bg-red-600/20 transition-colors">
                                        <MapPin className="w-8 h-8 text-red-600 group-hover:text-red-400 transition-colors" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-white font-bold text-lg uppercase tracking-wider font-orbitron mb-1">Base Spec</h3>
                                        <p className="text-gray-500 text-xs font-orbitron group-hover:text-gray-300 transition-colors">SVIET, Punjab</p>
                                    </div>
                                </div>
                                <Button className="!bg-red-600 !hover:bg-red-500 !py-1 hover:ring-red-500 !text-white !tracking-wider !w-full relative z-10" onClick={handleLocation}>
                                    LOCATE
                                </Button>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
