import { siteConfig } from "@/lib/site.config";
import Link from "next/link";
export function FooterCompact() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h3 className="font-bold text-primary text-lg">{siteConfig.business.name}</h3>
          <p className="text-sm text-muted mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-muted">
          {siteConfig.nav.map(link => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
