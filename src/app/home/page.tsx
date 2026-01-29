import React from "react";
import Image from "next/image";
import Bg from '../../Images/stranger things.jpg.jpeg';

import HeroSection from "@/Components/Hero";

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="w-full h-screen bg-black">
                {/* <Image src={Bg} alt="" className="w-full h-full object-cover opacity-50" /> */}
                <HeroSection />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
            </div>
        </React.Fragment>
    )
}