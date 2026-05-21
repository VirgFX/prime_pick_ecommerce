"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    signUpSchema,
    SignUpFormValues,
} from "@/lib/validations/auth";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

export default function SignUpForm() {
    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),

        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    async function onSubmit(
        values: SignUpFormValues
    ) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {/* NAME */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Enter your name"
                                    aria-label="email"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* EMAIL */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
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
                                    type="password"
                                    placeholder="Enter your password"
                                    aria-label="password"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* CONFIRM PASSWORD */}
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Confirm Password
                            </FormLabel>

                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Confirm your password"
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
                        ? "Creating Account..."
                        : "Create Account"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="font-medium text-foreground hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </Form>
    );
}