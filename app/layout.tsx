import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
