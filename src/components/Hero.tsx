
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-white to-sky-50 pt-16">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-dark leading-tight">
            IT Support <span className="text-tech-blue">Specialist</span> based in Sydney
          </h1>
          <p className="text-lg text-tech-gray max-w-lg">
            Building robust IT infrastructure and providing exceptional technical support 
            to keep businesses running smoothly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-tech-blue hover:bg-tech-darkblue text-white">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-sky-50">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="/lovable-uploads/b1e25da2-cf2c-4460-b9f7-554c49fc3bef.png" 
              alt="Liladhar Sapkota" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-tech-blue rounded-xl p-4 shadow-lg">
            <p className="text-white font-medium">1.5+ Years of Experience</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-tech-dark font-medium">Available for hire</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-tech-gray hover:text-tech-blue transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
