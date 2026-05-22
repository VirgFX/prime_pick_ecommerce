"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Product } from "@/types";

interface HeroSectionProps {
    products: Product[];
}

export default function HeroSection({products,}: HeroSectionProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    const activeProduct = products[activeIndex];

    const carouselProducts = useMemo(() => {
        return [...products, ...products];
    }, [products]);

    useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex((prev) =>
                prev === products.length - 1 ? 0 : prev + 1
            );

        }, 5000);

        return () => clearInterval(interval);

    }, [products.length]);

    return (
        <section className="relative grid min-h-[90vh] items-center gap-10 overflow-hidden lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="space-y-8">

                <div className="space-y-6">

                    <motion.h1
                        key={activeProduct.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="font-gaming text-5xl font-bold leading-tight text-foreground lg:text-7xl"
                    >
                        GADGET FOR <br /> REAL WINNERS
                    </motion.h1>

                    <motion.p
                        key={activeProduct.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-xl text-lg leading-8 text-muted-foreground"
                    >
                        {activeProduct.description}
                    </motion.p>

                    <motion.div
                        key={activeProduct.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-1"
                    >
                        <p className="text-sm uppercase tracking-widest text-muted-foreground">
                            {activeProduct.category}
                        </p>

                        <h2 className="text-3xl font-bold">
                            {activeProduct.name}
                        </h2>

                        <p className="text-2xl font-semibold">
                            ₱{activeProduct.price.toLocaleString()}
                        </p>
                    </motion.div>
                </div>

                <Button
                    size="lg"
                    className="rounded-xl bg-black px-10 py-6 text-lg font-semibold text-white hover:bg-zinc-900 dark:bg-white dark:text-black"
                >
                    Shop Now
                </Button>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex h-130 w-full max-w-140 items-center justify-center overflow-hidden rounded-[40px] bg-zinc-200 dark:bg-zinc-300">

                {/* MAIN PRODUCT */}
                <AnimatePresence mode="wait">

                    <motion.div
                        key={activeProduct.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src={activeProduct.image}
                            alt={activeProduct.name}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain p-10"
                        />
                    </motion.div>

                </AnimatePresence>

                {/* CAROUSEL */}
                <div className="absolute bottom-0 w-full overflow-hidden pb-6">

                    <motion.div
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                        className="flex w-max gap-6 px-6"
                    >

                        {carouselProducts.map((product, index) => {

                            const isActive =
                                index % products.length === activeIndex;

                            return (
                                <motion.div
                                    key={`${product.id}-${index}`}
                                    animate={{
                                        scale: isActive ? 1.1 : 1,
                                        y: isActive ? -10 : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className={`relative flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border p-4 backdrop-blur-xl ${
                                        isActive
                                            ? "border-white bg-zinc-900 shadow-2xl"
                                            : "border-zinc-700 bg-zinc-900/90"
                                    }`}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="128px"
                                        className="object-contain p-3"
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}