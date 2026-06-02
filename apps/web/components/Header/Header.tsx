import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <header className="header">
      <div className="font-bebas text-primary-foreground text-2xl uppercase tracking-wider">
        <Link href="#">TrimSync</Link>
      </div>
      <button className="lg:hidden flex cursor-pointer">
        <MenuIcon />
      </button>
      <div className="hidden lg:flex items-center gap-6">
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
    </header>
  );
}
