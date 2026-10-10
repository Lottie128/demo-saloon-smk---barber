import { siteConfig } from "@/lib/site.config";
import * as Icons from "lucide-react";
export function ServiceGridClassic() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Professional solutions designed for your success.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((svc: any) => {
            const Icon = (Icons as any)[svc.icon] || Icons.CheckCircle;
            return (
              <div key={svc.id} className="bg-surface p-8 rounded-2xl border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-6"><Icon className="text-accent" size={24}/></div>
                <h3 className="font-bold text-lg text-primary mb-3">{svc.title}</h3>
                <p className="text-muted leading-relaxed">{svc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
