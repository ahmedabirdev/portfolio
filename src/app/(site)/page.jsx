import About from "@/components/home/About";
import Faq from "@/components/home/Faq";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Faq />
    </>
  );
}
