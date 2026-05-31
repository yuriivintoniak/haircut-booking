import Link from "next/link";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary/90 backdrop-blur-sm py-4 px-20">
      <div className="flex items-center justify-between">
        <div className="font-bebas text-primary-foreground text-2xl uppercase tracking-wider">
          <Link href="#">TrimSync</Link>
        </div>
        <div className="flex items-center gap-8">
          <HeaderNavigation />
          <Link
            href="#booking"
            className="bg-accent font-semibold text-sm uppercase tracking-widest py-2 px-5 hover:opacity-90 transition-opacity duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
