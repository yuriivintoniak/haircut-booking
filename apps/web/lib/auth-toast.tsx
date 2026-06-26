"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "@repo/ui/components/sonner";

export function AuthToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = searchParams.get("auth");

    if (!auth) return;

    if (auth === "signin-success") {
      toast.success("Signed in successfully");
    } else if (auth === "signup-success") {
      toast.success("Account created successfully");
    } else if (auth === "signout-success") {
      toast.success("Signed out successfully");
    }

    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [searchParams, router, pathname]);

  return null;
}
