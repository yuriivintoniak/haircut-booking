"use client";

import Image from "next/image";
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

const linkClass = "block my-8";

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
              <a href="#">
                <Image src="/logo.svg" alt="logo" width={36} height={36} />
              </a>
            </SheetTitle>
            <SheetDescription />
          </SheetHeader>
          {headerNavigation.map((navItem) => (
            <a
              key={navItem.href}
              href={navItem.href}
              className={`${linkClass} nav-link nav-link-primary`}
            >
              {navItem.label}
            </a>
          ))}
          {session ? (
            <button
              onClick={() => signOut()}
              className={`${linkClass} nav-link nav-link-accent text-left cursor-pointer`}
            >
              Sign out
            </button>
          ) : (
            <Link href="/sign-in" className={`${linkClass} nav-link nav-link-accent`}>
              Sign in
            </Link>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );  
}
