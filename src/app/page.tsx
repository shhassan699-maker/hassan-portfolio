import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import QADemo from "@/components/QADemo";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Projects />
      <QADemo />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
