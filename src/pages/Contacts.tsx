import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SITE_DATA } from "@/config/siteData";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Contacts = () => {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="gold-accent-line mb-6" />
              <h1 className="section-title text-4xl md:text-5xl">Contatti</h1>
              <p className="section-subtitle">
                Siamo a tua disposizione per informazioni e prenotazioni.
                Contattaci telefonicamente o vieni a trovarci nel nostro centro a
                Roma.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated p-8 animate-on-scroll">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 font-display">
                    Indirizzo
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {SITE_DATA.address}
                  </p>
                  <a
                    href={SITE_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-md btn-outline-dark text-sm"
                  >
                    Apri su Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="card-elevated p-8 animate-on-scroll" style={{ transitionDelay: "80ms" }}>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 font-display">
                    Telefono
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Chiama per informazioni o per prenotare una visita.
                  </p>
                  <a
                    href={SITE_DATA.phoneHref}
                    className="btn btn-md btn-accent text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {SITE_DATA.phone}
                  </a>
                </div>

                <div
                  className="card-elevated p-8 md:col-span-2 animate-on-scroll"
                  style={{ transitionDelay: "160ms" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 font-display">
                    Orari di Apertura
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {SITE_DATA.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
