import React from "react";
import Image from "next/image";
import Strange from '../../Images/Strange.jpg';
import Admin from '../../Images/AdminWIde.png'

import HeroSection from "@/Components/Hero";
import CountDown from "@/Components/countDown";
import About from "@/Components/About";
import CardSection from "@/Components/CardSection"

import { FollowerPointerCard } from "@/Components/ui/following-pointer";

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Image src={Admin} alt="Background" fill className="object-cover" priority />
                <div className="!fixed !top-0 !left-0 !w-full !h-full bg-black/75"></div>
            </div>
            <div className="relative z-10 w-full min-h-screen pb-20">
                <HeroSection />
                <CountDown />
                <About />
                {/* <CardSection /> */}
            </div>
        </React.Fragment>
    )
}