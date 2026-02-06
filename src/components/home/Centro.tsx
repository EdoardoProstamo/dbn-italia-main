import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import centroImage from "@/assets/centro.jpg";
import { Shield, Users, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Professionalità",
    text: "Medici specializzati e certificati con anni di esperienza nel settore.",
  },
  {
    icon: Users,
    title: "Approccio Personalizzato",
    text: "Ogni percorso è studiato su misura per le esigenze specifiche del paziente.",
  },
  {
    icon: Sparkles,
    title: "Tecnologie Avanzate",
    text: "Strumentazione di ultima generazione per trattamenti sicuri ed efficaci.",
  },
];

const Centro = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="gold-accent-line mb-6" />
            <h2 className="section-title">Il Centro</h2>
            <p className="section-subtitle mb-8">
              DBN Medical Group è un centro medico specializzato in medicina
              estetica e nutrizione nel cuore di Roma. Il nostro team di
              professionisti qualificati è dedicato al benessere e alla salute
              dei pazienti, offrendo trattamenti personalizzati in un ambiente
              accogliente e tecnologicamente avanzato.
            </p>

            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={centroImage}
                alt="Sala d'attesa del centro medico DBN Medical Group, ambiente confortevole e luminoso"
                className="w-full h-[420px] object-cover"
                loading="lazy"
                width="768"
                height="420"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Centro;
