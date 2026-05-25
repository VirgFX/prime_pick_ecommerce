import ProductGrid from "@/components/product/ProductGrid";
import CategoryFilter from "@/components/product/CategoryFilter";
import Pagination from "@/components/product/Pagination";

import {
    getProducts,
    getCategories,
} from "@/lib/products";
import BackButton from "@/components/product/BackButton";

const PAGE_SIZE = 8;

interface ShopPageProps {
    searchParams?: Promise<{
        category?: string;
        page?: string;
    }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {

    const params = await searchParams;

    const category = params?.category;
    const currentPage = Math.max(1, Number(params?.page) || 1);

    const allProducts = await getProducts(category);
    const totalPages = Math.ceil(allProducts.length / PAGE_SIZE);
    const products = allProducts.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    );

    const categories = await getCategories();

    return (
        <section className="mx-auto w-full max-w-400 px-4 py-10 sm:px-6 lg:px-10 lg:py-14">

            <div className="space-y-10">

                {/* Header */}
                <div className="space-y-5 border-b pb-8">

                    <BackButton />

                    <div className="space-y-3">

                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                            Popular Items
                        </h1>

                        <p className="max-w-2xl text-muted-foreground">
                            Browse premium gaming electronics,
                            accessories, and high-performance gear
                            built for gaming and productivity.
                        </p>

                    </div>

                </div>

                {/* Filter Section */}
                <div className="rounded-2xl border bg-card p-6">

                    <div className="mb-5 flex items-center justify-between">

                        <h2 className="font-semibold">
                            Categories
                        </h2>

                        <span className="text-sm text-muted-foreground">
                            {allProducts.length} products
                        </span>

                    </div>

                    <CategoryFilter categories={categories} />

                </div>

                {/* Product Section */}
                <div className="space-y-6">

                    <div className="flex items-center justify-between">

                        <h2 className="text-xl font-semibold">
                            Products
                        </h2>

                        {category && (
                            <p className="text-sm text-muted-foreground">
                                Showing: {category}
                            </p>
                        )}

                    </div>

                    <ProductGrid products={products} />

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />

                </div>

            </div>

        </section>
    );
}
