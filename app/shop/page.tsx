import ProductGrid from "@/components/product/ProductGrid";
import CategoryFilter from "@/components/product/CategoryFilter";

import {
    getProducts,
    getCategories,
} from "@/lib/products";
import BackButton from "@/components/product/BackButton";

interface ShopPageProps {
    searchParams?: Promise<{
        category?: string;
    }>;
}

export default async function ShopPage({searchParams,}: ShopPageProps) {

    const params = await searchParams;

    const category = params?.category;

    const products =
        await getProducts(category);

    const categories =
        await getCategories();

    return (
        <section className="mx-auto w-full max-w-400 px-4 py-10 sm:px-6 lg:px-10 lg:py-14">

            <div className="space-y-10">

                {/* Header */}
                <div className="space-y-5 border-b pb-8">

                    <BackButton/>

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
                            {products.length} products
                        </span>

                    </div>

                    <CategoryFilter
                        categories={categories}
                    />

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

                    <ProductGrid
                        products={products}
                    />

                </div>

            </div>

        </section>
    );
}