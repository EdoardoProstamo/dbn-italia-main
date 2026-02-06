import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES } from "@/config/siteData";
import servizio1 from "@/assets/servizio1.jpg";
import servizio2 from "@/assets/servizio2.jpg";
import servizio3 from "@/assets/servizio3.jpg";
import servizio4 from "@/assets/servizio4.jpg";
import servizio5 from "@/assets/servizio5.jpg";

const serviceImages = [servizio1, servizio2, servizio3, servizio4, servizio5];
const serviceAlts = [
  "Sala trattamenti di medicina estetica con lettino e strumentazione professionale",
  "Apparecchiatura avanzata per trattamenti corpo in ambiente clinico moderno",
  "Studio del nutrizionista con tablet di analisi alimentare e alimenti freschi",
  "Strumenti diagnostici per check-up medico su scrivania clinica",
  "Studio medico per consulenze specialistiche con certificati e libri professionali",
];

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="gold-accent-line mb-6" />
              <h1 className="section-title text-4xl md:text-5xl">
                I Nostri Servizi
              </h1>
              <p className="section-subtitle">
                Il centro DBN Medical Group offre un'ampia gamma di servizi
                medici specialistici in ambito estetico, nutrizionale e
                preventivo.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {SERVICES.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="animate-on-scroll"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                      index % 2 !== 0 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div
                      className={index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}
                    >
                      <div className="rounded-2xl overflow-hidden shadow-card">
                        <img
                          src={serviceImages[index]}
                          alt={serviceAlts[index]}
                          className="w-full h-[360px] object-cover"
                          loading="lazy"
                          width="768"
                          height="360"
                        />
                      </div>
                    </div>

                    <div
                      className={index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}
                    >
                      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                        Servizio {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>
                  </div>

                  {index < SERVICES.length - 1 && (
                    <div className="border-b border-border mt-20" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
