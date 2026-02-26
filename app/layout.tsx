import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var key = "patamu-theme";
                  var storedTheme = localStorage.getItem(key);
                  var theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
                  document.documentElement.dataset.theme = theme;
                  document.documentElement.style.colorScheme = theme;
                } catch (error) {
                  document.documentElement.dataset.theme = "dark";
                  document.documentElement.style.colorScheme = "dark";
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
