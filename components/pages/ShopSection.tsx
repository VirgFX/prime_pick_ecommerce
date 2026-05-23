
import { getProducts } from "@/lib/products";
import ProductGrid from "@/components/shop/ProductGrid";

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">
                    Shop
                </h1>

                <p className="text-muted-foreground">
                    Browse premium gaming gear
                </p>
            </div>

            <ProductGrid products={products}/>
        </section>
    );
}