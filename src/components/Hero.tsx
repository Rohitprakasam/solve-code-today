import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo placeholder */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="w-24 h-24 rounded-2xl bg-destructive backdrop-blur-sm border-2 border-destructive/50 flex items-center justify-center shadow-neon-pink">
              <span className="text-white font-bold text-3xl">IEEE</span>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Solve for Tomorrow
              <br />
              <span className="text-white/90">& Code Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Innovate. Code. Create a Better Tomorrow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-sm md:text-base animate-fade-in">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">10 November 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Sairam Engineering College</span>
            </div>
          </div>

          <div className="py-8 animate-fade-in">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              onClick={scrollToEvents}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-glow transition-smooth hover:scale-105"
            >
              Explore Events
            </Button>
            <Button
              onClick={scrollToEvents}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-6 transition-smooth hover:scale-105"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
