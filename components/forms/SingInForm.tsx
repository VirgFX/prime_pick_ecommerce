"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    signInSchema,
    SignInFormValues,
} from "@/validators/auth";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {signIn} from "next-auth/react";

export default function SignInForm() {

    const [showPassword, setShowPassword] =
        useState(false);

    const form = useForm<SignInFormValues>({
        resolver: zodResolver(signInSchema),

        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(
        values: SignInFormValues
    ) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                        signIn("google", {
                            callbackUrl: "/",
                        })
                    }
                >
                    Continue with Google
                </Button>

                {/* EMAIL */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
                                    type="email"
                                    aria-label="email"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* PASSWORD */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Confirm your password"
                                        aria-label="password"
                                        className="pr-10"
                                        {...field}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (prev) => !prev
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting
                        ? "Signing In..."
                        : "Sign In"}
                </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}

                <Link
                    href="/sign-up"
                    className="font-medium text-foreground hover:underline"
                >
                    Sign Up
                </Link>
            </p>
        </Form>
    );
}