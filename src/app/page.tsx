// page.tsx
import GridBackground from "@/Components/GridBackground";
import Hero from "@/Components/Pages/Hero";
import NavBar from "@/Components/NavBar";
import Projects from "@/Components/Pages/Projects";
import About from "@/Components/Pages/About";
import Skills from "@/Components/Pages/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
   
      {/* Grid Pattern Overlay */}
      <GridBackground />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full z-20">
          <NavBar />
        </header>

        <main className="pt-20">
          {/* Hero Section - Full viewport height */}
          <section id="hero" className="min-h-screen">
            <Hero />
          </section>

          {/* Other sections with solid background */}
          <section
            id="about"
            className="min-h-screen flex items-center justify-center scroll-mt-24 
            bg-background relative z-10"
          >
            <About />
          </section>

          <section
            id="skills"
            className="min-h-screen flex items-center justify-center scroll-mt-24
            bg-background relative z-10"
          >
            <Skills />
          </section>

          <section
            id="projects"
            className="min-h-screen flex items-center justify-center scroll-mt-24
            bg-background relative z-10"
          >
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
