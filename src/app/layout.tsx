import type { Metadata, Viewport } from "next";
import { Open_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://designnuvio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Design Nuvio — Premium UI/UX & Brand Design Agency",
    template: "%s | Design Nuvio",
  },
  description:
    "Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation. We craft premium digital experiences for SaaS, Fintech, AI, and Healthcare companies.",
  keywords: [
    "UI/UX design agency",
    "brand design agency",
    "product design",
    "SaaS design",
    "dashboard design",
    "mobile app design",
    "brand identity",
    "logo design",
    "design system",
    "UX audit",
    "digital agency",
    "premium design",
    "Design Nuvio",
  ],
  authors: [{ name: "Design Nuvio" }],
  creator: "Design Nuvio",
  publisher: "Design Nuvio",
  applicationName: "Design Nuvio",
  category: "Design Agency",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/logo.svg"],
    apple: [{ url: "/logo.svg" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Design Nuvio",
    title: "Design Nuvio — Premium UI/UX & Brand Design Agency",
    description:
      "Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation. We craft premium digital experiences for SaaS, Fintech, AI, and Healthcare companies.",
    images: [
      {
        url: "/images/case-studies-hero.png",
        width: 1200,
        height: 630,
        alt: "Design Nuvio — Premium UI/UX & Brand Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Nuvio — Premium UI/UX & Brand Design Agency",
    description:
      "Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation.",
    images: ["/images/case-studies-hero.png"],
    creator: "@designnuvio",
    site: "@designnuvio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

// JSON-LD structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Design Nuvio",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation.",
  email: "hello@designnuvio.com",
  sameAs: [
    "https://twitter.com/designnuvio",
    "https://linkedin.com/company/designnuvio",
    "https://dribbble.com/designnuvio",
    "https://instagram.com/designnuvio",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@designnuvio.com",
      availableLanguage: ["English"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Design Nuvio",
  url: siteUrl,
  description:
    "Premium UI/UX & Brand Design Agency crafting digital experiences for SaaS, Fintech, AI, and Healthcare.",
  publisher: {
    "@type": "Organization",
    name: "Design Nuvio",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Design Nuvio",
  description:
    "Premium UI/UX design, brand identity, and digital transformation agency.",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  email: "hello@designnuvio.com",
  priceRange: "$$$",
  areaServed: "Worldwide",
  serviceType: [
    "UI/UX Design",
    "Brand Identity",
    "Product Design",
    "SaaS Design",
    "Dashboard Design",
    "Mobile App Design",
    "Design Systems",
    "UX Audit",
  ],
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${sora.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
