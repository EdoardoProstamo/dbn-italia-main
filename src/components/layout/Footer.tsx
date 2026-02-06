import { Link } from "react-router-dom";
import { SITE_DATA } from "@/config/siteData";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold font-display tracking-tight">
                DBN
              </span>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mt-0.5">
                Medical Group
              </p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {SITE_DATA.subtitle}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contatti
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{SITE_DATA.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={SITE_DATA.phoneHref} className="hover:text-primary-foreground transition-colors">
                  {SITE_DATA.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Link Utili
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/servizi" className="hover:text-primary-foreground transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-primary-foreground transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>
              © {new Date().getFullYear()} {SITE_DATA.name} – {SITE_DATA.subtitle}
            </p>
            <p>P.IVA: {SITE_DATA.piva}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
