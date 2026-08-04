"use client";

import Image from "next/image";
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
        <a href="#">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </a>
        <HeaderNavigation />
        <div className="hidden lg:flex items-center">
          {session ? (
            <button onClick={handleSignOut} className="btn nav-link cursor-pointer">
              Sign out
            </button>
          ) : (
            <Link href="/sign-in" className="btn nav-link">
              Sign in
            </Link>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
