import Image from "next/image";
import { galleryItems } from "./constants";

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex flex-col items-start gap-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="h-[3px] w-8 sm:w-12 bg-secondary-foreground" />
            <h2 className="font-display text-secondary-foreground text-5xl sm:text-7xl uppercase tracking-tight">
              Gallery
            </h2>
          </div>
          <p className="text-muted-foreground sm:text-lg">
            A glimpse into the TrimSync experience.
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-12 auto-rows-[240] 2xs:auto-rows-[360px] xs:auto-rows-[240px] md:auto-rows-[280px] gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <figure
              key={item.title}
              aria-label={item.alt}
              className={`group relative overflow-hidden rounded-sm shadow-lg ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill={true}
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out backdrop-blur-sm bg-foreground/30 border-t border-background/10">
                <span className="text-background sm:text-lg font-medium leading-tight">
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
