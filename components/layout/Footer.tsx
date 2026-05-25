import Link from "next/link";
import {
    Gamepad2,
    Mail,
    MapPin,
    Phone,
    Globe,
    Camera,
    Play,
    Monitor,
    ArrowRight,
    ShieldCheck,
    Truck,
    RotateCcw,
    Headphones,
} from "lucide-react";

const SHOP_LINKS = [
    { name: "Home",        href: "/#hero" },
    { name: "Shop",        href: "/#shop" },
    { name: "Categories",  href: "/categories" },
    { name: "Deals",       href: "/deals" },
    { name: "Gaming Gear", href: "/gaming-gear" },
];

const SUPPORT_LINKS = [
    { name: "FAQ",              href: "#" },
    { name: "Contact Us",       href: "#" },
    { name: "Order Tracking",   href: "#" },
    { name: "Returns & Refunds",href: "#" },
    { name: "Warranty Policy",  href: "#" },
];

const LEGAL_LINKS = [
    { name: "Privacy Policy",   href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy",    href: "#" },
];

const SOCIAL = [
    { icon: <Globe   className="h-4 w-4" />, href: "#", label: "Twitter"   },
    { icon: <Camera  className="h-4 w-4" />, href: "#", label: "Instagram" },
    { icon: <Play    className="h-4 w-4" />, href: "#", label: "YouTube"   },
    { icon: <Monitor className="h-4 w-4" />, href: "#", label: "Twitch"    },
];

const PERKS = [
    { icon: <Truck       className="h-5 w-5" />, title: "Free Shipping",    sub: "On orders over ₱2,000"    },
    { icon: <RotateCcw   className="h-5 w-5" />, title: "Easy Returns",     sub: "30-day hassle-free returns" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Secure Payments",  sub: "100% protected checkout"   },
    { icon: <Headphones  className="h-5 w-5" />, title: "24/7 Support",     sub: "Always here to help"       },
];

const PAYMENT_METHODS = ["Visa", "Mastercard", "GCash", "Maya", "COD"];

export default function Footer() {
    return (
        <footer className="mt-20 border-t">

            {/* Perks bar */}
            <div className="grid gap-6 border-b py-10 sm:grid-cols-2 lg:grid-cols-4">
                {PERKS.map((perk) => (
                    <div key={perk.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-card">
                            {perk.icon}
                        </div>
                        <div>
                            <p className="font-semibold">{perk.title}</p>
                            <p className="text-sm text-muted-foreground">{perk.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-start justify-between gap-6 border-b py-10 sm:flex-row sm:items-center">
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Stay in the loop</h3>
                    <p className="text-sm text-muted-foreground">
                        Get the latest drops, exclusive deals, and gaming news delivered to your inbox.
                    </p>
                </div>
                <form className="flex w-full max-w-sm gap-2">
                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-10 w-full rounded-xl border bg-background pl-9 pr-4 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-foreground"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex h-10 items-center gap-1 rounded-xl bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90"
                    >
                        Subscribe
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </form>
            </div>

            {/* Main link grid */}
            <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

                {/* Brand column */}
                <div className="space-y-5">
                    <div className="flex items-center gap-2">
                        <Gamepad2 className="h-6 w-6" />
                        <span className="font-gaming text-xl font-bold">PrimePick</span>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Your go-to destination for premium gaming electronics, high-performance peripherals,
                        and everything you need to build the ultimate setup.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 shrink-0" />
                            <span>Metro Manila, Philippines</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 shrink-0" />
                            <span>+63 917 000 0000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 shrink-0" />
                            <span>support@primepick.ph</span>
                        </div>
                    </div>
                    {/* Socials */}
                    <div className="flex gap-2">
                        {SOCIAL.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border bg-card transition hover:bg-muted"
                            >
                                {s.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Quick links */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Navigation
                    </h4>
                    <ul className="space-y-3">
                        {SHOP_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm transition-colors hover:text-foreground text-muted-foreground"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Support
                    </h4>
                    <ul className="space-y-3">
                        {SUPPORT_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm transition-colors hover:text-foreground text-muted-foreground"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Legal
                    </h4>
                    <ul className="space-y-3">
                        {LEGAL_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm transition-colors hover:text-foreground text-muted-foreground"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Payment methods */}
                    <div className="pt-4 space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            We Accept
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {PAYMENT_METHODS.map((method) => (
                                <span
                                    key={method}
                                    className="rounded-lg border bg-card px-3 py-1 text-xs font-medium"
                                >
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-center justify-between gap-3 border-t py-6 text-sm text-muted-foreground sm:flex-row">
                <p>© {new Date().getFullYear()} PrimePick. All rights reserved.</p>
                <p>Built for gamers, by gamers. 🇵🇭</p>
            </div>

        </footer>
    );
}
