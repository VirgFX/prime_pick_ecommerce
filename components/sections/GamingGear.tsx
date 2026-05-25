import { Gamepad2, Cpu, Headphones, Monitor, Keyboard } from "lucide-react";
import { getProducts } from "@/lib/products";
import ProductGrid from "@/components/product/ProductGrid";

const PAGE_SIZE = 8;

export default async function GamingGear() {
    const allProducts = await getProducts();
    const products = allProducts.slice(0, PAGE_SIZE);

    return (
        <div className="min-h-screen space-y-12 py-10">

            <div className="space-y-3 border-b pb-8">
                <div className="flex items-center gap-3">
                    <Gamepad2 className="h-8 w-8" />
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Gaming Gear
                    </h1>
                </div>
                <p className="max-w-2xl text-muted-foreground">
                    High-performance peripherals, setups, and accessories built for serious gamers.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { icon: <Cpu className="h-5 w-5" />, label: "High Performance", sub: "Pro-grade hardware" },
                    { icon: <Monitor className="h-5 w-5" />, label: "High Refresh Rate", sub: "Up to 360Hz displays" },
                    { icon: <Headphones className="h-5 w-5" />, label: "Immersive Audio", sub: "Surround sound headsets" },
                    { icon: <Keyboard className="h-5 w-5" />, label: "Precision Input", sub: "Low-latency peripherals" },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="flex items-start gap-3 rounded-2xl border bg-card p-5"
                    >
                        <div className="mt-0.5 text-muted-foreground">{item.icon}</div>
                        <div>
                            <p className="font-semibold">{item.label}</p>
                            <p className="text-sm text-muted-foreground">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Featured Gear</h2>
                    <span className="text-sm text-muted-foreground">{allProducts.length} products</span>
                </div>
                <ProductGrid products={products} />
            </div>

            <div className="rounded-2xl border border-dashed bg-muted/40 p-10 text-center text-muted-foreground">
                [ Setup Builder — pick components and see your full rig — TBD ]
            </div>

        </div>
    );
}
