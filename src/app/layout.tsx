import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

/** Body / UI typeface → exposed as the --font-poppins CSS variable. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/** Display / heading typeface — the client's ArianeCoachella, self-hosted. */
const ariane = localFont({
  src: [
    {
      path: "../../public/fonts/ArianeCoachella-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArianeCoachella-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ariane",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  // Icons are provided by file-based metadata (app/icon.svg, app/apple-icon.png,
  // app/favicon.ico) and the manifest by app/manifest.ts.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// Responsive viewport + brand navy for the mobile browser chrome.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e2038",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ariane.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
        >
          Skip to content
        </a>
        <header className="fixed inset-x-0 top-0 z-50">
          <TopBar />
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
