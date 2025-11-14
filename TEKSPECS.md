# STYLE.CSS

/* ========================================
   RESET & BASE STYLES
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Logo-inspired color palette */
  --primary-blue: #4a9eff;      /* Tek Blue - Primary brand color */
  --primary-red: #e63946;       /* Accent color for CTAs */
  --dark-text: #1a1a1a;
  --light-gray: #f5f5f5;
  --medium-gray: #d3d3d3;
  --white: #ffffff;
  --corporate-gray: #2c3e50;
  --text-gray: #555;
  --border-gray: #e0e0e0;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
  --header-height: 72px;
  
  /* Blue theme variations for depth */
  --blue-light: #6eb1ff;
  --blue-dark: #2d6fd1;
  --blue-accent-shadow: rgba(74, 158, 255, 0.2);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: var(--dark-text);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ========================================
   SKIP NAVIGATION LINK
   ======================================== */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--primary-red);
  color: var(--white);
  padding: 12px 24px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
  border-radius: 0 0 4px 0;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid var(--dark-text);
  outline-offset: 2px;
}

/* ========================================
   VISUALLY HIDDEN (FOR SCREEN READERS)
   ======================================== */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ========================================
   SECTION HEADINGS
   ======================================== */
.section-heading {
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;
  letter-spacing: 2px;
  color: var(--corporate-gray);
  position: relative;
  padding-bottom: 20px;
}

.section-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-blue);
}

/* ========================================
   STICKY HEADER (transparent at top, white on scroll)
   ======================================== */
.header {
  height: var(--header-height);
  background-color: rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 40;
  transition: background-color 200ms ease, box-shadow 200ms ease;
  padding: 10px 0;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  /* -webkit-backdrop-filter: blur(6px); */
  /* backdrop-filter: blur(6px); */
}

/* White background when scrolled */
.header.scrolled {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--white);
  transition: color 200ms ease;
}

.logo-img {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  /* padding: 8px; */
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: var(--white);
  box-sizing: border-box;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--white);
  transition: color 200ms ease;
}

/* Logo text changes to dark when header is scrolled */
.header.scrolled .logo a,
.header.scrolled .logo-text {
  color: var(--dark-text);
}

/* Add dark grey border to logo when header background is white */
.header.scrolled .logo-img {
  border: 0.1px solid var(--corporate-gray);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 0;
}

/* Nav links: white when header is transparent, dark when scrolled */
.header .nav-item a {
  transition: color 200ms ease, background-color 200ms ease;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  color: var(--white);
  text-decoration: none;
  background-color: transparent;
}

/* When header is scrolled, nav links are dark */
.header.scrolled .nav-item a {
  color: var(--dark-text);
}

/* Active nav item via aria-current */
.nav-list a[aria-current="page"] {
  background-color: var(--primary-blue);
  color: var(--white);
}

/* Ensure active link stays white when header background is white */
.header.scrolled .nav-list a[aria-current="page"] {
  background-color: var(--primary-blue);
  color: var(--white);
}

/* Hover/focus for non-active items when header is transparent */
.header:not(.scrolled) .nav-item:not(.active) > a:hover,
.header:not(.scrolled) .nav-item:not(.active) > a:focus {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  text-decoration: none;
  outline: none;
}

/* Hover/focus for non-active items when header is scrolled */
.header.scrolled .nav-item:not(.active) > a:hover,
.header.scrolled .nav-item:not(.active) > a:focus {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--dark-text);
  text-decoration: none;
  outline: none;
}

/* Dropdown styles */
.nav-item.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background-color: var(--white);
  min-width: 220px;
  border: 1px solid var(--border-gray);
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  padding: 8px 0;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
}

.dropdown:hover .dropdown-menu,
.dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

/* Also show when dropdown has programmatic 'open' class (for desktop hover JS) */
.nav-item.dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 0.85rem 1.25rem;
  color: var(--dark-text);
  text-decoration: none;
  transition: background-color 200ms ease, color 200ms ease;
  white-space: nowrap;
  text-align: center;
}

/* Ensure dropdown links are visible on both header states */
.header .dropdown-menu a,
.nav .dropdown-menu a {
  color: var(--dark-text);
}

