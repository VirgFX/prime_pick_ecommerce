import Image from "next/image";
import { BadgePercent, Clock, Tag, Zap, Gift } from "lucide-react";
import { Product } from "@/types";

const PLACEHOLDER_DEALS = [
    { label: "10% OFF", title: "Keyboards", desc: "All mechanical keyboards" },
    { label: "15% OFF", title: "Headsets", desc: "Pro gaming headsets" },
    { label: "20% OFF", title: "Mice", desc: "Wireless gaming mice" },
    { label: "Bundle", title: "Starter Pack", desc: "Keyboard + Mouse combo" },
];

const DISCOUNT = 0.2;

interface DealsProps {
    flashDeals: Product[];
}

export default function Deals({ flashDeals }: DealsProps) {
    return (
        <div className="min-h-screen space-y-12 py-10">

            <div className="space-y-3 border-b pb-8">
                <div className="flex items-center gap-3">
                    <BadgePercent className="h-8 w-8" />
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Deals & Offers
                    </h1>
                </div>
                <p className="max-w-2xl text-muted-foreground">
                    Limited-time offers, flash sales, and exclusive bundles. Don&apos;t miss out.
                </p>
            </div>

            <div className="flex items-center justify-between rounded-2xl border bg-card p-6">
                <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                        <p className="font-semibold">Flash Sale Ends In</p>
                        <p className="text-sm text-muted-foreground">[ Countdown timer — TBD ]</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {["00", "12", "45", "30"].map((val, i) => (
                        <div key={i} className="rounded-xl border bg-muted px-4 py-2 text-center">
                            <p className="text-xl font-bold">{val}</p>
                            <p className="text-xs text-muted-foreground">
                                {["Days", "Hrs", "Min", "Sec"][i]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold">Current Promotions</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {PLACEHOLDER_DEALS.map((deal) => (
                        <div
                            key={deal.title}
                            className="flex flex-col gap-3 rounded-2xl border bg-card p-5"
                        >
                            <span className="w-fit rounded-lg bg-foreground px-3 py-1 text-xs font-bold text-background">
                                {deal.label}
                            </span>
                            <div>
                                <p className="font-semibold">{deal.title}</p>
                                <p className="text-sm text-muted-foreground">{deal.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">Flash Deals</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {flashDeals.map((item) => {
                        const salePrice = Math.round(item.price * (1 - DISCOUNT));
                        return (
                            <div
                                key={item.id}
                                className="space-y-3 rounded-2xl border bg-card p-5"
                            >
                                <div className="relative aspect-square rounded-xl bg-muted">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain p-4"
                                    />
                                </div>
                                <p className="line-clamp-1 font-medium">{item.name}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold">
                                        ₱{salePrice.toLocaleString()}
                                    </span>
                                    <span className="text-sm text-muted-foreground line-through">
                                        ₱{item.price.toLocaleString()}
                                    </span>
                                </div>
                                <button className="w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black">
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <div className="mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">Bundle Deals</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    {["Starter Gaming Bundle", "Pro Streamer Bundle"].map((bundle) => (
                        <div
                            key={bundle}
                            className="flex items-center justify-between rounded-2xl border border-dashed bg-muted/40 p-8"
                        >
                            <div className="space-y-1">
                                <p className="font-semibold">{bundle}</p>
                                <p className="text-sm text-muted-foreground">[ Bundle content — TBD ]</p>
                            </div>
                            <Tag className="h-8 w-8 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-dashed bg-muted/40 p-10 text-center text-muted-foreground">
                [ Deal alert newsletter signup — TBD ]
            </div>

        </div>
    );
}
