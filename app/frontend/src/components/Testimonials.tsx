"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        { quote: "It feels like magic. I just spoke and it filled everything.", author: "Sarah J., Event Planner" },
        { quote: "Finally, a form tool that doesn't feel like 1999.", author: "Mark T., Developer" },
        { quote: "Our intake time dropped by 60% immediately.", author: "Dr. Emily R., Clinic Director" },
        { quote: "The voice recognition is shockingly accurate.", author: "James L., Field Tech" },
        { quote: "My clients actually enjoy giving feedback now.", author: "Lisa M., Consultant" },
    ];

    return (
        <section className="py-16 overflow-hidden bg-secondary/20">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl font-bold font-serif">Loved by early adopters</h2>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-8">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="inline-block w-[400px] p-8 rounded-2xl bg-card soft-card whitespace-normal"
                        >
                            <p className="text-lg mb-6 leading-relaxed">"{item.quote}"</p>
                            <p className="text-sm font-bold text-muted-foreground">— {item.author}</p>
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
}
