"use client";

import Image from "next/image";

import {
    signOut,
    useSession,
} from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export default function UserMenu() {
    const { data: session } =
        useSession();

    if (!session) {
        return (
            <Button>
                Sign In
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
            >
                <button className="flex items-center gap-2">
                    <Image
                        src={
                            session.user
                                ?.image ||
                            "/default-avatar.png"
                        }
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />

                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end"
            >
                <DropdownMenuItem>
                    My Account
                </DropdownMenuItem>

                <DropdownMenuItem>
                    Orders
                </DropdownMenuItem>

                <DropdownMenuItem>
                    Settings
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() =>
                        signOut()
                    }
                >
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}