.dropdown-menu a:hover,
.dropdown-menu a:focus,
.nav .dropdown-menu li a:hover,
.nav .dropdown-menu li a:focus {
  background-color: rgba(31, 76, 143, 0.18);
  color: #0f2f68 !important;
  text-decoration: none;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.mobile-menu-toggle span {
  width: 20px;
  height: 2px;
  background-color: var(--white);
  transition: all 0.3s ease;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .mobile-menu-toggle span {
    background-color: var(--dark-text);
  }
}

/* Mobile menu toggle changes to dark when scrolled */
.header.scrolled .mobile-menu-toggle span {
  background-color: var(--dark-text);
}

/* ========================================
   HERO (image starts at very top, header overlays)
   ======================================== */
.hero-mining {
  position: relative;
  margin-top: calc(var(--header-height) * -1);
  padding-top: var(--header-height);
  min-height: 100vh;
  background-image: url("../images/dragline-195440_1280.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  will-change: background-position;
}

/* overlay centered in the middle of the hero */
.hero-overlay {
  position: absolute;
  top: var(--header-height);
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: none;
  padding: 20px;
  z-index: 30;
  color: var(--white);
}

/* Dark overlay above the background image */
.hero-mining::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.35) 40%,
    rgba(0, 0, 0, 0.35) 60%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 20;
  pointer-events: none;
}

@media (min-width: 968px) {
  /* Fallback parallax for desktops where background-attachment works well */
  .hero-mining {
    background-attachment: fixed;
  }
}

