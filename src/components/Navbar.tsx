import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-destructive flex items-center justify-center shadow-neon-pink">
              <span className="text-white font-bold text-lg">IEEE</span>
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-lg neon-text-cyan">IEEE BTS Society</h2>
              <p className="text-xs text-muted-foreground">Sairam Engineering College & Sairam Institute of Technology</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("sdg-event")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              SDG Challenge
            </button>
            <button
              onClick={() => scrollToSection("blind-code")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blind Code
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("sdg-event")}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                SDG Challenge
              </button>
              <button
                onClick={() => scrollToSection("blind-code")}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Blind Code
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
