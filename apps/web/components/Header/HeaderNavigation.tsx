import { headerNavigation } from "./constants";

export function HeaderNavigation() {
  return (
    <nav className="hidden lg:flex gap-6">
      {headerNavigation.map((navItem) => (
        <a
          key={navItem.href}
          href={navItem.href}
          className="nav-link nav-link-primary"
        >
          {navItem.label}
        </a>
      ))}
    </nav>
  );
}
