import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IEEE</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">IEEE BTS Society</h3>
                <p className="text-xs text-muted-foreground">Bharati Vidyapeeth</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovate. Code. Create a Better Tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">ieee.bts@bharatividyapeeth.edu</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Bharati Vidyapeeth College of Engineering, Pune
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#events" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#sdg-event" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                SDG Challenge
              </a>
              <a href="#blind-code" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blind Code
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 IEEE BTS Society, Bharati Vidyapeeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
