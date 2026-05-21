"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import {
    ShoppingCart,
    Moon,
    Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import {navLinks} from "@/constants";
import SearchBar from "@/components/SearchBar";


export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <nav className="flex items-center justify-between py-6">

            {/* Logo */}
            <Link
                href="/"
                className="font-gaming text-3xl font-bold"
            >
                PrimePick
            </Link>

            {/* Nav Links */}
            <div className="hidden items-center gap-10 md:flex">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium transition-colors duration-300 hover:text-zinc-400"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">

                <SearchBar />

                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    aria-label="Toggle Theme"
                >
                    {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full"
                    aria-label="Shopping Cart"
                >
                    <ShoppingCart className="h-5 w-5" />
                </Button>

                <Link href="/sign-in">
                    <Button className="rounded-full px-6">
                        Sign In
                    </Button>
                </Link>
            </div>
        </nav>
    );
}