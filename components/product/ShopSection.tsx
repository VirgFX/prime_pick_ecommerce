import ProductGrid from "./ProductGrid";
import CategoryFilter from "./CategoryFilter";

import {
    getProducts,
    getCategories,
} from "@/lib/products";

export default async function ShopSection() {

    const products =
        await getProducts();

    const categories =
        await getCategories();

    return (
        <section className="space-y-8">

            <div>
                <h2 className="text-3xl font-bold">
                    Popular Items
                </h2>
            </div>

            <CategoryFilter
                categories={categories}
            />

            <ProductGrid
                products={products}
            />

        </section>
    );
}