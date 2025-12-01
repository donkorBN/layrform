import { createClient } from '@/utils/supabase/server';
import { signout } from '@/app/actions/auth';
import Link from 'next/link';
import * as motion from "framer-motion/client";

export default async function Hero() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Auth Status Indicator */}
            <div className="absolute top-4 right-4 z-50">
                {user ? (
                    <div className="flex items-center gap-4 bg-card/80 backdrop-blur-md p-2 rounded-full border border-border shadow-sm">
                        <span className="text-xs font-medium px-2 text-muted-foreground">
                            {user.email}
                        </span>
                        <form action={signout}>
                            <button className="text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full transition-colors">
                                Sign out
                            </button>
                        </form>
                    </div>
                ) : (
                    <Link href="/login" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        Log in
                    </Link>
                )}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/50 text-primary text-sm font-medium mb-6 border border-primary/10">
                            ✨ The future of data collection
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight font-serif">
                            Build and fill forms <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                by talking.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Stop typing. Just speak. We turn your voice into structured forms,
                        instant summaries, and actionable data. It's magic.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20 w-full sm:w-auto">
                            Try a Voice Form
                        </button>
                        <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-medium text-lg hover:bg-secondary/80 transition-all hover:scale-105 w-full sm:w-auto">
                            Create a Form
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        </section>
    );
}
