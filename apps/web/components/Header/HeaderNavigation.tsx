import Link from "next/link";
import { headerNavigation } from "./constants";

export function HeaderNavigation() {
  return (
    <nav className="hidden lg:flex gap-8">
      {headerNavigation.map((navItem) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors duration-300"
        >
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}
