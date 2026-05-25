import { prisma } from "@/lib/prisma";

export async function getProducts(
    category?: string
) {
    const products = await prisma.product.findMany({
        where: category
            ? {
                category,
            }
            : undefined,

        orderBy: {
            createdAt: "desc",
        },
    });

    return products;
}

export async function getCategories() {
    const categories =
        await prisma.product.findMany({
            select: {
                category: true,
            },

            distinct: ["category"],
        });

    return categories.map(
        (item) => item.category
    );
}

export async function getFlashDeals() {
    const categories = ["Gaming Mouse", "Gaming Keyboard", "Gaming Headset", "Gaming Audio"];
    const products = await Promise.all(
        categories.map((category) =>
            prisma.product.findFirst({ where: { category } })
        )
    );
    return products.filter((p): p is NonNullable<typeof p> => p !== null);
}

export async function getCategoriesWithImages() {
    const categories = await prisma.product.findMany({
        select: { category: true },
        distinct: ["category"],
    });

    const withImages = await Promise.all(
        categories.map(async ({ category }) => {
            const product = await prisma.product.findFirst({
                where: { category },
                select: { image: true },
            });
            return { category, image: product?.image ?? "" };
        })
    );

    return withImages;
}