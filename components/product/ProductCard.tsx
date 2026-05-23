import Image from "next/image";

import { Product } from "@/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({product,}: ProductCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border bg-background transition hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="space-y-3 p-4">
                <div>
                    <p className="text-sm text-muted-foreground">
                        {product.category}
                    </p>

                    <h2 className="line-clamp-1 text-lg font-semibold">
                        {product.name}
                    </h2>
                </div>

                <p className="line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold">
                        ₱{product.price.toLocaleString()}
                    </span>

                    <span className="text-sm text-muted-foreground">
                        {product.stock} left
                    </span>
                </div>

                <button className="w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}