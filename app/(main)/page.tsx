import HeroSection from "@/components/pages/HeroSection";
import ShopPage from "@/components/pages/ShopSection";

async function getProducts() {
    const res = await fetch(
        "http://localhost:3000/api/products",
        {
            cache: "no-store",
        }
    );

    return res.json();
}

export default async function Home() {

    const products = await getProducts();

  return (
      <main>
          <HeroSection products={products} />
          <ShopPage/>
      </main>
  );
}
