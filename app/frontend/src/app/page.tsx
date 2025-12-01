import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} LAYR Forms. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
