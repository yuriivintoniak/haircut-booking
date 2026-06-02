import Link from "next/link";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-primary/80 backdrop-blur-md py-4 px-40">
      <div className="flex items-center justify-between">
        <div className="font-bebas text-primary-foreground text-2xl uppercase tracking-wider">
          <Link href="#">TrimSync</Link>
        </div>
        <div className="flex items-center gap-8">
          <HeaderNavigation />
          <Link
            href="/auth/login"
            className="btn bg-rose"
          >
            Log in
          </Link>
          <Link
            href="#booking"
            className="btn bg-accent"
          >
            Book
          </Link>
        </div>
      </div>
    </header>
  );
}
