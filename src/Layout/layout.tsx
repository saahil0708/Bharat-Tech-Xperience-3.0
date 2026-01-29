import React from "react";
import HomePage from "@/app/home/page";
import Navbar from "@/Components/Global/Navbar";

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <HomePage />
        </React.Fragment>
    )
}