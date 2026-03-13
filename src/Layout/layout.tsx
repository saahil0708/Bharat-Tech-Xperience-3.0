'use client'

// src/Layout/layout.tsx
import React from "react";
import HomePage from "@/app/home/page";
import TimeLine from "@/Components/TImeLine";
import Navbar from "@/Components/Global/Navbar";
import Prizes from "@/Components/Prizes";
import Sponsors from "@/Components/Sponsors";
import Contact from "@/Components/Contact";
import Organisers from "@/Components/Organisers"; // IMPORT NEW COMPONENT

import Footer from "@/Components/Footer";
import OurTeam from "@/Components/OurTeam";
import CommunityPartner from "@/Components/communityPartners";
import Mentors from '@/Components/Mentors';
import PastGlories from "@/Components/PastGlories";

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />

            {/* Main Content Wrapper - Higher Z-Index to cover Footer */}
            {/* Main Content Wrapper */}
            <main className="relative bg-black z-10">
                <HomePage />
                <TimeLine />
                <Prizes />
                <CommunityPartner />
                <Mentors/>  
                <Sponsors />
                <Organisers />
                <OurTeam />
                <PastGlories />
                <Contact />
            </main>

            {/* Fixed Footer - Z-0 ensures it sits behind main content but above body */}
            <Footer />
        </React.Fragment>
    )
}