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
        <HeaderNavigation />
        <div className="hidden lg:flex items-center">
          {session ? (
            <button onClick={handleSignOut} className="btn">
              Sign out
            </button>
          ) : (
            <Link href="/sign-in" className="btn">
              Sign in
            </Link>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
