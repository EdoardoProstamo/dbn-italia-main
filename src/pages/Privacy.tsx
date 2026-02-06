import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_DATA } from "@/config/siteData";

const Privacy = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="gold-accent-line mb-6" />
              <h1 className="section-title text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="section-subtitle">
                Informativa sul trattamento dei dati personali ai sensi del
                Regolamento (UE) 2016/679 (GDPR).
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
                    1. Titolare del Trattamento
                  </h2>
                  <p>
                    Il Titolare del trattamento dei dati personali è{" "}
                    <strong className="text-foreground">{SITE_DATA.name}</strong>
                    , con sede in {SITE_DATA.address}. Per qualsiasi
                    informazione è possibile contattarci al numero{" "}
                    {SITE_DATA.phone}.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    2. Tipi di Dati Raccolti
                  </h2>
                  <p>
                    Il presente sito web non raccoglie dati personali degli
                    utenti durante la navigazione. Non sono presenti form di
                    contatto, sistemi di registrazione, cookie di profilazione o
                    strumenti di tracciamento. I dati di navigazione (indirizzo
                    IP, orario di accesso, pagine visitate) possono essere
                    registrati dal provider di hosting esclusivamente per
                    finalità tecniche e di sicurezza.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    3. Finalità del Trattamento
                  </h2>
                  <p>
                    I dati eventualmente raccolti dal provider di hosting sono
                    trattati per le seguenti finalità:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Garantire il corretto funzionamento del sito web</li>
                    <li>
                      Assicurare la sicurezza e prevenire attività illecite
                    </li>
                    <li>Adempiere a obblighi di legge</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    4. Base Giuridica del Trattamento
                  </h2>
                  <p>
                    Il trattamento dei dati di navigazione si basa sul legittimo
                    interesse del Titolare a garantire il funzionamento e la
                    sicurezza del sito web, ai sensi dell'art. 6, par. 1, lett.
                    f) del GDPR.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    5. Conservazione dei Dati
                  </h2>
                  <p>
                    I dati di navigazione vengono conservati per il tempo
                    strettamente necessario al raggiungimento delle finalità per
                    cui sono raccolti e comunque non oltre quanto previsto dalla
                    normativa vigente.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    6. Diritti dell'Interessato
                  </h2>
                  <p>
                    Ai sensi degli artt. 15-22 del GDPR, l'interessato ha il
                    diritto di accedere ai propri dati personali, di chiederne
                    la rettifica, la cancellazione, la limitazione del
                    trattamento, di opporsi al trattamento e di esercitare il
                    diritto alla portabilità dei dati. Per esercitare tali
                    diritti, è possibile contattare il Titolare al numero{" "}
                    {SITE_DATA.phone}.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
                    7. Modifiche alla Privacy Policy
                  </h2>
                  <p>
                    Il Titolare si riserva il diritto di modificare la presente
                    informativa in qualsiasi momento. Le modifiche saranno
                    pubblicate su questa pagina.
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

export default Privacy;
