export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 flex flex-col items-start gap-4">
          <h2 className="font-bebas text-secondary-foreground text-5xl sm:text-7xl uppercase tracking-tight">
            Gallery
          </h2>
          <p className="text-muted-foreground">
            A glimpse into the TrimSync experience.
          </p>
        </div>
        <div>Images</div>
      </div>
    </section>
  );
}
