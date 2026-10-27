import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Services, About, Background, Process, Projects, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Background />
      <Process />
      <Projects />
      <Contact />
    </main>
  );
}
