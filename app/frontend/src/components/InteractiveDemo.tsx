"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mic, FileText } from "lucide-react";

export default function InteractiveDemo() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-secondary/20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">See it in action</h2>
                    <p className="text-muted-foreground text-lg">Watch how voice turns into structured data instantly.</p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Voice Input Side */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                        <div className="relative bg-card p-8 rounded-3xl shadow-sm border border-border/50 min-h-[300px] flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6 text-muted-foreground text-sm uppercase tracking-wider font-medium">
                                <Mic className="w-4 h-4 text-red-500 animate-pulse" />
                                Live Transcript
                            </div>
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-2xl font-medium leading-relaxed"
                            >
                                {step === 0 && '"Hi, I need to register for the design workshop on Friday."'}
                                {step === 1 && '"My name is Sarah Jenkins and my email is sarah@example.com."'}
                                {step === 2 && '"I will be bringing a guest with me."'}
                                {step === 3 && '"That is all, thank you!"'}
                            </motion.div>
                        </div>
                    </div>

                    {/* Structured Data Side */}
                    <div className="relative">
                        <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 min-h-[300px] flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-2 text-muted-foreground text-sm uppercase tracking-wider font-medium">
                                <FileText className="w-4 h-4 text-green-500" />
                                Extracted Data
                            </div>

                            <div className="space-y-4">
                                <Field label="Event Type" value={step >= 0 ? "Design Workshop" : ""} active={step === 0} />
                                <Field label="Date" value={step >= 0 ? "Friday" : ""} active={step === 0} />
                                <Field label="Name" value={step >= 1 ? "Sarah Jenkins" : ""} active={step === 1} />
                                <Field label="Email" value={step >= 1 ? "sarah@example.com" : ""} active={step === 1} />
                                <Field label="Guests" value={step >= 2 ? "1" : ""} active={step === 2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, value, active }: { label: string; value: string; active: boolean }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground font-medium">{label}</span>
            <div className={`h-10 rounded-lg border flex items-center px-3 transition-colors duration-500 ${active ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30'}`}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: value ? 1 : 0 }}
                    className="text-sm font-medium"
                >
                    {value}
                </motion.span>
            </div>
        </div>
    );
}
