import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function CTASection() {
  return (
    <section className="bg-primary text-secondary py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to get started?</h2>
        <p className="text-lg text-secondary/70 mb-10">Contact our team today to learn more.</p>
        <Link href="/contact" className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all gap-2">
          Contact Us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
