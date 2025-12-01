export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Speak",
            description: "The user answers questions naturally using their voice."
        },
        {
            step: "02",
            title: "Process",
            description: "AI transcribes audio and extracts structured data."
        },
        {
            step: "03",
            title: "Review",
            description: "User verifies the data and makes quick edits if needed."
        }
    ];

    return (
        <section className="py-24 bg-secondary/30 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-muted-foreground text-lg">From speech to structured data in seconds.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    {steps.map((item, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-lg shadow-primary/10 bg-background">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground max-w-xs">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
