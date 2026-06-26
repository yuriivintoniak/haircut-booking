"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { HeaderNavigation } from "./HeaderNavigation";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { signOut, useSession } from "../../lib/auth-client";

export function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      const response = await signOut();

      if (response?.error) {
        throw new Error(response.error.message);
      }

      router.push("/?auth=signout-success");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="header">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="font-display text-primary-foreground text-2xl uppercase tracking-wider">
          <a href="#">TrimSync</a>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <HeaderNavigation />
          <a href="#booking" className="btn bg-accent">
            Book
          </a>
          {session ? (
            <button onClick={handleSignOut} className="btn bg-primary-accent cursor-pointer">
              Sign out
            </button>
          ) : (
            <Link href="/sign-in" className="btn bg-primary-accent">
              Sign in
            </Link>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
