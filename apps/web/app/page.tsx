import { Booking } from "../components/Booking/Booking";
import { Gallery } from "../components/Gallery/Gallery";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";
import { Testimonials } from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="w-full min-h-svh flex flex-col">
      <Header />
      <Hero />
      <Services />
      <Booking />
      <Gallery />
      <Testimonials />
    </main>
  );
}
