"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Link from "next/link";
import {
    ShoppingCart,
    Moon,
    Sun,
    X, Menu, House, Store, LayoutGrid, BadgePercent, Gamepad2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import {navLinks} from "@/constants";
import SearchBar from "@/components/layout/SearchBar";
import UserMenu from "@/components/layout/UserMenu";


export default function Navbar() {

    const { data: session } =
        useSession();

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <nav className="relative z-50 py-6">

                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-3">

                        {/* Mobile Hamburger + Logo */}
                        <div className="flex items-center gap-2 lg:hidden">

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(true)}
                                aria-label="Open Menu"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>

                            <Link
                                href="/public"
                                className="font-gaming text-2xl font-bold"
                                aria-label="PrimePick Home"
                            >
                                PrimePick
                            </Link>
                        </div>

                        <div className="flex items-center gap-x-10">
                            {/* Desktop Logo */}
                            <Link
                                href="/public"
                                className="hidden font-gaming text-3xl font-bold lg:block"
                                aria-label="PrimePick Home"
                            >
                                PrimePick
                            </Link>

                            {/* Desktop Nav */}
                            <div className="hidden items-center justify-center gap-8 xl:gap-10 lg:flex">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="whitespace-nowrap text-sm font-medium transition-colors duration-300 hover:text-zinc-400"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center justify-end gap-2">

                        {/* Search */}
                        <div className="hidden w-65 lg:block">
                            <SearchBar />
                        </div>

                        {/* Theme Toggle */}
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

                        {/* Cart */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative rounded-full"
                            aria-label="Shopping Cart"
                        >
                            <ShoppingCart className="h-5 w-5" />
                        </Button>

                        {/* User */}
                        {session ? (
                            <UserMenu />
                        ) : (
                            <Link
                                href="/sign-in"
                                className="block"
                            >
                                <Button className="rounded-full px-4 sm:px-6">
                                    Sign In
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* BACKDROP */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
                    isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR */}
            <aside
                className={`fixed right-0 top-0 z-50 flex h-screen w-[80%] max-w-sm flex-col border-l bg-background p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >

                {/* TOP */}
                <div className="mb-10 flex items-center justify-between">

                    <Link
                        href="/public"
                        className="font-gaming text-2xl font-bold"
                    >
                        PrimePick
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X className="h-6 w-6" />
                    </Button>
                </div>

                {/* NAV LINKS */}
                <div className="flex flex-1 flex-col gap-3">

                    <div className="w-full">
                        <SearchBar />
                    </div>

                    <Link
                        href="/public"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                    >
                        <House className="h-5 w-5" />
                        <span>Home</span>
                    </Link>

                    <Link
                        href="/shop"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                    >
                        <Store className="h-5 w-5" />
                        <span>Shop</span>
                    </Link>

                    <Link
                        href="/categories"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                    >
                        <LayoutGrid className="h-5 w-5" />
                        <span>Categories</span>
                    </Link>

                    <Link
                        href="/deals"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                    >
                        <BadgePercent className="h-5 w-5" />
                        <span>Deals</span>
                    </Link>

                    <Link
                        href="/gaming-gear"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                    >
                        <Gamepad2 className="h-5 w-5" />
                        <span>Gaming Gear</span>
                    </Link>
                </div>

                {/* CTA */}
                <Link
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                >
                    <Button className="mt-6 h-12 w-full rounded-2xl text-base font-semibold">
                        Shop Now
                    </Button>
                </Link>
            </aside>
        </>
    );
}