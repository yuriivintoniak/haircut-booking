"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/tabs";

export function AuthTabs() {
  const pathname = usePathname();

  const value = pathname.includes("sign-up")
    ? "sign-up"
    : "sign-in";

  return (
    <Tabs value={value} className="w-full mt-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in" asChild>
          <Link href="/sign-in" className="flex items-center gap-2">
            <LogIn size={16} />
            <span>Sign In</span>
          </Link>
        </TabsTrigger>

        <TabsTrigger value="sign-up" asChild>
          <Link href="/sign-up" className="flex items-center gap-2">
            <UserPlus size={16} />
            <span>Sign Up</span>
          </Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
