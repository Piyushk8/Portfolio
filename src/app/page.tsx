import GridBackground from "@/Components/GridBackground";
import Hero from "@/Components/Pages/Hero";
import NavBar from "@/Components/NavBar";
import Projects from "@/Components/Pages/Projects";
import About from "@/Components/Pages/About";
import Contact from "@/Components/Pages/Skills";
import Skills from "@/Components/Pages/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* Elegant Single Grid */}
      <GridBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Fixed Navbar */}
        <header className="bg-black fixed top-0 left-0 w-full z-20">
          <NavBar />
        </header>

        <main className="pt-20 mt-5"> 
          <section id="hero" className="h-screen">
            <Hero />
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center scroll-mt-24"
          >
            <About />
          </section>
          <section
            id="skills"
            className="min-h-screen flex items-center justify-center scroll-mt-24"
          >
            <Skills />
          </section>
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center scroll-mt-24"
          >
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
