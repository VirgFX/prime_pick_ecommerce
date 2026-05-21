"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    return (
        <div
            className={`
        group flex items-center overflow-hidden rounded-full
        border border-border bg-background transition-all duration-300
        ${search ? "w-64" : "w-11 hover:w-64"}
      `}
        >
            {/* Search Button */}
            <Button
                variant="ghost"
                size="icon"
                className="shrink-0 rounded-full"
                aria-label="Search"
            >
                <Search className="h-5 w-5" />
            </Button>

            {/* Input */}
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent pr-4 text-sm outline-none placeholder:text-muted-foreground"
            />
        </div>
    );
}