import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/tek.css";
import Navbar from "@/components/Navbar";
import ParallaxHero from "@/components/ParallaxHero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tek Communication",
  description: "Connecter les marchés mondiaux aux opportunités locales en République Démocratique du Congo dans le secteur minier, ainsi que dand les nouvelles technologies.",
  icons: {
    icon: "/tek-favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <ParallaxHero />
        {children}
      </body>
    </html>
  );
}
