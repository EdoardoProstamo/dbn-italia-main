import { Phone } from "lucide-react";
import { SITE_DATA } from "@/config/siteData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ctaImage from "@/assets/cta.jpg";

const CTASection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Corridoio elegante del centro medico DBN Medical Group con illuminazione calda"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(220 60% 12% / 0.88) 0%, hsl(220 55% 18% / 0.82) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mb-4">
            Prenota la Tua Visita
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-8 font-body leading-relaxed">
            Contattaci per fissare un appuntamento o per ricevere maggiori
            informazioni sui nostri servizi. Il nostro staff è a tua
            disposizione.
          </p>
          <a
            href={SITE_DATA.phoneHref}
            className="btn btn-lg btn-accent"
          >
            <Phone className="w-4 h-4" />
            Chiama {SITE_DATA.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
