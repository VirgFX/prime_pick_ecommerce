import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
    return (
        <section className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-md space-y-6 rounded-3xl border bg-background p-8 shadow-lg">

                {/* Heading */}
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">
                        Create Account
                    </h1>

                    <p className="text-muted-foreground">
                        Join PrimePick today
                    </p>
                </div>

                <SignUpForm />

            </div>
        </section>
    );
}