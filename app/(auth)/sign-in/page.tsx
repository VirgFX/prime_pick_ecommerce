import SignInForm from "@/components/forms/SingInForm";


export default function SignInPage() {
    return (
        <section className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-md space-y-6 rounded-3xl border bg-background p-8 shadow-lg">

                {/* Heading */}
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="text-muted-foreground">
                        Sign in to your PrimePick account
                    </p>
                </div>

                {/* Form */}
                <SignInForm />

            </div>
        </section>
    );
}