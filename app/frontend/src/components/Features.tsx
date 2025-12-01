export default function Features() {
    const features = [
        {
            title: "Voice Filling",
            description: "Users just speak. We transcribe and extract structured data in real-time.",
            icon: "🎤",
        },
        {
            title: "AI Creation",
            description: "Describe your form in plain English, and we'll build the schema for you.",
            icon: "✨",
        },
        {
            title: "Dynamic Logic",
            description: "Smart branching that adapts based on what the user says.",
            icon: "🔀",
        },
        {
            title: "Real-time UI",
            description: "Watch fields fill up instantly as you speak. Magic in action.",
            icon: "⚡",
        },
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
                    <p className="text-muted-foreground text-lg">Powerful features for the next generation of data collection.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
