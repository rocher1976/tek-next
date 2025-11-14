"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const normalizePath = (path) => {
  if (!path) return "/";
  let normalized = path;
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  normalized = normalized.replace(/index\.html$/i, "");
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized || "/";
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPath = useMemo(() => normalizePath(pathname), [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth > 768;
      if (isDesktop && window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileNavOpen(false);
      }
      handleScroll();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
      if ((event.altKey || event.metaKey) && event.key.toLowerCase() === "m") {
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
          event.preventDefault();
          mainContent.setAttribute("tabindex", "-1");
          mainContent.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`} id="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/" aria-label="Retour à l'accueil - Tek Communication">
              <Image
                src="/images/logo2.png"
                alt="Tek Communication Logo"
                width={60}
                height={60}
                className="logo-img"
                priority
              />
              <span className="logo-text">Tek Communication</span>
            </Link>
          </div>

          <nav
            className={`nav${isMobileNavOpen ? " active" : ""}`}
            id="nav"
            role="navigation"
            aria-label="Menu principal"
          >
            <ul className="nav-list">
              {navLinks.map(({ href, label }) => {
                const normalizedHref = normalizePath(href);
                const isActive = normalizedHref === currentPath;
                return (
                  <li
                    key={href}
                    className={`nav-item${isActive ? " active" : ""}`}
                  >
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className={`mobile-menu-toggle${
              isMobileNavOpen ? " active" : ""
            }`}
            id="mobile-menu-toggle"
            aria-label={
              isMobileNavOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            aria-expanded={isMobileNavOpen}
            aria-controls="nav"
            type="button"
            onClick={toggleMobileNav}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

