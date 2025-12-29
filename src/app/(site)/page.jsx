import About from "@/components/home/About";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Stacks from "@/components/home/Stacks";
import StickyCards from "@/components/home/StickyCards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <StickyCards/>
      <Stacks/>
    </>
  );
}
