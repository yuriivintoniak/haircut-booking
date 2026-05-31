import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <main className="w-full min-h-svh flex items-center justify-center">
      <Header />
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/sign-up">
            Sign up
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/sign-in">
            Sign in
          </Link>
        </Button>
      </div>
    </main>
  );
}
