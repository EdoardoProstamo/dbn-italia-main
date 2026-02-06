import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/config/siteData";
import homeServizio1 from "@/assets/home-servizio1.jpg";
import homeServizio2 from "@/assets/home-servizio2.jpg";
import homeServizio3 from "@/assets/home-servizio3.jpg";

const previewImages = [homeServizio1, homeServizio2, homeServizio3];
const previewAlts = [
  "Strumenti professionali per medicina estetica su vassoio sterile",
  "Prodotti dermatologici e cosmetici medicali per trattamenti viso e corpo",
  "Alimenti freschi e piano nutrizionale per consulenza alimentare",
];

const ServicesPreview = () => {
  const sectionRef = useScrollAnimation();
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="gold-accent-line mx-auto mb-6" />
          <h2 className="section-title">I Nostri Servizi</h2>
          <p className="section-subtitle mx-auto">
            Scopri i servizi di medicina estetica, nutrizione e benessere
            offerti dal nostro centro medico a Roma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewServices.map((service, index) => (
            <div
              key={service.id}
              className="card-elevated animate-on-scroll"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={previewImages[index]}
                  alt={previewAlts[index]}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width="768"
                  height="576"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link
            to="/servizi"
            className="btn btn-lg btn-primary-solid"
          >
            Tutti i Servizi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
