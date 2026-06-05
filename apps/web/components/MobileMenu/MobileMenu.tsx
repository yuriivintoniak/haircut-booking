"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { MenuIcon } from "./MenuIcon";
import { headerActions, headerNavigation } from "../Header/constants";

const textColors = {
  rose: "text-rose",
  accent: "text-accent",
};

const linkClass = "text-xl block my-10";

export function MobileMenu() {
  return (
    <div className="lg:hidden flex">
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer">
            <MenuIcon />
          </button>
        </SheetTrigger>
        <SheetContent showCloseButton={false} className="bg-primary p-4 gap-0">
          <SheetHeader>
            <SheetTitle>
              <a href="#hero">TrimSync</a>
            </SheetTitle>
            <SheetDescription />
          </SheetHeader>
          {headerNavigation.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={`text-primary-foreground ${linkClass}`}
            >
              {navItem.label}
            </Link>
          ))}
          {headerActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`${textColors[action.variant]} ${linkClass}`}
            >
              {action.label}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );  
}
