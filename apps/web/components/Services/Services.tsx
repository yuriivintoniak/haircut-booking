import { Service } from "./Service";
import { services } from "./constants";

export function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex flex-col items-start gap-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="h-[3px] w-8 sm:w-12 bg-secondary-foreground" />
            <h2 className="font-display text-secondary-foreground text-5xl sm:text-7xl uppercase tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="text-muted-foreground sm:text-lg">
            Every service is delivered with precision and care by our expert team.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Service key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
