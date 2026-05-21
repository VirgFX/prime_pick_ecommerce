import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function HeroSection () {
    return (
        <section className="grid min-h-[90vh] items-center gap-10 lg:grid-cols-2">

            {/* Left Side */}
            <div className="space-y-8">

                <div className="space-y-6">
                    <h1 className="font-gaming text-5xl font-bold leading-tight text-foreground transition-colors duration-300 lg:text-7xl">
                        GADGET FOR <br /> REAL WINNERS
                    </h1>

                    <p className="max-w-xl text-lg leading-8 text-muted-foreground transition-colors duration-300">
                        Level up your setup with premium gaming gear, powerful
                        electronics, and next-gen tech — carefully picked for gamers,
                        creators, and performance enthusiasts.
                    </p>
                </div>

                <Button
                    size="lg"
                    className="rounded-xl bg-black px-10 py-6 text-lg font-semibold text-white hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                    Shop Now
                </Button>
            </div>

            {/* Right Side */}
            <div className="relative flex h-125 w-full max-w-130 items-center justify-center rounded-[40px] bg-zinc-200 dark:bg-zinc-300">

                {/* Main Image */}
                <Image
                    src="/headset.png"
                    alt="Gaming Headset"
                    width={500}
                    height={500}
                    className="h-105 w-auto object-contain"
                    priority
                />

                {/* Thumbnail Images */}
                <div className="absolute -bottom-25 -right-10 flex gap-6">

                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4">
                        <Image
                            src="/headset.png"
                            alt="Thumbnail"
                            width={112}
                            height={112}
                            className="h-28 w-28 object-contain"
                        />
                    </div>

                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4">
                        <Image
                            src="/headset.png"
                            alt="Thumbnail"
                            width={112}
                            height={112}
                            className="h-28 w-28 object-contain"
                        />
                    </div>

                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4">
                        <Image
                            src="/headset.png"
                            alt="Thumbnail"
                            width={112}
                            height={112}
                            className="h-28 w-28 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
