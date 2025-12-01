"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="py-16 bg-secondary/20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground font-serif"
                    >
                        Build and fill forms <br />
                        <span className="text-primary italic">by talking.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        A warm AI that collects information for you — fast, simple, and human.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="#"
                            className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                        >
                            Try a Voice Form
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all font-medium"
                        >
                            Create a Form with Your Voice
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-8"
                    >
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
                            See how it works
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Soft Background Blob */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"
            />
        </section>
    );
}
