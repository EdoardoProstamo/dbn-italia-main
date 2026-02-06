import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_DATA } from "@/config/siteData";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Servizi", path: "/servizi" },
  { label: "Contatti", path: "/contatti" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm"
          : "bg-background"
      }`}
      style={{
        boxShadow: isScrolled ? "var(--shadow-header)" : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col" aria-label="DBN Medical Group – Home">
            <span className="text-2xl font-bold text-primary font-display tracking-tight leading-none">
              DBN
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase leading-tight">
              Medical Group
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={SITE_DATA.phoneHref}
              className="btn btn-md btn-accent text-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE_DATA.phone}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 pt-4" aria-label="Navigazione mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase ${
                    location.pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_DATA.phoneHref}
                className="flex items-center gap-2 text-sm text-primary font-medium pt-2 border-t border-border"
              >
                <Phone className="w-4 h-4" />
                {SITE_DATA.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
