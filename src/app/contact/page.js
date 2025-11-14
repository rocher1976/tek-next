import ContactForm from "@/components/ContactForm";

const heroImage = "/images/contact-us-2993000_1280.jpg";

export const metadata = {
  title: "Tek - Contact",
  description: "Contactez Tek Communication - Nous sommes à votre écoute.",
};

const ContactPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main id="main-content">
        <section
          className="page-hero"
          aria-labelledby="page-title"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="container">
            <h1 className="page-title" id="page-title">
              CONTACTEZ-NOUS
            </h1>
          </div>
        </section>

        <section className="tagline-section">
          <h2 className="tagline">Commençons la conversation</h2>
        </section>

        <section className="contact-section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form-wrapper">
                <h2 id="contact-heading" className="section-heading">
                  ENVOYEZ-NOUS UN MESSAGE
                </h2>
                <ContactForm />
              </div>

              <div className="contact-info-wrapper">
                <h2 className="section-heading">Nos coordonnées</h2>
                <div className="contact-info">
                  <address className="contact-info-item">
                    <h3>📍 Adresse</h3>
                    <p>64 AV Méthodiste, Lubumbashi, Haut-Katanga</p>
                    <p>République Démocratique du Congo</p>
                  </address>

                  <div className="contact-info-item">
                    <h3>📞 Téléphone</h3>
                    <p>
                      <a href="tel:+2437340225807">
                        +243 844 777 979
                      </a>
                    </p>
                  </div>

                  <div className="contact-info-item">
                    <h3>✉️ Email</h3>
                    <p>
                      <a href="mailto:info@tekcommunication.com">
                        info@tekcommunication.com
                      </a>
                    </p>
                  </div>

                  <div className="contact-info-item">
                    <h3>🕐 Horaires</h3>
                    <p>
                      Lundi - Vendredi: 8h00 - 17h00
                      <br />
                      Samedi: 9h00 - 13h00
                      <br />
                      Dimanche: Fermé
                    </p>
                  </div>

                  <div className="contact-info-item">
                    <h3>📖 Documents</h3>
                    <p>
                      <span>Numéro ARSP :</span> 4629324964
                    </p>
                    <p>
                      <span>Numéro RCCM :</span> CD/LSH/RCCM/24-B-00471
                    </p>
                    <p>
                      <span>Numéro TVA :</span> xxxxx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <p className="copyright">
            © <span className="copyright-year">{currentYear}</span> Tek
            Communication Sarl. Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;

