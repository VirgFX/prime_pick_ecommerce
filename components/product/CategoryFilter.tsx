"use client";

import {
    useRouter,
    useSearchParams,
    usePathname,
} from "next/navigation";

import { useTransition } from "react";

interface CategoryFilterProps {
    categories: string[];
}

export default function CategoryFilter({categories,}: CategoryFilterProps) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [isPending, startTransition] =
        useTransition();

    const currentCategory =
        searchParams.get("category") || "All";

    function handleCategory(category: string) {

        const params =
            new URLSearchParams(
                searchParams.toString()
            );

        if (category === "All") {
            params.delete("category");
        } else {
            params.set(
                "category",
                category
            );
        }

        const targetPath =
            pathname === "/"
                ? "/shop"
                : pathname;

        startTransition(() => {
            router.replace(
                `${targetPath}?${params.toString()}`
            );
        });
    }

    return (
        <div
            className={`flex flex-wrap gap-3 ${
                isPending
                    ? "opacity-70"
                    : ""
            }`}
        >

            <button
                onClick={() =>
                    handleCategory("All")
                }
                className={`
                    rounded-xl px-4 py-2 text-sm font-medium transition
                    ${
                    currentCategory === "All"
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "border hover:bg-muted"
                }
                `}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() =>
                        handleCategory(
                            category
                        )
                    }
                    className={`
                        rounded-xl px-4 py-2 text-sm font-medium transition
                        ${
                        currentCategory === category
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "border hover:bg-muted"
                    }
                    `}
                >
                    {category}
                </button>
            ))}

        </div>
    );
}