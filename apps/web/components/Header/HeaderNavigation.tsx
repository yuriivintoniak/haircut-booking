import { headerNavigation } from "./constants";

export function HeaderNavigation() {
  return (
    <nav className="flex gap-6">
      {headerNavigation.map((navItem) => (
        <a
          key={navItem.href}
          href={navItem.href}
          className="text-primary-foreground hover:text-chart-5 transition-colors duration-300"
        >
          {navItem.label}
        </a>
      ))}
    </nav>
  );
}
