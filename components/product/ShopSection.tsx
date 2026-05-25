import ProductGrid from "./ProductGrid";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import { Store } from "lucide-react";

import {
    getProducts,
    getCategories,
} from "@/lib/products";

const PAGE_SIZE = 8;

interface ShopSectionProps {
    page?: number;
}

export default async function ShopSection({ page = 1 }: ShopSectionProps) {

    const allProducts = await getProducts();
    const categories = await getCategories();

    const totalPages = Math.ceil(allProducts.length / PAGE_SIZE);
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const products = allProducts.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    );

    return (
        <section id="shop" className="space-y-8">

            <div className="space-y-3 border-b pb-8">
                <div className="flex items-center gap-3">
                    <Store className="h-8 w-8" />
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Popular Items
                    </h1>
                </div>
                <p className="max-w-2xl text-muted-foreground">
                    Browse premium gaming electronics, accessories, and high-performance gear built for gaming and productivity.
                </p>
            </div>

            <CategoryFilter
                categories={categories}
            />

            <ProductGrid
                products={products}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
            />

        </section>
    );
}