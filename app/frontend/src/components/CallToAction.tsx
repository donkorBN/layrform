"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to talk?</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Start building forms that feel like conversations today.
                    </p>

                    <Link
                        href="#"
                        className="inline-flex px-10 py-5 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all hover:scale-105 shadow-xl text-lg"
                    >
                        Get Started for Free
                    </Link>
                </motion.div>
            </div>

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-secondary/50 to-transparent -z-10" />
        </section>
    );
}
