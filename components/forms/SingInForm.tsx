"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    signInSchema,
    SignInFormValues,
} from "@/lib/validations/auth";

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

export default function SignInForm() {
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
                                <Input
                                    placeholder="Enter your password"
                                    type="password"
                                    aria-label="password"
                                    {...field}
                                />
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