.hero-title {
  color: var(--white);
  font-size: clamp(34px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: 1px;
  z-index: 31;
  pointer-events: auto;
}

.hero-underline {
  margin-top: 0.75rem;
  width: clamp(140px, 32vw, 360px);
  height: 6px;
  background: var(--primary-blue);
  border-radius: 999px;
  z-index: 31;
}

.tagline-section {
  background-color: var(--light-gray);
  padding: clamp(32px, 6vw, 48px) 0;
}

.tagline {
  text-align: center;
  font-size: clamp(20px, 4vw, 30px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--dark-text);
}

/* Meeting Room Hero */
.hero-meeting {
  background-color: var(--light-gray);
  min-height: auto;
  padding: 60px 0;
}

.hero-content {
  text-align: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
  border-radius: 8px;
}

/* ========================================
   BUTTONS
   ======================================== */
.cta-button,
.service-button {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  border: 2px solid var(--dark-text);
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  font-family: inherit;
}

.cta-button {
  background-color: var(--white);
  color: var(--dark-text);
  margin: 60px 0;
}

.cta-button:hover,
.cta-button:focus {
  background-color: var(--dark-text);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  outline: none;
}

.cta-button:focus-visible {
  outline: 3px solid var(--primary-red);
  outline-offset: 2px;
}

.cta-button-red {
  background-color: var(--primary-red);
  color: var(--white);
  border: 2px solid var(--primary-red);
  padding: 15px 40px;
}

.cta-button-red:hover,
.cta-button-red:focus {
  background-color: #d32f3e;
  border-color: #d32f3e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
  outline: none;
}

.cta-button-red:focus-visible {
  outline: 3px solid var(--dark-text);
  outline-offset: 2px;
}

.service-button {
  background-color: var(--primary-blue);
  color: var(--white);
  border: 2px solid var(--primary-blue);
  padding: 12px 30px;
  font-size: 14px;
}

.service-button:hover,
.service-button:focus {
  background-color: var(--blue-dark);
  border-color: var(--blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--blue-accent-shadow);
  outline: none;
}

.service-button:focus-visible {
  outline: 3px solid var(--dark-text);
  outline-offset: 2px;
}

/* ========================================
   BANNER (Blue themed)
   ======================================== */
.red-banner {
  background-color: var(--primary-blue);
  padding: 80px 0;
}

.banner-text {
  text-align: center;
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* ========================================
   SERVICES SECTION
   ======================================== */
.services-section {
  padding: clamp(60px, 8vw, 90px) 0;
  background-color: var(--white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(24px, 4vw, 40px);
}

.service-card {
  text-align: center;
  background-color: var(--white);
  border-radius: 12px;
  padding: clamp(20px, 4vw, 32px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.service-image {
  width: 100%;
  height: clamp(220px, 28vw, 300px);
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}

.service-title {
  font-size: clamp(20px, 2.5vw, 24px);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.service-description {
  font-size: clamp(15px, 2vw, 16px);
  line-height: 1.8;
  margin-bottom: 25px;
  color: var(--text-gray);
}

/* ========================================
   OFFICE SECTION
   ======================================== */
.office-section {
  padding: 60px 0;
  background-color: var(--white);
  text-align: center;
}

.office-section .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  position: relative; /* allow absolute positioning of button over image */
}

.office-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
}

/* Overlay the CTA button centered over the office image */
.office-section .cta-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: auto;
  padding: clamp(12px, 2vw, 18px) clamp(28px, 5vw, 42px);
  width: min(80%, 320px);
}

@media (max-width: 768px) {
  .office-section .cta-button {
    width: min(88%, 280px);
    font-size: 14px;
  }
}

/* ========================================
   ABOUT INTRO SECTION
   ======================================== */
.about-intro-section {
  padding: 80px 0;
  background-color: var(--white);
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.about-text {
  font-size: 18px;
  line-height: 1.9;
  color: #333;
  margin: clamp(24px, 5vw, 36px) auto;
  text-align: justify;
  padding: 0 clamp(18px, 5vw, 36px);
}

/* ========================================
   GALLERY SECTION
   ======================================== */
.gallery-section {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(20px, 3vw, 30px);
}

.gallery-item {
  height: clamp(200px, 26vw, 300px);
  overflow: hidden;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* ========================================
   FOOTER
   ======================================== */
.footer {
  background-color: var(--corporate-gray);
  padding: 40px 0;
  /* border-top: 4px solid var(--primary-red); */
  margin-top: 60px;
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: var(--white);
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */
@media (max-width: 968px) {
  .services-grid,
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .hero-title {
    font-size: 48px;
  }

  .banner-text {
    font-size: 32px;
  }

  .tagline {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  /* Mobile Navigation */
  .header {
    background-color: var(--white);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .nav {
    position: fixed;
    top: 80px;
    right: -100%;
    width: 180px;
    height: calc(100vh - 80px);
    background-color: var(--white);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 999;
  }

  .nav.active {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 5px;
    padding: 20px 0;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item a {
    border-radius: 0;
    padding: 12px 18px;
    color: var(--dark-text);
    background-color: transparent;
  }

  .dropdown-menu {
    position: static;
    min-width: 100%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: block;
    pointer-events: auto;
  }

  .dropdown-menu a {
    padding: 18px 26px;
    color: var(--dark-text);
    text-align: center;
  }

  .header .nav-item a {
    color: var(--dark-text);
  }

  .nav-item.dropdown .dropdown-toggle {
    padding: 12px 20px;
    width: 100%;
    text-align: left;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  /* Content Adjustments */
  .services-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  p {
    text-align: justify;
  }

  .hero-title {
    font-size: 36px;
    letter-spacing: 2px;
  }

  .hero-mining {
    min-height: 80vh;
  }

  .hero-overlay {
    padding: 24px 16px;
  }

  .hero-underline {
    width: clamp(160px, 45vw, 260px);
    height: 4px;
  }

  .banner-text {
    font-size: 24px;
    letter-spacing: 1px;
  }

  .tagline {
    font-size: 20px;
  }

  .about-text {
    font-size: 16px;
  }

  .services-grid {
    gap: 24px;
  }

  .service-card {
    padding: 24px;
  }

  .service-image {
    height: 220px;
  }

  .about-intro-section {
    padding: 60px 0;
  }

  .office-section {
    padding: 50px 0;
  }

  .office-section .cta-button {
    width: min(88%, 280px);
    padding: 12px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }

  .hero-underline {
    width: clamp(140px, 60vw, 200px);
    height: 3px;
  }

  .banner-text {
    font-size: 20px;
  }

  .cta-button,
  .cta-button-red {
    padding: 12px 30px;
    font-size: 14px;
  }

  .service-card {
    padding: 20px;
  }

  .service-image {
    height: 200px;
  }

  .service-title {
    font-size: 18px;
  }

  .office-section .cta-button {
    padding: 12px 18px;
  }
}

# PAGES.CSS

/* ========================================
   PAGE-SPECIFIC STYLES
   ======================================== */

/* Page Hero with parallax-ready background */
.page-hero {
    position: relative;
    background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* Pull hero under sticky header so transparent header shows page background */
    margin-top: calc(var(--header-height) * -1);
    padding: calc(80px + var(--header-height)) 0 clamp(60px, 9vw, 100px);
    text-align: center;
    will-change: background-position;
}

/* Dark overlay similar to home hero */
.page-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.35) 40%,
        rgba(0, 0, 0, 0.35) 60%,
        rgba(0, 0, 0, 0.55) 100%
    );
    z-index: 0;
    pointer-events: none;
}

.page-hero > .container { position: relative; z-index: 1; }

@media (min-width: 968px) {
    /* Desktop fallback */
    .page-hero { background-attachment: fixed; }
}

.page-title {
    font-size: clamp(32px, 6vw, 48px);
    font-weight: 700;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
    position: relative;
    padding-bottom: 20px;
}

.page-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(140px, 28vw, 220px);
    height: 4px;
    background-color: var(--primary-blue);
}

.page-subtitle {
    font-size: clamp(16px, 3.8vw, 20px);
    color: var(--white);
    opacity: 0.9;
}

/* Section Heading */
.section-heading {
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 60px 0 40px;
    text-align: center;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 20px;
}

.section-heading::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-blue);
}

/* Values Grid (About Page) */
.values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
}

.value-card {
    background-color: var(--light-gray);
    padding: 30px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.value-card h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-blue);
}

.value-card p {
    font-size: 16px;
    line-height: 1.7;
    color: #555;
}

/* Service Detail Section (Services Page) */
.services-detail-section {
    padding: clamp(60px, 9vw, 90px) 0;
}

.services-detail-section.alternate {
    background-color: var(--light-gray);
}

.service-detail {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(32px, 6vw, 60px);
    align-items: center;
}

.service-detail-image {
    width: 100%;
}

.service-detail-image img {
    width: 100%;
    height: clamp(260px, 34vw, 400px);
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-detail-title {
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 25px;
    letter-spacing: 2px;
}

.service-detail-description {
    font-size: 18px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 25px;
}

.service-detail-list {
    list-style: none;
    padding-left: 0;
}

.service-detail-list li {
    font-size: 16px;
    line-height: 2;
    color: #555;
    padding-left: 30px;
    position: relative;
}

.service-detail-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary-blue);
    font-weight: bold;
    font-size: 18px;
}

/* Projects Section (Projects Page) */
.projects-section {
    padding: 60px 0 80px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: clamp(24px, 4vw, 40px);
    margin-bottom: 60px;
}

.project-card {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.project-image {
    height: clamp(200px, 30vw, 260px);
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-content {
    padding: 30px;
}

.project-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--dark-text);
}

.project-description {
    font-size: 15px;
    line-height: 1.7;
    color: #555;
    margin-bottom: 20px;
}

.project-tag {
    display: inline-block;
    background-color: var(--primary-blue);
    color: var(--white);
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
}

/* Contact Section (Contact Page) */
.contact-section {
    padding: clamp(60px, 9vw, 90px) 0;
    background-color: var(--light-gray);
}

.contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
    gap: clamp(32px, 6vw, 60px);
    margin-top: 40px;
}

.contact-form-wrapper,
.contact-info-wrapper {
    background-color: var(--white);
    padding: clamp(28px, 4vw, 40px);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Contact Form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--dark-text);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px 15px;
    border: 2px solid var(--medium-gray);
    border-radius: 4px;
    font-size: 15px;
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px var(--blue-accent-shadow);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
    border-color: var(--primary-blue);
    border-width: 2px;
}

.form-group input[aria-invalid="true"],
.form-group select[aria-invalid="true"],
.form-group textarea[aria-invalid="true"] {
    border-color: var(--primary-blue);
    border-width: 2px;
}

.form-group textarea {
    resize: vertical;
}

/* Contact Info */
.contact-info {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 30px;
}

.contact-info-item h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--dark-text);
}

.contact-info-item p {
    font-size: 15px;
    line-height: 1.7;
    color: #555;
}

.social-links {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 2px solid var(--light-gray);
}

.social-links h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icon {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--primary-blue);
    color: var(--white);
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.social-icon:hover,
.social-icon:focus {
    background-color: var(--blue-dark);
    transform: translateY(-2px);
    outline: none;
}

.social-icon:focus-visible {
    outline: 3px solid var(--dark-text);
    outline-offset: 2px;
}

/* Form Success Message */
.form-success {
    background-color: #4caf50;
    color: var(--white);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    font-weight: 600;
    box-shadow: var(--shadow-md);
}

/* Contact Info Links */
.contact-info-item a {
    color: var(--primary-blue);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-info-item a:hover,
.contact-info-item a:focus {
    color: var(--blue-dark);
    text-decoration: underline;
    outline: none;
}

/* ========================================
   RESPONSIVE DESIGN FOR PAGES
   ======================================== */
@media (max-width: 968px) {
    .service-detail {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .service-detail-content {
        text-align: left;
    }

    .services-detail-section.alternate .service-detail-image {
        order: -1;
    }

    .values-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .section-heading {
        font-size: 26px;
    }
}

@media (max-width: 768px) {
    .page-hero {
        padding: calc(70px + var(--header-height)) 0 56px;
    }

    .services-detail-section {
        padding: 60px 0;
    }

    .service-detail {
        gap: 32px;
    }

    .service-detail-image img {
        height: clamp(220px, 50vw, 320px);
    }

    .service-detail-title {
        font-size: 26px;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .contact-form-wrapper,
    .contact-info-wrapper {
        padding: 28px 20px;
    }
}

@media (max-width: 560px) {
    .page-title::after {
        height: 3px;
    }

    .service-detail-list li {
        padding-left: 26px;
        font-size: 15px;
    }

    .contact-info-item h3 {
        font-size: 15px;
    }

    .contact-info-item p,
    .contact-info-item a {
        font-size: 15px;
    }

    .projects-section {
        padding: 50px 0 70px;
    }
}


# MAIN.JS

// Mobile Menu Toggle with Accessibility
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const nav = document.getElementById("nav");

if (mobileMenuToggle && nav) {
  mobileMenuToggle.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.classList.toggle("active");
    nav.classList.toggle("active");
    this.setAttribute("aria-expanded", !isExpanded);
    this.setAttribute(
      "aria-label",
      !isExpanded
        ? "Fermer le menu de navigation"
        : "Ouvrir le menu de navigation"
    );
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      nav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute(
        "aria-label",
        "Ouvrir le menu de navigation"
      );
    }
  });

  // Close mobile menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      nav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute(
        "aria-label",
        "Ouvrir le menu de navigation"
      );
      mobileMenuToggle.focus();
    }
  });
}

// Dropdown menu with Accessibility
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

if (dropdownToggle && dropdownMenu) {
  function toggleDropdown(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownMenu.classList.add("active");
      dropdownToggle.setAttribute("aria-expanded", "true");
    }
  }

  dropdownToggle.addEventListener("click", toggleDropdown);

  // Keyboard navigation for dropdown
  dropdownToggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(e);
    }
  });

  // Desktop hover: keep open when moving from link to menu, close on mouseout
  const dropdownItem = dropdownToggle.closest('.nav-item.dropdown');
  if (dropdownItem) {
    let closeTimeoutId = null;

    function openDropdown() {
      dropdownItem.classList.add('open');
      dropdownToggle.setAttribute('aria-expanded', 'true');
    }

    function scheduleClose() {
      // small delay to allow diagonal mouse movements without flicker
      closeTimeoutId = window.setTimeout(() => {
        dropdownItem.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }, 120);
    }

    function cancelClose() {
      if (closeTimeoutId) {
        window.clearTimeout(closeTimeoutId);
        closeTimeoutId = null;
      }
    }

    // Only apply on desktop widths
    function bindDesktopHover() {
      if (window.innerWidth > 768) {
        dropdownItem.addEventListener('mouseenter', openDropdown);
        dropdownItem.addEventListener('mouseleave', scheduleClose);
        dropdownMenu.addEventListener('mouseenter', cancelClose);
        dropdownMenu.addEventListener('mouseleave', scheduleClose);
      }
    }

    function updateDropdownForViewport() {
      if (window.innerWidth <= 768) {
        dropdownItem.classList.remove('open');
        dropdownMenu.classList.add('active');
        dropdownToggle.setAttribute('aria-expanded', 'true');
      } else {
        dropdownMenu.classList.remove('active');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    }

    bindDesktopHover();
    updateDropdownForViewport();
    window.addEventListener('resize', updateDropdownForViewport);
    document.addEventListener('click', (event) => {
      if (
        window.innerWidth > 768 &&
        !dropdownItem.contains(event.target)
      ) {
        dropdownItem.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    }, { passive: true });
  }
}

// Ensure dropdown menus remain active on mobile navigation regardless of which dropdown is present
function syncMobileDropdownState() {
  const shouldForceOpen = window.innerWidth <= 768;

  dropdownItems.forEach((item) => {
    const toggle = item.querySelector(".dropdown-toggle");
    const menu = item.querySelector(".dropdown-menu");
    if (!toggle || !menu) return;

    if (shouldForceOpen) {
      menu.classList.add("active");
      toggle.setAttribute("aria-expanded", "true");
    } else if (!item.classList.contains("open")) {
      menu.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

window.addEventListener("resize", syncMobileDropdownState);
syncMobileDropdownState();

// Smooth scrolling for anchor links with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || !href) return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL without triggering scroll
      history.pushState(null, null, href);

      // Focus the target element for accessibility
      target.setAttribute("tabindex", "-1");
      target.focus();
      target.addEventListener(
        "blur",
        function () {
          target.removeAttribute("tabindex");
        },
        { once: true }
      );
    }
  });
});

// Button navigation handlers (buttons are now links but keeping for backwards compatibility)
document
  .querySelectorAll(
    "button.cta-button, button.cta-button-red, button.service-button"
  )
  .forEach((button) => {
    button.addEventListener("click", function () {
      const href = this.getAttribute("data-href");
      if (href) {
        window.location.href = href;
      }
    });
  });

// Keyboard navigation improvements
document.addEventListener("keydown", function (e) {
  // Skip to main content with Alt+M (or Cmd+M on Mac)
  if ((e.altKey || e.metaKey) && e.key === "m") {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1");
      mainContent.focus();
    }
  }
});

// Improve form accessibility
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    const requiredFields = contactForm.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.setAttribute("aria-invalid", "true");
        field.classList.add("error");
      } else {
        field.removeAttribute("aria-invalid");
        field.classList.remove("error");
      }
    });

    if (isValid) {
      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className = "form-success";
      successMessage.setAttribute("role", "alert");
      successMessage.textContent =
        "Merci pour votre message! Nous vous répondrons dans les plus brefs délais.";
      contactForm.insertAdjacentElement("beforebegin", successMessage);

      // Focus the success message
      successMessage.setAttribute("tabindex", "-1");
      successMessage.focus();

      // Reset form
      contactForm.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    } else {
      // Focus first invalid field
      const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
    }
  });
}

// Lazy loading images fallback for older browsers
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const SCROLL_THRESHOLD = 40; // trigger after scrolling 40px

  function updateHeaderState() {
    const isDesktop = window.innerWidth > 768;
    if (isDesktop && window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("scrolled");
    } else if (!isDesktop) {
      header.classList.remove("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // initial check + listen
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  // Parallax effect for hero backgrounds (home + other pages)
  const parallaxSections = Array.from(
    document.querySelectorAll('.hero-mining, .page-hero')
  );
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (parallaxSections.length && !prefersReducedMotion) {
    let ticking = false;

    function updateParallax() {
      const y = window.scrollY * 0.3; // smaller factor = slower movement
      parallaxSections.forEach((el) => {
        // Offset from vertical center so images stay focused on center
        el.style.backgroundPosition = `center calc(100% ${y === 0 ? '' : y > 0 ? `- ${y}px` : `+ ${Math.abs(y)}px`})`;
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    // Initial position and listener
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Navigation: set only the matching nav-item to active based on current page
  const navLinks = document.querySelectorAll(".nav-list a");

  const normalizePath = (path) => {
    if (!path) return "/";
    let pathname;
    try {
      pathname = new URL(path, window.location.origin).pathname;
    } catch (e) {
      pathname = path;
    }
    pathname = pathname.replace(/index\.html$/i, "");
    if (!pathname.startsWith("/")) {
      pathname = `/${pathname}`;
    }
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.replace(/\/+$/, "/");
    }
    if (!pathname.endsWith("/")) {
      pathname = `${pathname}/`;
    }
    return pathname;
  };

  const currentPath = normalizePath(window.location.pathname);

  navLinks.forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) return;

    const targetPath = normalizePath(href);
    const li = anchor.closest(".nav-item");
    if (!li) return;

    li.classList.remove("active");
    anchor.removeAttribute("aria-current");

    if (currentPath === targetPath) {
      li.classList.add("active");
      anchor.setAttribute("aria-current", "page");
    }
  });

  // Dynamically update copyright year
  const copyrightYearElements = document.querySelectorAll(".copyright-year");
  const currentYear = new Date().getFullYear();
  
  copyrightYearElements.forEach((element) => {
    element.textContent = currentYear.toString();
  });
});
