import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import SmoothScrollProvider from "./smooth-scroll-provider";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const GA_MEASUREMENT_ID = "G-3FHWVHDTZC";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.patamurestaurants.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Patamu Restaurant & Lodge",
      inLanguage: "en",
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      url: SITE_URL,
      name: "Patamu Restaurant & Lodge",
      description:
        "Authentic Tanzanian cuisine, bush hot lunches, and comfortable accommodation in Karatu Town.",
      image: `${SITE_URL}/images/patamu.webp`,
      servesCuisine: ["African", "International", "Tanzanian"],
      telephone: "+255620600100",
      email: "reservations@patamurestaurants.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karatu Town",
        addressRegion: "Arusha Region",
        addressCountry: "TZ",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.2,
        reviewCount: 94,
      },
      hasMenu: `${SITE_URL}/menu`,
      sameAs: ["https://www.instagram.com/patamu_lodge/"],
    },
  ],
};

export const metadata: Metadata = {
  title: "Patamu Restaurant & Lodge | Karatu, Tanzania",
  description:
    "Authentic Tanzanian cuisine, bush hot lunches, and comfortable accommodation in Karatu Town.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
