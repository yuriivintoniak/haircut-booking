"use client";

import { cn } from "@repo/ui/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@repo/ui/components/card";
import { CarouselItem } from "@repo/ui/components/carousel";
import type { Testimonial } from "./constants";
import { StarFilled } from "./icons/StarFilled";

type TestimonialProps = {
  testimonial: Testimonial;
  index: number;
  current: number;
};

export function Testimonial({ testimonial, index, current }: TestimonialProps) {
  return (
    <CarouselItem className="basis-full md:basis-1/3 flex">
      <Card
        className={cn(
          "h-full w-full gap-8 items-center p-8 bg-[#2a2d4a] border-none", 
          {
            "shadow-2xl": index === current - 1,
            "bg-[#262943] opacity-70 scale-92": index !== current - 1,
          }
        )}
      >
        <CardHeader className="flex justify-center gap-1">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <span key={i}>
              <StarFilled />
            </span>
          ))}
        </CardHeader>
        <CardContent className="flex flex-col gap-8 items-center">
          <p
            className={cn(
              "text-center leading-relaxed",
              {
                "text-[#cdd1f0]": index === current - 1,
                "text-[#8b8fb5]": index !== current - 1,
              }
            )}
          >
            {testimonial.text}
          </p>
        </CardContent>
        <CardFooter
          className={cn(
            "mt-auto font-semibold",
            {
              "text-[#e8eaff]": index === current - 1,
              "text-[#8b8fb5]": index !== current - 1,
            }
          )}
        >
          {testimonial.name}
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
