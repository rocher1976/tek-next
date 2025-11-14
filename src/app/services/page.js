const heroImage = "/images/business-handshake-7768170_1280.jpg";

const serviceSections = [
  {
    id: "numerisation",
    title: "SOLUTIONS DE TRANSFORMATION NUMÉRIQUE",
    image: "/images/matrix-2953869_1280.jpg",
    alt: "Solutions numériques et technologies",
    description:
      "Nous guidons votre entreprise vers l'avenir en modernisant vos processus grâce à des technologies innovantes.",
    items: [
      "Digitalisation de documents : Nous numérisons vos archives physiques pour un accès instantané, une recherche simplifiée et une sécurité accrue de vos données",
      "Développement d'applications web : Nous concevons et développons des applications sur mesure, intuitives et performantes, pour répondre à vos besoins spécifiques (gestion interne, communication, e-commerce, etc.)",
      "Solutions SaaS (Software as a Service) : Nous proposons des solutions logicielles hébergées qui vous permettent de bénéficier des dernières innovations technologiques sans investissements lourds en infrastructure",
    ],
    reverse: false,
  },
  {
    id: "conseil",
    title: "SOLUTIONS POUR LE SECTEUR MINIER",
    image: "/images/analysis-1841158_1280.jpg",
    alt: "Services de conseil et accompagnement stratégique",
    description:
      "En tant que partenaires stratégiques, nous offrons une expertise ciblée pour les acteurs du secteur minier, de la gestion des ressources à la logistique.",
    items: [
      "Valorisation des rejets miniers : Nous identifions et gérons l'évacuation des rejets à haute teneur, les transformant en une source de valeur",
      "Partenariats stratégiques : Nous servons de pont essentiel entre les fournisseurs internationaux et les sociétés minières, garantissant une chaîne d'approvisionnement fluide et fiable",
    ],
    reverse: true,
  },
  {
    id: "sous-traitance",
    title: "SOUS-TRAITANCE",
    image: "/images/sous-traitance.jpg",
    alt: "Services de sous-traitance dans le secteur minier",
    description:
      "Sous-traitance dans le secteur minier, ainsi que partenariats d'évacuation de remblais sur nos propres sites. Nous offrons des services complets de sous-traitance avec une expertise reconnue dans le secteur minier congolais.",
    items: [
      "Services de terrassement et d'excavation",
      "Évacuation et gestion de remblais miniers",
      "Location d'équipements lourds",
      "Maintenance et réparation d'équipements",
      "Support logistique pour opérations minières",
    ],
    reverse: false,
  },
  {
    id: "cybersecurite",
    title: "CYBERSÉCURITÉ ET CONTRÔLE D'ACCÈS",
    image: "/images/albert-stoynov-dyUp7WPu5q4-unsplash.jpg",
    alt: "Cybersécurité et contrôle d'accès",
    description:
      "La sécurité de vos données est notre priorité absolue. Nous mettons en place des systèmes robustes pour protéger vos informations sensibles.",
    items: [
      "Contrôle d'accès basé sur les rôles (RBAC) : Nous concevons et implémentons des systèmes d'authentification et d'autorisation précis, garantissant que chaque utilisateur a un accès strictement limité aux informations nécessaires à sa fonction",
      "Infrastructure sécurisée : Nous vous conseillons sur les meilleures pratiques et les technologies pour sécuriser vos réseaux et vos bases de données contre les menaces",
    ],
    reverse: true,
  },
];

export const metadata = {
  title: "Tek - Services",
  description:
    "Découvrez les services Tek Communication : numérisation, solutions minières, sous-traitance et cybersécurité.",
};

export default function ServicesPage() {
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
              NOS SERVICES
            </h1>
          </div>
        </section>

        <section className="tagline-section">
          <h2 className="tagline">Des solutions adaptées à vos besoins</h2>
        </section>

        <section className="about-intro-section">
          <div className="container">
            <div className="about-content">
              <p className="about-text">
                Chez TEK COMMUNICATION, nous allons au-delà de la simple
                sous-traitance minière pour offrir une gamme complète de
                solutions technologiques de pointe. Notre mission est
                d&apos;optimiser l&apos;efficacité et de renforcer la sécurité de
                vos opérations, quelle que soit la taille de votre entreprise.
              </p>
            </div>
          </div>
        </section>

        {serviceSections.map((section, index) => {
          const { id, title, image, alt, description, items, reverse } = section;
          const isAlternate = index % 2 === 0;
          return (
            <article
              className={
                isAlternate
                  ? "services-detail-section alternate"
                  : "services-detail-section"
              }
              id={id}
              aria-labelledby={`${id}-title`}
              key={id}
            >
              <div className="container">
                <div className="service-detail">
                  {reverse ? (
                    <>
                      <div className="service-detail-content">
                        <h2 className="service-detail-title" id={`${id}-title`}>
                          {title}
                        </h2>
                        <p className="service-detail-description">
                          {description}
                        </p>
                        <ul className="service-detail-list">
                          {items.map((item, itemIndex) => (
                            <li key={id + "-item-" + itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <figure className="service-detail-image">
                        <img src={image} alt={alt} loading="lazy" />
                      </figure>
                    </>
                  ) : (
                    <>
                      <figure className="service-detail-image">
                        <img src={image} alt={alt} loading="lazy" />
                      </figure>
                      <div className="service-detail-content">
                        <h2 className="service-detail-title" id={`${id}-title`}>
                          {title}
                        </h2>
                        <p className="service-detail-description">
                          {description}
                        </p>
                        <ul className="service-detail-list">
                          {items.map((item, itemIndex) => (
                            <li key={id + "-item-" + itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
            );
          }
        )}

        <section className="red-banner">
          <div className="container">
            <h2 className="banner-text">DISCUTONS DE VOTRE PROJET</h2>
            <a
              href="/contact"
              className="cta-button"
              style={{ marginTop: "30px", display: "inline-block" }}
            >
              DEMANDER UN DEVIS
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

