import LandingHero from "@/app/ui-sections/landing/LandingHero";
import Navbar from "@/components/Navbar";
import AboutMe from "@/app/ui-sections/landing/AboutMe";
import MyWork from "@/app/ui-sections/landing/MyWork";
import Contact from "./ui-sections/landing/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <Navbar />

      <LandingHero />

      <AboutMe />

      <MyWork />

      <Contact />

      <Footer/>
    </div>
  );
}
