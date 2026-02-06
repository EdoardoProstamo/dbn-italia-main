import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SITE_DATA } from "@/config/siteData";
import { Star, ExternalLink } from "lucide-react";

const Reviews = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <div className="gold-accent-line mx-auto mb-6" />
          <h2 className="section-title">Valutazioni dei Pazienti</h2>
          <p className="section-subtitle mx-auto mb-8">
            La soddisfazione dei nostri pazienti è il nostro miglior risultato.
          </p>

          <div className="card-elevated p-8 md:p-12 mx-auto max-w-md">
            <div className="flex justify-center gap-1.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7"
                  fill={i < Math.round(parseFloat(SITE_DATA.reviewScore)) ? "hsl(var(--gold))" : "none"}
                  stroke={i < Math.round(parseFloat(SITE_DATA.reviewScore)) ? "hsl(var(--gold))" : "hsl(var(--border))"}
                />
              ))}
            </div>

            <p className="text-2xl font-bold text-foreground font-display mb-2">
              Valutazione media: {SITE_DATA.reviewScore} su {SITE_DATA.reviewMax}
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              Basata sulle recensioni verificate dei nostri pazienti.
            </p>

            <a
              href={SITE_DATA.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-outline-dark"
            >
              Consulta le recensioni su Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
