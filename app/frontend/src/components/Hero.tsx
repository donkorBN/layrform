import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">Voice-Native Forms are here</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                        Forms that listen, <br />
                        <span className="text-primary">literally.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        The fastest, most human way to fill and build forms.
                        Speak naturally, and let AI handle the structure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#"
                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all font-medium"
                        >
                            View Demo
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />
        </section>
    );
}
