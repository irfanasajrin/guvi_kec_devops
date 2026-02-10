import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">GUVI × Kongu EC</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              An industry-academia collaboration to bridge the skill gap and prepare the next generation of DevOps engineers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.guvi.in" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-1">
                  GUVI Official Website <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://kongu.edu" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-1">
                  Kongu Engineering College <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> devops@guvi.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Perundurai, Erode, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          © {new Date().getFullYear()} GUVI × Kongu Engineering College. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
