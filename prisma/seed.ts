import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.product.deleteMany();

    await prisma.product.createMany({
        data: [
            {
                name: "Razer Viper V3 Pro",
                description:
                    "Ultra-lightweight wireless esports gaming mouse with advanced optical sensors, ultra-low latency, and ergonomic performance for competitive gaming.",
                price: 8990,
                stock: 25,
                image: "/products/razer-viper-v3-pro.jpg",
                category: "Gaming Mouse",
            },

            {
                name: "SteelSeries Apex Pro TKL",
                description:
                    "Premium tenkeyless mechanical gaming keyboard featuring adjustable OmniPoint switches, RGB illumination, and aircraft-grade aluminum build.",
                price: 12990,
                stock: 18,
                image: "/products/steelseries-apex-pro-tkl.jpg",
                category: "Gaming Keyboard",
            },

            {
                name: "Logitech G Pro X Superlight 2",
                description:
                    "Professional-grade ultra-light wireless gaming mouse engineered for esports precision, speed, and extended battery life.",
                price: 9990,
                stock: 20,
                image: "/products/logitech-gpro-superlight2.jpg",
                category: "Gaming Mouse",
            },

            {
                name: "ASUS ROG Strix Scope II 96",
                description:
                    "Compact premium gaming keyboard with hot-swappable switches, sound-dampening foam, customizable RGB, and ultra-responsive keystrokes.",
                price: 11490,
                stock: 12,
                image: "/products/rog-strix-scope-ii-96.jpg",
                category: "Gaming Keyboard",
            },

            {
                name: "HyperX Cloud III Wireless",
                description:
                    "Premium wireless gaming headset with immersive DTS spatial audio, memory foam ear cushions, and crystal-clear detachable microphone.",
                price: 8490,
                stock: 30,
                image: "/products/hyperx-cloud-3-wireless.jpg",
                category: "Gaming Headset",
            },

            {
                name: "Samsung Odyssey G6 27",
                description:
                    "27-inch QHD curved gaming monitor with 240Hz refresh rate, ultra-fast response time, HDR support, and vibrant gaming visuals.",
                price: 28990,
                stock: 10,
                image: "/products/samsung-odyssey-g6.jpg",
                category: "Gaming Monitor",
            },

            {
                name: "Elgato Stream Deck MK2",
                description:
                    "Professional streaming controller with customizable LCD keys designed for streamers, creators, and advanced gaming setups.",
                price: 9990,
                stock: 16,
                image: "/products/elgato-stream-deck-mk2.jpg",
                category: "Streaming Gear",
            },

            {
                name: "Sony INZONE Buds",
                description:
                    "Low-latency wireless gaming earbuds with immersive 360 spatial sound, long battery life, and premium comfort for competitive gaming.",
                price: 11990,
                stock: 22,
                image: "/products/sony-inzone-buds.jpg",
                category: "Gaming Audio",
            },

            {
                name: "Secretlab TITAN Evo",
                description:
                    "Luxury ergonomic gaming chair with premium leatherette finish, adaptive lumbar support, and magnetic memory foam head pillow.",
                price: 34990,
                stock: 8,
                image: "/products/secretlab-titan-evo.jpg",
                category: "Gaming Chair",
            },

            {
                name: "Corsair XENEON Flex 45WQHD240",
                description:
                    "45-inch flexible OLED gaming monitor with immersive ultrawide display, 240Hz refresh rate, and exceptional color accuracy.",
                price: 119990,
                stock: 4,
                image: "/products/corsair-xeneon-flex.jpg",
                category: "Gaming Monitor",
            },
        ],
    });

    console.log("Premium gaming products seeded successfully.");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });