"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "../../lib/auth-client";

import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@repo/ui/components/card";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return <p className="mt-8 text-center">Loading...</p>;
  }

  if (!session?.user) {
    return <p className="mt-8 text-center">Redirecting...</p>;
  }

  const { user } = session; 

  return (
    <main className="min-h-svh w-full flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Card className="text-center gap-8">
          <CardHeader className="text-3xl font-bold gap-0">
            Dashboard
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Welcome, {user.name || "User"}!</p>
            <p>Email: {user.email}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
