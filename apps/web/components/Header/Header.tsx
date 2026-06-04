import Link from "next/link";
import { headerActions } from "./constants";
import { HeaderNavigation } from "./HeaderNavigation";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export function Header() {
  return (
    <header className="header">
      <div className="font-bebas text-primary-foreground text-2xl uppercase tracking-wider">
        <a href="#">TrimSync</a>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <HeaderNavigation />
        {headerActions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={`bg-${action.variant} btn`}
          >
            {action.label}
          </Link>
        ))}
      </div>
      <MobileMenu />
    </header>
  );
}
