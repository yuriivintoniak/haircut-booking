import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "./constants";
import heroImage from "../../public/hero-barber.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Barbershop haircut"
          fill={true}
          className="object-cover opacity-60"
          style={{ objectPosition: "left bottom" }}
        />
      </div>
      <div className="relative z-10 pt-40 px-40">
        <h1 className="font-bebas text-primary-foreground text-[12rem] leading-[0.85] tracking-tight uppercase text-right">
          The Art<br />of the<br />Cut
        </h1>
      </div>
      <div className="relative z-10 py-10 px-40 flex flex-col items-end">
        <div className="w-full max-w-md divide-y divide-primary-foreground/20">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex justify-between items-center py-3 font-bebas text-xl md:text-2xl text-primary-foreground"
            >
              <span className="uppercase tracking-wide">
                {service.name}
              </span>
              <span>{service.price}</span>
            </div>
          ))}
        </div>
        <button className="btn group w-full max-w-md bg-accent font-semibold uppercase tracking-widest py-4 cursor-pointer">
          <span className="flex items-center justify-center gap-2">
            Book Now
            <ArrowRight className="group-hover:translate-x-1 duration-300" />
          </span>
        </button>
      </div>
    </section>
  );
}
