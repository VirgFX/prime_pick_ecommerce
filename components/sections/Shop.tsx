import ShopSection from "@/components/product/ShopSection";

interface ShopPageProps {
    page?: number;
}

export default function ShopPage({ page = 1 }: ShopPageProps) {
    return (
        <div className="min-h-screen py-10">
            <ShopSection page={page} />
        </div>
    );
}
