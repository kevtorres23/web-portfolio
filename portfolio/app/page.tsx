import LandingHero from "@/app/ui-sections/landing/LandingHero";
import Navbar from "@/app/components/Navbar";
import AboutMe from "@/app/ui-sections/landing/AboutMe";
import MyWork from "@/app/ui-sections/landing/MyWork";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <Navbar />

      <LandingHero />

      <AboutMe />

      <MyWork />
    </div>
  );
}
