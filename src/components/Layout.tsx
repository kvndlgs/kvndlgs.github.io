import Navigation from "./Navigation";
import Footer from "./Footer";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}


export default function Layout ({children}: LayoutProps) {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
} 