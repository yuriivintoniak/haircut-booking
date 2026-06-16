"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@repo/ui/components/card";
import { CarouselItem } from "@repo/ui/components/carousel";
import type { Testimonial } from "./constants";
import { StarFilledIcon } from "./StarFilledIcon";

type TestimonialProps = {
  testimonial: Testimonial;
  index: number;
  current: number;
};

export function Testimonial({
  testimonial,
  index,
  current,
}: TestimonialProps) {
  return (
    <CarouselItem className="basis-full md:basis-1/3 flex">
      <Card
        className={`h-full w-full gap-8 items-center border-none ${
          index === current - 1
            ? "bg-[#2a2a2c]"
            : "bg-[#242426] opacity-70 scale-92"
        }`}
      >
        <CardHeader className="flex justify-center gap-1">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <span key={i}>
              <StarFilledIcon />
            </span>
          ))}
        </CardHeader>
        <CardContent
          className={`text-center leading-relaxed ${
            index === current - 1
              ? "text-primary-foreground/60"
              : "text-primary-foreground/50"
          }`}
        >
          {testimonial.text}
        </CardContent>
        <CardFooter className="mt-auto font-semibold text-primary-accent">
          {testimonial.name}
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
