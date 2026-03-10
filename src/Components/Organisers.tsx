'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// Detailed data for 27 organisers
const organisersData = [
    { id: 1, name: 'Vishwajeet Singh', role: 'Core Member', image: 'https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZLLf2sPtlfWA4nhFqCGvbYBj6gP1Jm0xHws3L', bio: 'The backbone behind Bharat Tech Hackathon 3.0  Turning ideas into reality.', linkedin: 'https://www.linkedin.com/in/vishwajeet-singh-8a8a29271?utm_source=share_via&utm_content=profile&utm_medium=member_ios', github: 'https://github.com/vishwa9939' },
    { id: 2, name: 'Tejendra Singh', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8WuTaNoTIohGNXidTbDC0V8naOQWEBfyZls6u', bio: 'I’m Tejendra Singh, a passionate Graphic Designer, Web Developer, and UI/UX Designer with a strong foundation in Java, JavaScript, React, and Tailwind.', linkedin: 'www.linkedin.com/in/tejendra-singh-uppal-3441b22a6', github: 'https://github.com/tejendrauppal' },
    { id: 3, name: 'Sagar Modi', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8Pr9TNnw2jZ6DOxtmA4fXie9H0uVyWMEChUg5', bio: 'Software Engineer | Data Engineer | Intern - IIT Roorkee | Real-Time Systems & Backend | NASA ARSET & IIRS–ISRO | CodeCrafters 2025 AIR 35 ', linkedin: 'www.linkedin.com/in/sagar-modi-00103829a', github: 'https://github.com/Suryavanshi11444' },
    { id: 4, name: 'Sumit Modi', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8PvycqTw2jZ6DOxtmA4fXie9H0uVyWMEChUg5', bio: 'Software Engineer || Data Engineer || Building AI-Powered Systems & Live Dashboards || Intern @ IIT Roorkee|| ISRO (IIRS) & NASA ARSET Trainee', linkedin: 'https://www.linkedin.com/in/sumit-modi-b043b1286/', github: 'https://www.linkedin.com/in/sumit-modi-b043b1286/' },
    { id: 5, name: 'Anshu', role: 'Core Member', image: 'https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZXwIXvZTc3IaySj5LGoKgDJQzl9ke6xfiVRNA', bio: 'I am Full Stack Developer.', linkedin: 'https://www.linkedin.com/in/anshu-karan-69b875294/', github: 'https://github.com/Anshu74483' },
    { id: 6, name: 'Nandita Kumari', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8FoqWsSygpJkcqu7mHRXdYBwGAxnhisEN2lSv', bio: 'I am a Computer Science (CSD) undergraduate passionate about full-stack web development and digital design. I develop scalable applications using React, Node.js, Express & MongoDB.', linkedin: 'https://www.linkedin.com/in/nandita-kumari-7971572a6/', github: 'https://github.com/Nan-07' },
    { id: 7, name: 'Kritika', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL86V8voZboctEOfUNzRVLHm9Yxwe4MAhClv07Z', bio: 'Computer Science undergraduate passionate about building scalable web applications & AI-based solutions. Skilled in MERN stack development while also exploring innovative AI-driven projects', linkedin: 'https://www.linkedin.com/in/kritika-singh-3569b32a6?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/KRITIKA1980' },
    { id: 8, name: 'Anamika Kumari', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8CzSMtIXvomrXpkeCKYSVZFRDq1c8hBIblwAQ', bio: 'I am a Computer Science (CSD) undergraduate passionate about full-stack web development and digital design. I develop scalable applications using React, Node.js, Express & MongoDB.', linkedin: 'https://www.linkedin.com/in/anamika-kumari-29b301286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/ANAMIKA-CSE' },
    { id: 9, name: 'Neelam Kumari', role: 'Core Member', image: 'https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZQoePplZ4xjF2BuVXWsw7eDcnPpIrSfE1OZhM', bio: 'Curious mind with a passion for learning. Always exploring new ideas and opportunities.', linkedin: 'https://www.linkedin.com/in/neelam-kumari-88938b331/', github: 'https://github.com/nk-1234678' },
    { id: 10, name: 'Himart S Chauhan', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8JWmbCtMi0sL8tIwWEDAOpoZbhzHCcnkTBF5V', bio: 'B.Tech student and aspiring entrepreneur building digital products and creative solutions. Skilled in web development, video editing, and design, with a strong interest in startups, marketing systems, and scalable online platforms.', linkedin: 'https://www.linkedin.com/in/himart-singh-chauhan-730a20231?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/himart-singh-chauhan' },
    { id: 11, name: 'Mayank Shivhare', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8LtsnMlp9mgUGt6lWMZ1eSNAEaxoFyX28Kifq', bio: 'I am a Full Stack Developer', linkedin: 'https://www.linkedin.com/in/mayank-shivhare-252085296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/MayankShivhare3004' },
    { id: 12, name: 'Sujal Sharma', role: 'Core Member', image: 'https://izvkii57x4.ufs.sh/f/JjIXIQMi0sL8QCqJSWtxbNcwtglGuIXq9PWn6Zko3OzBa2AT', bio: 'Exploring the intersection of technology, data, and creativity to design impactful digital experiences.', linkedin: 'https://www.linkedin.com/in/sujal-sharma-742673207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/SujalSharma2103' },
    // { id: 12, name: 'Operative 12', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=11&backgroundColor=111111', bio: 'Web developer maintaining the central operational dashboard.', linkedin: '#', github: '#' },
    // { id: 13, name: 'Operative 13', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=12&backgroundColor=111111', bio: 'Community manager fostering engagement in our hacker networks.', linkedin: '#', github: '#' },
    // { id: 14, name: 'Operative 14', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=13&backgroundColor=111111', bio: 'Operations assistant ensuring smooth day-to-day coordination.', linkedin: '#', github: '#' },
    // { id: 15, name: 'Operative 15', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=14&backgroundColor=111111', bio: 'Participant relations specialist handling hacker inquiries.', linkedin: '#', github: '#' },
    // { id: 16, name: 'Operative 16', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=15&backgroundColor=111111', bio: 'Content creator producing multimedia assets for the event.', linkedin: '#', github: '#' },
    // { id: 17, name: 'Operative 17', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=16&backgroundColor=111111', bio: 'Security monitoring specialist overseeing venue operations.', linkedin: '#', github: '#' },
    // { id: 18, name: 'Operative 18', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=17&backgroundColor=111111', bio: 'Judging panel coordinator facilitating project evaluations.', linkedin: '#', github: '#' },
    // { id: 19, name: 'Operative 19', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=18&backgroundColor=111111', bio: 'Prize and distribution manager handling hackathon rewards.', linkedin: '#', github: '#' },
    // { id: 20, name: 'Operative 20', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=19&backgroundColor=111111', bio: 'Infrastructure assistant setting up the local network environment.', linkedin: '#', github: '#' },
    // { id: 21, name: 'Operative 21', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=20&backgroundColor=111111', bio: 'Catering and refreshment coordinator fueling the hackers.', linkedin: '#', github: '#' },
    // { id: 22, name: 'Operative 22', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=21&backgroundColor=111111', bio: 'Volunteer coordinator directing on-site helpers.', linkedin: '#', github: '#' },
    // { id: 23, name: 'Operative 23', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=22&backgroundColor=111111', bio: 'Workshops and mini-events coordinator.', linkedin: '#', github: '#' },
    // { id: 24, name: 'Operative 24', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=23&backgroundColor=111111', bio: 'Registration desk lead processing new arrivals.', linkedin: '#', github: '#' },
    // { id: 25, name: 'Operative 25', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=24&backgroundColor=111111', bio: 'Accessibility and accommodations specialist.', linkedin: '#', github: '#' },
    // { id: 26, name: 'Operative 26', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=25&backgroundColor=111111', bio: 'Audio and visual control technician for the main stage.', linkedin: '#', github: '#' },
    // { id: 27, name: 'Operative 27', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=26&backgroundColor=111111', bio: 'Emergency response and safety coordinator.', linkedin: '#', github: '#' }
];

export default function Organisers() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Add a small buffer (2px) to account for fractional pixel rounding details
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Scroll by exactly one card width + gap to easily paginate through the cards
            // Card width calculations: We want 4 cards to be visible on desktop. 
            // In Tailwind, gap-6 is 1.5rem = 24px.
            const cardWidth = current.querySelector('.org-card')?.clientWidth || 0;
            const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24);
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="organisers" className="relative !py-24 overflow-hidden !flex !flex-col !items-center">
            {/* Dark Tech Background */}
            <div className="absolute inset-0 pointer-events-none z-[-2]"></div>

            {/* Grid overlay pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-[-1]"></div>

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50 z-0"></div>

            <div className="relative flex flex-col items-center justify-center w-full max-w-[90vw] md:w-max mx-auto !mb-16 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-orbitron font-black text-white !tracking-widest text-center uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]"
                >
                    MEET THE <span className="text-red-600 block sm:inline mt-2 sm:mt-0 font-azonix">ORGANISERS</span>
                </motion.h2>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] md:w-[120%] h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>

            {/* Main Content Area */}
            <div className="relative w-full max-w-7xl mx-auto !px-4 !md:px-12 group z-10">

                {/* Scroll Indicators / Tech decorative elements */}
                {/* <div className="absolute -top-8 right-12 flex items-center gap-4 text-red-500/50 font-mono text-xs hidden md:flex">
                        <span className="tracking-widest uppercase">[{organisersData.length} Records Found]</span>
                        <div className="flex gap-1">
                            <div className={`w-2 h-2 rounded-full ${canScrollLeft ? 'bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-red-900/50'}`}></div>
                            <div className={`w-2 h-2 rounded-full ${canScrollRight ? 'bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-red-900/50'}`}></div>
                        </div>
                    </div> */}

                {/* Navigation Controls */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/80 border border-red-900/50 text-red-500 hover:text-white hover:bg-red-900/80 hover:border-red-500 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] disabled:opacity-0 disabled:cursor-not-allowed hidden sm:flex clip-path-hex"
                    aria-label="Scroll left"
                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 -ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/80 border border-red-900/50 text-red-500 hover:text-white hover:bg-red-900/80 hover:border-red-500 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] disabled:opacity-0 disabled:cursor-not-allowed hidden sm:flex clip-path-hex"
                    aria-label="Scroll right"
                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Profiles Track */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex overflow-x-auto gap-4 md:gap-6 pb-12 pt-6 px-4 snap-x snap-mandatory hide-scroll-bar scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .hide-scroll-bar::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />

                    {organisersData.map((org, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
                            key={org.id}
                            // Using calc here to make sure exactly 4 cards fit on large screens,
                            // 3 on medium, 2 on sm, 1 on mobile
                            className="org-card snap-center shrink-0 w-[85vw] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] group/card relative flex flex-col bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:-translate-y-2"
                            onMouseEnter={() => setHoveredId(org.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
                        >
                            {/* Inner Red Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 z-10 pointer-events-none" />

                            {/* Top decorative bar */}
                            <div className="flex justify-between items-center !px-4 !py-2 border-b border-neutral-800 bg-black/60 z-20 relative">
                                <div className="!flex !gap-1">
                                    <div className="w-1 h-3 bg-red-600/50 group-hover/card:bg-red-500 transition-colors"></div>
                                    <div className="w-1 h-3 bg-red-600/50 group-hover/card:bg-red-500 transition-colors"></div>
                                    <div className="w-1 h-3 bg-neutral-700"></div>
                                </div>
                                <span className="font-mono !text-[10px] !text-neutral-500 !tracking-wider group-hover/card:text-red-400 transition-colors">
                                    // {String(org.id).padStart(3, '0')}
                                </span>
                            </div>

                            {/* Image Wrapper */}
                            <div className="relative !w-full !aspect-[4/5] !bg-black !overflow-hidden z-0">
                                <Image
                                    src={org.image}
                                    alt={org.name}
                                    fill
                                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover contrast-125 transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-110"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover/card:opacity-90"></div>

                                {/* Scanline effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 z-20"></div>

                                {/* Floating info on hover */}
                                <div className="absolute !top-4 !left-4 !z-30 !opacity-0 group-hover/card:!opacity-100 transition-opacity duration-300">
                                    <div className="bg-red-600 text-black font-orbitron font-bold text-[10px] !px-2 !py-0.5 !tracking-widest uppercase">
                                        ACTIVE
                                    </div>
                                </div>

                                {/* Bio & Socials Hover Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center !p-6 z-30 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 bg-black/60 backdrop-blur-[2px]">
                                    <p className="text-white text-center font-tech text-sm leading-relaxed tracking-wide !mb-6 border-l-2 border-red-500 !pl-3">
                                        "{org.bio}"
                                    </p>

                                    <div className="flex !gap-4">
                                        <Link
                                            href={org.linkedin !== '#' ? (org.linkedin.startsWith('http') ? org.linkedin : `https://${org.linkedin}`) : '#'}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 rounded bg-neutral-900 border rounded-full border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500 hover:bg-red-600/20 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                                            aria-label={`${org.name} LinkedIn`}
                                        >
                                            <FaLinkedinIn size={18} />
                                        </Link>
                                        <Link
                                            href={org.github !== '#' ? (org.github.startsWith('http') ? org.github : `https://${org.github}`) : '#'}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 rounded bg-neutral-900 border rounded-full border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500 hover:bg-red-600/20 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                                            aria-label={`${org.name} GitHub`}
                                        >
                                            <FaGithub size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative !p-6 !bg-black flex-grow flex flex-col justify-end z-20 border-t-2 border-transparent group-hover/card:border-red-600 transition-colors duration-500">
                                <h3 className="font-orbitron font-bold text-xl text-white uppercase tracking-wider !mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] line-clamp-1 group-hover/card:text-red-100">
                                    {org.name}
                                </h3>
                                <p className="font-tech text-sm text-red-500 uppercase tracking-[0.2em] !mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,1)] line-clamp-1">
                                    {org.role}
                                </p>

                                {/* Bottom Tech Line */}
                                <div className="w-full h-px bg-neutral-800 relative mt-auto">
                                    <div className="absolute top-0 left-0 h-full bg-red-600 w-0 group-hover/card:w-full transition-all duration-700 ease-out"></div>
                                </div>
                            </div>

                            {/* Decorative corner cut accents */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500/0 group-hover/card:border-red-500/50 transition-all z-30 transform group-hover/card:-translate-x-1 group-hover/card:translate-y-1"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500/0 group-hover/card:border-red-500/50 transition-all z-30 transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50 z-0"></div> */}
        </section>
    );
}
