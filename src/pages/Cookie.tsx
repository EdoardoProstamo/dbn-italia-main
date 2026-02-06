import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_DATA } from "@/config/siteData";

const Cookie = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="gold-accent-line mb-6" />
              <h1 className="section-title text-4xl md:text-5xl">
                Cookie Policy
              </h1>
              <p className="section-subtitle">
                Informativa sull'utilizzo dei cookie nel presente sito web.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose-sm">
              <article className="space-y-8 text-muted-foreground leading-relaxed text-sm">
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    1. Cosa Sono i Cookie
                  </h2>
                  <p>
                    I cookie sono piccoli file di testo che i siti web
                    memorizzano sul dispositivo dell'utente durante la
                    navigazione. Vengono utilizzati per diverse finalità, come
                    memorizzare le preferenze dell'utente, migliorare
                    l'esperienza di navigazione e raccogliere dati statistici.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    2. Cookie Utilizzati dal Sito
                  </h2>
                  <p>
                    Il presente sito web{" "}
                    <strong className="text-foreground">
                      non utilizza cookie di profilazione
                    </strong>{" "}
                    né cookie di terze parti per finalità di marketing o
                    tracciamento. Il sito potrebbe utilizzare esclusivamente
                    cookie tecnici strettamente necessari al funzionamento del
                    sito, che non richiedono il consenso dell'utente ai sensi
                    della normativa vigente.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    3. Cookie Tecnici
                  </h2>
                  <p>
                    I cookie tecnici sono essenziali per il corretto
                    funzionamento del sito e permettono la navigazione e
                    l'utilizzo delle funzionalità di base. Questi cookie non
                    raccolgono informazioni personali identificabili e vengono
                    eliminati automaticamente alla chiusura del browser o dopo un
                    periodo di tempo prestabilito.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    4. Gestione dei Cookie
                  </h2>
                  <p>
                    L'utente può gestire le preferenze relative ai cookie
                    attraverso le impostazioni del proprio browser. È possibile
                    bloccare o eliminare i cookie in qualsiasi momento. Si
                    precisa che la disabilitazione dei cookie tecnici potrebbe
                    compromettere il corretto funzionamento del sito.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    5. Maggiori Informazioni
                  </h2>
                  <p>
                    Per ulteriori informazioni sul trattamento dei dati
                    personali, si prega di consultare la nostra{" "}
                    <a
                      href="/privacy"
                      className="text-primary underline hover:text-accent transition-colors"
                    >
                      Privacy Policy
                    </a>
                    . Per qualsiasi domanda, è possibile contattare il Titolare
                    del trattamento al numero {SITE_DATA.phone}.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    6. Riferimenti Normativi
                  </h2>
                  <p>
                    La presente Cookie Policy è redatta in conformità al
                    Regolamento (UE) 2016/679 (GDPR), al D.Lgs. 196/2003
                    (Codice Privacy) come modificato dal D.Lgs. 101/2018 e alle
                    Linee Guida del Garante per la Protezione dei Dati Personali
                    in materia di cookie e altri strumenti di tracciamento del 10
                    giugno 2021.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cookie;
