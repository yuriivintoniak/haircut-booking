export function Booking() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-primary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex flex-col items-start gap-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="h-[3px] w-8 sm:w-12 bg-chart-5" />
            <h2 className="font-display text-chart-5 text-5xl sm:text-7xl uppercase tracking-tight">
              Schedule Visit
            </h2>
          </div>
          <p className="text-primary-foreground/60 sm:text-lg">
            Please select your service, barber and time below.
          </p>
        </div>
        <div className="text-primary-foreground/60">
          Make your booking here
        </div>
      </div>
    </section>
  )
}
