import { headerNavigation } from "./constants";

export function HeaderNavigation() {
  return (
    <nav className="hidden lg:flex gap-6 uppercase tracking-tighter">
      {headerNavigation.map((navItem) => (
        <a
          key={navItem.href}
          href={navItem.href}
          className="text-primary-foreground transition-transform duration-300 hover:scale-[1.05]"
        >
          {navItem.label}
        </a>
      ))}
    </nav>
  );
}
