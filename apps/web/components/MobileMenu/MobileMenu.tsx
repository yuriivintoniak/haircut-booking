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
import { headerNavigation } from "../Header/constants";

export function MobileMenu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex lg:hidden cursor-pointer">
            <MenuIcon />
          </button>
        </SheetTrigger>
        <SheetContent showCloseButton={false} className="bg-primary p-4 gap-0">
          <SheetHeader>
            <SheetTitle>TrimSync</SheetTitle>
            <SheetDescription />
          </SheetHeader>
          {headerNavigation.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className="text-primary-foreground text-xl block my-10"
            >
              {navItem.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="text-rose text-xl block my-10"
          >
            Log in
          </Link>
          <a
            href="#booking"
            className="text-accent text-xl block my-10"
          >
            Book
          </a>
        </SheetContent>
      </Sheet>
    </div>
  );  
}
