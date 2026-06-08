import { Service } from "./Service";
import { services } from "./constants";

export function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 flex flex-col items-start gap-4">
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="h-px w-6 sm:w-10 bg-rose" />
            <span className="text-rose text-sm font-medium uppercase sm:tracking-[0.3em]">
              What we offer
            </span>
          </div>
          <h2 className="font-bebas text-secondary-foreground text-5xl sm:text-7xl uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground">
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
