"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Mic, Sparkles, Zap, FileCheck } from "lucide-react";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function Features() {
    const features = [
        {
            title: "Create by speaking",
            description: "Just describe the form you need, and we'll build it instantly. No drag-and-drop, no complex menus. Just your voice.",
            icon: <Mic className="w-12 h-12 text-primary" />,
            className: "md:col-span-2",
        },
        {
            title: "Fill by speaking",
            description: "Your users can answer naturally. No typing required.",
            icon: <Sparkles className="w-12 h-12 text-primary" />,
            className: "md:col-span-1",
        },
        {
            title: "Real-time updates",
            description: "Watch the form fill itself as you speak. It feels like magic.",
            icon: <Zap className="w-12 h-12 text-primary" />,
            className: "md:col-span-1",
        },
        {
            title: "Clean data",
            description: "Get structured, perfect answers that you can edit before submitting. We handle the messy part of transcription for you.",
            icon: <FileCheck className="w-12 h-12 text-primary" />,
            className: "md:col-span-2",
        },
    ];

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Forms that feel like conversations.</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        It removes 95% of the friction in form filling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "bg-card p-10 rounded-3xl soft-card hover:shadow-lg transition-all duration-300 group",
                                feature.className
                            )}
                        >
                            <div className="mb-8 group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 font-serif">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
