import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "Team Member 1", role: "Organizer" },
  { name: "Team Member 2", role: "Technical Lead" },
  { name: "Team Member 3", role: "Event Coordinator" },
  { name: "Team Member 4", role: "Marketing Head" },
  { name: "Team Member 5", role: "Design Lead" },
  { name: "Team Member 6", role: "Operations Manager" },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-pink">
          Our Team
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet the dedicated team behind this amazing event
        </p>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-card rounded-lg p-8 shadow-neon-cyan hover:shadow-neon-pink transition-all duration-300">
                      <img
                        src="/placeholder.svg"
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-lg mb-6 mx-auto"
                      />
                      <h3 className="text-2xl font-bold text-primary mb-2 text-center">{member.name}</h3>
                      <p className="text-muted-foreground text-center mb-3">{member.role}</p>
                      <p className="text-xs text-foreground/60 text-center">
                        (Placeholder image - will be replaced)
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card/80 backdrop-blur-sm border-primary/50 hover:bg-primary hover:text-primary-foreground shadow-neon-cyan"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card/80 backdrop-blur-sm border-primary/50 hover:bg-primary hover:text-primary-foreground shadow-neon-cyan"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary shadow-neon-cyan w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Team;
