import Home from "@/components/sections/Home";
import Shop from "@/components/sections/Shop";
import Categories from "@/components/sections/Categories";
import Deals from "@/components/sections/Deals";
import GamingGear from "@/components/sections/GamingGear";
import { getProducts, getFlashDeals } from "@/lib/products";

interface HomeProps {
    searchParams?: Promise<{
        page?: string;
    }>;
}

export default async function HomePage({ searchParams }: HomeProps) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const [products, flashDeals] = await Promise.all([
        getProducts(),
        getFlashDeals(),
    ]);

    return (
        <main>

            <section id="home">
                <Home products={products} />
            </section>

            <section id="shop">
                <Shop page={page} />
            </section>

            <section id="categories">
                <Categories />
            </section>

            <section id="deals">
                <Deals flashDeals={flashDeals} />
            </section>

            <section id="gaming-gear">
                <GamingGear />
            </section>

        </main>
    );
}