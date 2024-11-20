import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutMe";
import WorkExperience from "./sections/Experience";

export default function Home() {
  return (
  <div className="container min-w-full">
    <HeroSection />  
    <AboutSection />
    <WorkExperience />
  </div>
  );
}
