import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-data";
import "lenis/dist/lenis.css";
import "../components/BounceCards.css";
import "../components/BorderGlow.css";
import "../components/FlowingMenu.css";
import "../components/ProfileCard.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Alessandro Fontana - Freelance Full Stack Developer",
    template: "%s | Alessandro Fontana",
  },
  description:
    "Portfolio premium di Alessandro Fontana, freelance full stack developer in Italia specializzato in web development, WordPress, React, backend systems, e-commerce, AI automations e AI Engineering. Head of Software Development and AI Integrations presso Hulk International Broker dal 2026.",
  keywords: [
    "freelance full stack developer",
    "web developer Italy",
    "AI engineer",
    "AI automation developer",
    "WordPress developer",
    "React developer",
    "custom web solutions",
    "business website development",
    "Next.js developer",
    "sviluppatore full stack freelance",
    "sviluppatore AI automation",
    "sviluppatore WordPress Italia",
  ],
  authors: [{ name: "Alessandro Fontana", url: siteConfig.url }],
  creator: "Alessandro Fontana",
  publisher: "Alessandro Fontana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Alessandro Fontana",
    title: "Alessandro Fontana - Freelance Full Stack Developer",
    description:
      "High-end web products, business systems, WordPress, e-commerce, and AI-assisted automations by a freelance full stack developer and AI integrations lead in Italy.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alessandro Fontana portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Fontana - Freelance Full Stack Developer",
    description:
      "Premium web development, custom platforms, e-commerce, and AI automation systems.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
