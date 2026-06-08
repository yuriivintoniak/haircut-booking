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
            fill={true}
            className="object-cover opacity-60"
            style={{ objectPosition: "left bottom" }}
          />
        </div>
        <div className="relative z-10 pt-20">
          <h1 className="font-bebas text-primary-foreground text-7xl 2xs:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.85] tracking-tight uppercase text-right">
            The Art<br />of the<br />Cut
          </h1>
        </div>
        <div className="relative z-10 pt-10 flex flex-col items-end">
          <div className="w-full max-w-md divide-y divide-primary-foreground/20">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex justify-between items-center py-3 font-bebas text-lg 2xs:text-xl md:text-2xl text-primary-foreground"
              >
                <span className="uppercase tracking-wide">
                  {service.name}
                </span>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
          <Link href="/booking" className="btn-primary group w-full max-w-md">
            <span className="flex items-center justify-center gap-2">
              Book Now
              <ArrowRight className="group-hover:translate-x-1 duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
