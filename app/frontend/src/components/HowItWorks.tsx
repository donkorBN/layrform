export default function HowItWorks() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">The Experience</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div>
                            <div className="text-primary font-bold text-lg mb-2">01. Relief</div>
                            <p className="text-muted-foreground">
                                "Finally, a form that doesn’t stress me out."
                            </p>
                        </div>
                        <div>
                            <div className="text-primary font-bold text-lg mb-2">02. Freedom</div>
                            <p className="text-muted-foreground">
                                "I can just say what I want."
                            </p>
                        </div>
                        <div>
                            <div className="text-primary font-bold text-lg mb-2">03. Connection</div>
                            <p className="text-muted-foreground">
                                "This feels like messaging a human."
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 p-8 bg-secondary/50 rounded-3xl inline-block text-left max-w-2xl">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">AI</div>
                            <div className="bg-card p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
                                Whenever you’re ready, just say your answer.
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-6 flex-row-reverse">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">Me</div>
                            <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-none shadow-sm text-sm">
                                I'm looking to book a photography session for next Tuesday.
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">AI</div>
                            <div className="bg-card p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
                                Okay, got it. I've filled that in for you. Want to double-check anything?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
