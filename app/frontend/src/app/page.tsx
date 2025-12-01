import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import InteractiveDemo from "@/components/InteractiveDemo";
import UseCases from "@/components/UseCases";
import CallToAction from "@/components/CallToAction";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InteractiveDemo />
      <Features />
      <Comparison />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ />
      <CallToAction />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} LAYR Forms. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
