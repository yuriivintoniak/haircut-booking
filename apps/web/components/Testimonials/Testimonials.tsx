"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@repo/ui/components/carousel";
import { Testimonial } from "./Testimonial";
import { testimonials } from "./constants";

export function Testimonials() {
  const [api, setApi] =useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-primary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex flex-col items-start gap-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="h-[3px] w-8 sm:w-12 bg-chart-5" />
            <h2 className="font-display text-chart-5 text-5xl sm:text-7xl uppercase tracking-tight">
              What Clients Say
            </h2>
          </div>
          <p className="text-primary-foreground/60 sm:text-lg">
            Real feedback from clients who trust our work and expertise.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
                current={current}
              />
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 bg-[#2a2a2c] rounded-full p-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
