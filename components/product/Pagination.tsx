"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    function goToPage(page: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        router.replace(`${pathname}?${params.toString()}`);
    }

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-3">

            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="
                    inline-flex items-center gap-1
                    rounded-xl border px-3 py-2
                    text-sm font-medium transition
                    hover:bg-muted
                    disabled:cursor-not-allowed disabled:opacity-40
                "
            >
                <ChevronLeft size={16} />
                Previous
            </button>

            <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="
                    inline-flex items-center gap-1
                    rounded-xl border px-3 py-2
                    text-sm font-medium transition
                    hover:bg-muted
                    disabled:cursor-not-allowed disabled:opacity-40
                "
            >
                Next
                <ChevronRight size={16} />
            </button>

        </div>
    );
}
