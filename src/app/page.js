const services = [
  {
    title: "NUMÉRISATION",
    description:
      "Solutions numériques taillées sur mesure pour répondre aux besoins spécifiques de nos clients et améliorer leurs services.",
    image: "/images/matrix-2953869_1280.jpg",
    alt: "Solutions numériques et technologies",
    href: "/services/#numerisation",
  },
  {
    title: "CONSEIL",
    description:
      "Accompagnement expert dans les méandres de l'administration congolaise via des partenariats locaux stratégiques.",
    image: "/images/signature-962359_1280.jpg",
    alt: "Services de conseil et accompagnement stratégique",
    href: "/services/#conseil",
  },
  {
    title: "SOUS-TRAITANCE",
    description:
      "Sous-traitance dans le secteur minier, ainsi que partenariats d'évacuation de remblais des sites identifiés.",
    image: "/images/mining-equipments-440743_1280.jpg",
    alt: "Services de sous-traitance dans le secteur minier",
    href: "/services/#sous-traitance",
  },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main id="main-content">
        <section
          className="hero-section hero-mining"
          aria-labelledby="hero-title"
        >
          <div className="hero-overlay">
            <h1 className="hero-title" id="hero-title">
              TEK COMMUNICATION
            </h1>
            <div className="hero-underline" aria-hidden="true" />
          </div>
        </section>

        <section className="tagline-section">
          <h2 className="tagline">
            Connecter les marchés mondiaux aux opportunités locales
          </h2>
        </section>

        <section
          className="about-intro-section"
          aria-labelledby="about-heading"
        >
          <div className="about-content">
            <p className="about-text">
              Tek Communication agit comme un pont stratégique entre les
              entités internationales et le dynamisme du secteur minier
              congolais, ainsi que d&apos;autres secteurs d'intérêt nationaux. Grâce à une
              expertise locale approfondie et une connaissance fine des réalités
              du terrain, nous accompagnons nos partenaires dans leur
              développement en naviguant avec rigueur et agilité dans un
              environnement complexe et en constante évolution.
              <br />
              Notre approche repose sur une compréhension globale des enjeux
              économiques, réglementaires et culturels propres à la République Démocratique du Congo.
              En proposant des solutions sur mesure et en favorisant des
              partenariats durables, Tek Communication contribue activement à la
              compétitivité, à la croissance responsable et à la réussite de ses
              partenaires.
            </p>
            <a href="/a-propos" className="service-button">
              En savoir plus
            </a>
          </div>
        </section>

        <section
          className="services-section gallery-section"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="services-grid" role="list">
              {services.map((service) => (
                <article className="service-card" role="listitem" key={service.title}>
                  <figure className="service-image">
                    <img src={service.image} alt={service.alt} loading="lazy" />
                  </figure>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href={service.href} className="service-button">
                    EN SAVOIR PLUS
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="office-section">
          <div className="container">
            <figure>
              <img
                src="/images/boardroom-table-5585970_1280.jpg"
                alt="Espace de bureau moderne et professionnel"
                className="office-image"
                loading="lazy"
              />
              <a href="/contact" className="cta-button">
                COMMENÇONS LA CONVERSATION
              </a>
            </figure>
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
