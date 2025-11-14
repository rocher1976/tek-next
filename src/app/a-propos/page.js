const heroImage = "/images/excavator-5069835_1280.jpg";
const subcontractingImage = "/images/excavator-7703097_1280.jpg";
const expertiseImage = "/images/peggy-anke-MPnn435Dr9w-unsplash.jpg";

export const metadata = {
  title: "Tek - À Propos",
  description:
    "À propos de Tek Communication, votre partenaire stratégique en RDC.",
};

export default function AboutPage() {
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
              À PROPOS
            </h1>
          </div>
        </section>

        <section className="tagline-section">
          <h2 className="tagline">Votre pont stratégique vers le succès</h2>
        </section>

        <section className="services-detail-section" id="identity">
          <div className="container">
            <div className="service-detail">
              <figure className="service-detail-image">
                <img
                  src="/images/logo2.png"
                  alt="Tek Communication Logo"
                  loading="lazy"
                />
              </figure>
              <div className="service-detail-content">
                <h2 id="identity-heading" className="service-detail-title">
                  Notre Identité
                </h2>
                <p className="service-detail-description">
                  TEK COMMUNICATION SARL est une société de premier plan
                  enregistrée en République Démocratique du Congo, positionnée
                  comme un leader dans le secteur minier et les nouvelles
                  technologies de télécommunications. Fondée dans l&apos;esprit
                  de l&apos;entrepreneuriat congolais, notre entreprise incarne
                  la vision présidentielle de favoriser l&apos;émergence
                  d&apos;une nouvelle génération de leaders d&apos;affaires au
                  service de l&apos;économie nationale.
                </p>
                <p className="service-detail-description">
                  Basée à Lubumbashi, dans le Haut-Katanga, nous opérons
                  principalement dans la région du Grand Katanga pour nos
                  activités minières, tout en déployant nos services à l&apos;échelle
                  nationale dans nos autres secteurs. Notre présence
                  internationale est renforcée par un bureau satellite à Londres,
                  enregistré conformément à la loi britannique, qui facilite nos
                  partenariats stratégiques et notre expansion globale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-detail-section alternate"
          id="sous-traitance"
        >
          <div className="container">
            <div className="service-detail">
              <div className="service-detail-content">
                <h2 className="service-detail-title">
                  Sous-Traitance Stratégique
                </h2>
                <p className="service-detail-description">
                  En tant que pont essentiel entre les fournisseurs
                  internationaux et les grandes sociétés minières, TEK
                  COMMUNICATION facilite les transactions complexes et optimise
                  les chaînes d&apos;approvisionnement. Notre portée de services,
                  aussi vaste que les besoins du secteur minier en constante
                  évolution, fait de nous le partenaire idéal pour toute
                  entreprise, locale ou internationale, cherchant à opérer
                  efficacement en RDC.
                </p>
              </div>
              <figure className="service-detail-image">
                <img
                  src={subcontractingImage}
                  alt="Partenariat stratégique dans le secteur minier"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="services-detail-section" id="expertise">
          <div className="container">
            <div className="service-detail">
              <figure className="service-detail-image">
                <img
                  src={expertiseImage}
                  alt="Expertise locale et compréhension du marché congolais"
                  loading="lazy"
                />
              </figure>
              <div className="service-detail-content">
                <h2 className="service-detail-title">Expertise Locale</h2>
                <p className="service-detail-description">
                  Notre atout principal réside dans notre compréhension profonde
                  et notre maîtrise de l&apos;environnement d&apos;affaires
                  congolais. Cette expertise locale est essentielle pour naviguer
                  avec succès dans les méandres d&apos;un marché complexe et
                  exigeant. Nous offrons à nos partenaires non seulement des
                  services de qualité, mais aussi une assurance et une stabilité,
                  grâce à notre connaissance approfondie du terrain et notre
                  réseau établi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="red-banner">
          <div className="container">
            <h2 className="banner-text">PRÊT À COLLABORER AVEC NOUS?</h2>
            <a
              href="/contact"
              className="cta-button"
              style={{ marginTop: "30px", display: "inline-block" }}
            >
              CONTACTEZ-NOUS
            </a>
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
}

