import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Astra Studio — Premium UI/UX & Brand Design Agency",
    template: "%s | Astra Studio",
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
  ],
  authors: [{ name: "Astra Studio" }],
  creator: "Astra Studio",
  publisher: "Astra Studio",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Astra Studio",
    title: "Astra Studio — Premium UI/UX & Brand Design Agency",
    description:
      "Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astra Studio — Premium UI/UX & Brand Design Agency",
    description:
      "Award-winning design agency specializing in UI/UX design, brand identity, and digital transformation.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
