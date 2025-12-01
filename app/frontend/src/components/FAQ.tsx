"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const faqs = [
        {
            question: "How accurate is the voice recognition?",
            answer: "We use state-of-the-art ASR models that are fine-tuned for conversational speech. It handles accents, pauses, and corrections naturally."
        },
        {
            question: "Can I edit the answers before submitting?",
            answer: "Absolutely. You get a full review screen where you can manually edit any field or just speak to correct it."
        },
        {
            question: "Does it work on mobile?",
            answer: "Yes! It's built mobile-first. It works directly in the browser with no app download required."
        },
        {
            question: "Is my data secure?",
            answer: "We use enterprise-grade encryption for all data in transit and at rest. We do not train our models on your private form data."
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 font-serif">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
            >
                <span className="text-xl font-medium">{question}</span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-muted-foreground text-lg leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
