import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/30 py-12 relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-neon-cyan">
                <span className="text-primary-foreground font-bold text-lg">IEEE</span>
              </div>
              <span className="text-xl font-bold neon-text-cyan">BTS Society</span>
            </div>
            <p className="text-foreground/90 text-sm">
              Innovate. Code. Create a Better Tomorrow.
            </p>
            <p className="text-foreground/70 text-xs">
              Sairam Engineering College & Sairam Institute of Technology
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold neon-text-purple">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ieee.bts@gmail.com" 
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">ieee.bts@gmail.com</span>
              </a>
              <a 
                href="tel:+917397685577" 
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7397685577</span>
              </a>
              <div className="flex items-start gap-2 text-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">
                  Sairam College Rd, Sai Leo Nagar,<br />
                  West Tambaram, Chennai,<br />
                  Tamil Nadu 600132
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold neon-text-pink">Quick Links</h3>
            <div className="space-y-2">
              <a href="#events" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Events
              </a>
              <a href="/register-sdg" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                SDG Registration
              </a>
              <a href="/register-blind-code" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Blind Code Registration
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/30 text-center">
          <p className="text-sm text-foreground/70">
            © 2025 IEEE BTS Society - Sairam Engineering College & Sairam Institute of Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
