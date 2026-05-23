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