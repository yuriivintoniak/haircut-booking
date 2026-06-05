import { Hero } from "../components/Hero/Hero";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <main className="w-full min-h-svh flex flex-col">
      <Header />
      <Hero />
    </main>
  );
}
