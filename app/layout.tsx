// app/layout.tsx

import type { Metadata } from "next";

import { Geist } from "next/font/google";
import { Orbitron } from "next/font/google";

import "./globals.css";

import { Providers } from "@/app/providers";

import React from "react";
import AuthProvider from "@/components/providers/session-provider";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
});

export const metadata: Metadata = {
    title: "PrimePick",
    description: "Gaming Electronics Ecommerce Website",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geist.variable} ${orbitron.variable} antialiased`}
        >
        <Providers>
            <AuthProvider>
                {children}
            </AuthProvider>
        </Providers>
        </body>
        </html>
    );
}