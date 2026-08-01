import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "./constants";
import heroImage from "../../public/hero-barber.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen py-20 px-4 md:px-8 bg-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Barbershop haircut"
            fill
            priority
            className="object-cover object-[60%_center] opacity-80"
          />
        </div>
        <div className="relative z-10 pt-15">
          <h1 className="font-display text-primary-foreground text-7xl 2xs:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tight uppercase text-left">
            The Art of<br />the Cut
          </h1>
        </div>
        <div className="relative z-10 pt-15 flex flex-col items-start">
          <div className="w-full max-w-sm divide-y divide-primary-foreground/30">
            {services.map((service) => (
              <div
                key={service.name}
                className="group h-14 flex justify-between items-center py-3 text-base md:text-lg text-primary-foreground font-medium"
              >
                <span>{service.name}</span>
                <div>
                  <span className="group-hover:hidden">
                    {service.price}
                  </span>
                  <Link
                    href="/booking"
                    className="hidden group-hover:inline-flex btn-primary text-xs md:text-sm"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
