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
import { signOut, useSession } from "../../lib/auth-client";

const linkClass = "text-lg block my-8";

export function MobileMenu() {
  const { data: session } = useSession();

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
              className={`${linkClass} text-primary-foreground`}
            >
              {navItem.label}
            </Link>
          ))}
          <a href="#booking" className={`${linkClass} text-accent`}>
            Book
          </a>
          {session ? (
            <button 
              onClick={() => signOut()} 
              className={`${linkClass} text-primary-accent text-left cursor-pointer`}
            >
              Sign out
            </button>
          ) : (
            <Link href="/sign-in" className={`${linkClass} text-primary-accent`}>
              Sign in
            </Link>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );  
}
