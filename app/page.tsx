import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { HeroSplit } from "@/components/heroes/HeroSplit";
import { ServiceGridClassic } from "@/components/sections/ServiceGridClassic";
import { CTASection } from "@/components/sections/CTASection";
import { FooterCompact } from "@/components/footers/FooterCompact";

export default function Home() {
  return (
    <main className="pt-20">
      <NavbarClassic />
      <HeroSplit />
      <ServiceGridClassic />
      <CTASection />
      <FooterCompact />
    </main>
  );
}