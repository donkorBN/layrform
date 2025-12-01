"use client";

import { motion } from "framer-motion";
import { Stethoscope, HardHat, MessageSquare, Calendar } from "lucide-react";

export default function UseCases() {
    const cases = [
        {
            title: "Patient Intake",
            description: "Doctors and nurses can dictate notes directly into structured forms during rounds.",
            tag: "Healthcare",
            icon: <Stethoscope className="w-6 h-6 mb-4 text-primary" />
        },
        {
            title: "Field Reports",
            description: "Technicians can file incident reports hands-free while inspecting equipment.",
            tag: "Operations",
            icon: <HardHat className="w-6 h-6 mb-4 text-primary" />
        },
        {
            title: "Client Feedback",
            description: "Capture authentic, detailed feedback by letting customers speak their mind.",
            tag: "Marketing",
            icon: <MessageSquare className="w-6 h-6 mb-4 text-primary" />
        },
        {
            title: "Event Registration",
            description: "Speed up check-ins by simply asking attendees for their details.",
            tag: "Events",
            icon: <Calendar className="w-6 h-6 mb-4 text-primary" />
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Built for every industry</h2>
                    <p className="text-muted-foreground text-lg">Wherever there's a form, voice makes it better.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-colors cursor-default"
                        >
                            <div className="flex justify-between items-start">
                                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    {item.tag}
                                </span>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
