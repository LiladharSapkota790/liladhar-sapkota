
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
