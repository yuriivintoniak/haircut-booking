import { galleryItems } from "./constants";

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 flex flex-col items-start gap-4">
          <h2 className="font-bebas text-secondary-foreground text-5xl sm:text-7xl uppercase tracking-tight">
            Gallery
          </h2>
          <p className="text-muted-foreground">
            A glimpse into the TrimSync experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <figure
              key={item.title}
              aria-label={item.alt}
              className={`group relative overflow-hidden rounded-sm ${item.color} ${item.span}`}
            >
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out backdrop-blur-md bg-foreground/30 border-t border-background/10">
                <span className="text-background text-lg md:text-xl font-semibold leading-tight">
                  {item.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
