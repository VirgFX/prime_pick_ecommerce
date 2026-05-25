import Link from "next/link";
import Image from "next/image";
import { getCategoriesWithImages } from "@/lib/products";
import { LayoutGrid, ArrowRight } from "lucide-react";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    Keyboards: "Mechanical, membrane, and wireless keyboards for every setup.",
    Mice: "Precision gaming mice and ergonomic office options.",
    Monitors: "High refresh rate and high-resolution displays.",
    Headsets: "Immersive audio for gaming and communication.",
    Controllers: "Console and PC controllers for every genre.",
    Chairs: "Ergonomic gaming and office chairs for long sessions.",
    Desks: "Gaming desks and workstations built for performance.",
};

export default async function CategoriesPage() {
    const categories = await getCategoriesWithImages();

    return (
        <div className="min-h-screen space-y-12 py-10">

            <div className="space-y-3 border-b pb-8">
                <div className="flex items-center gap-3">
                    <LayoutGrid className="h-8 w-8" />
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Categories
                    </h1>
                </div>
                <p className="max-w-2xl text-muted-foreground">
                    Browse all product categories. Find exactly what you need for your gaming or productivity setup.
                </p>
            </div>

            <div className="flex flex-wrap gap-6 rounded-2xl border bg-card p-6">
                <div>
                    <p className="text-2xl font-bold">{categories.length}</p>
                    <p className="text-sm text-muted-foreground">Total Categories</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                    <p className="text-2xl font-bold">—</p>
                    <p className="text-sm text-muted-foreground">New This Month</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                    <p className="text-2xl font-bold">—</p>
                    <p className="text-sm text-muted-foreground">On Sale</p>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map(({ category, image }) => (
                    <Link
                        key={category}
                        href={`/shop?category=${category}`}
                        className="group flex flex-col justify-between gap-0 rounded-2xl border bg-card overflow-hidden transition hover:border-foreground hover:shadow-md"
                    >
                        <div className="relative h-48 w-full bg-muted">
                            {image ? (
                                <Image
                                    src={image}
                                    alt={category}
                                    fill
                                    className="object-contain p-4 transition group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                                    No image
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col justify-between gap-4 p-6">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold">{category}</h2>
                                <p className="text-sm text-muted-foreground">
                                    {CATEGORY_DESCRIPTIONS[category] ?? "Explore products in this category."}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                Browse {category}
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="rounded-2xl border border-dashed bg-muted/40 p-10 text-center text-muted-foreground">
                [ Featured Category Banner — TBD ]
            </div>

        </div>
    );
}
