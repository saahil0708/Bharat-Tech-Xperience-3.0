import React from "react";
import Image from "next/image";
import Bg from '../../Images/stranger things.jpg.jpeg';
import Strange from '../../Images/Strange.jpg';

import HeroSection from "@/Components/Hero";
import CountDown from "@/Components/countDown";

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Image src={Strange} alt="Background" fill className="object-cover" priority />
                <div className="!fixed !top-0 !left-0 !w-full !h-full bg-black/70"></div>
            </div>
            <div className="relative z-10 w-full min-h-screen">
                <HeroSection />
                {/* <CountDown /> */}
            </div>
        </React.Fragment>
    )
}