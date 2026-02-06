import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HOW_WE_WORK_STEPS } from "@/config/siteData";
import comeLavoriamoImage from "@/assets/come-lavoriamo.jpg";

const HowWeWork = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={comeLavoriamoImage}
                alt="Sala visita attrezzata del centro medico DBN Medical Group con strumentazione diagnostica moderna"
                className="w-full h-[420px] object-cover"
                loading="lazy"
                width="768"
                height="420"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll">
              <div className="gold-accent-line mb-6" />
              <h2 className="section-title">Come Lavoriamo</h2>
              <p className="section-subtitle mb-10">
                Un percorso chiaro e trasparente, dal primo contatto ai risultati
                desiderati.
              </p>
            </div>

            <div className="space-y-8">
              {HOW_WE_WORK_STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-5 animate-on-scroll"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
