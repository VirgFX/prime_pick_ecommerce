"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                hover:bg-muted
            "
        >
            <ArrowLeft size={16} />
            Go Back
        </button>
    );
}