import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { SITE_DATA } from "@/config/siteData";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(220 60% 12%) 0%, hsl(220 55% 22%) 60%, hsl(220 45% 28%) 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-primary-foreground">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10">
              <span className="text-sm tracking-wide text-accent font-body">
                Centro Medico a Roma
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              {SITE_DATA.name}
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 mb-8 font-body leading-relaxed max-w-lg">
              {SITE_DATA.subtitle}. Professionalità, tecnologia e attenzione
              personalizzata per il tuo benessere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_DATA.phoneHref}
                className="btn btn-lg btn-accent"
              >
                <Phone className="w-4 h-4" />
                Chiama Ora
              </a>
              <Link
                to="/servizi"
                className="btn btn-lg btn-outline-light"
              >
                Scopri i Servizi
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Reception del centro medico DBN Medical Group a Roma, ambiente elegante e professionale"
                className="w-full h-[520px] object-cover"
                loading="eager"
                width="768"
                height="520"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(220 60% 12% / 0.15), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
