import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import React from "react";

export default function MainLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Navbar />
            <div className="pt-17.5">
                {children}
            </div>
            <Footer />
        </div>
    );
}