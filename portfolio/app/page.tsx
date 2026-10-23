import LandingHero from "@/ui-sections/landing/LandingHero";
import Navbar from "@/components/Navbar";
import AboutMe from "@/ui-sections/landing/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <Navbar />

      <LandingHero />

      <AboutMe />
    </div>
  );
}
