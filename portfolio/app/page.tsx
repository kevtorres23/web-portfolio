import Image from "next/image";
import LandingHero from "@/ui-sections/LandingHero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <Navbar />

      <LandingHero/>
    </div>
  );
}
