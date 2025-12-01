"use client";

import { motion } from "framer-motion";

export default function Comparison() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Why switch?</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        The difference is in the feeling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Old Way */}
                    <div className="p-10 rounded-3xl bg-secondary/50 border border-transparent opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <h3 className="text-2xl font-bold mb-8 text-muted-foreground font-serif">Traditional Forms</h3>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-muted-foreground">
                                <span className="text-2xl">⌨️</span>
                                <span>Tedious typing on mobile</span>
                            </li>
                            <li className="flex items-center gap-4 text-muted-foreground">
                                <span className="text-2xl">🛑</span>
                                <span>Rigid, linear flow</span>
                            </li>
                            <li className="flex items-center gap-4 text-muted-foreground">
                                <span className="text-2xl">😓</span>
                                <span>Feels like homework</span>
                            </li>
                            <li className="flex items-center gap-4 text-muted-foreground">
                                <span className="text-2xl">📉</span>
                                <span>High drop-off rates</span>
                            </li>
                        </ul>
                    </div>

                    {/* New Way */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-card soft-card border-primary/20 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 bg-primary/10 rounded-bl-3xl text-primary font-bold text-sm">
                            THE FUTURE
                        </div>
                        <h3 className="text-2xl font-bold mb-8 text-foreground font-serif">LAYR Forms</h3>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">🗣️</span>
                                <span className="font-medium">Just speak naturally</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">🌊</span>
                                <span className="font-medium">Fluid, conversational flow</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">😌</span>
                                <span className="font-medium">Feels like a chat</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">🚀</span>
                                <span className="font-medium">Higher completion rates</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
