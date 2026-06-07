import Link from "next/link";
import { headerActions } from "./constants";
import { HeaderNavigation } from "./HeaderNavigation";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const bgColors = {
  rose: "bg-rose",
  accent: "bg-accent",
};

export function Header() {
  return (
    <header className="header">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="font-bebas text-primary-foreground text-2xl uppercase tracking-wider">
          <a href="#">TrimSync</a>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <HeaderNavigation />
          {headerActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`${bgColors[action.variant]} btn`}
            >
              {action.label}
            </Link>
          ))}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
