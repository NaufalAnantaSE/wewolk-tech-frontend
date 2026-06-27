import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wewolk.tech"),

  title: {
    default: "Wewolk.tech | Software House Indonesia",
    template: "%s | Wewolk.tech",
  },

  description:
    "Wewolk.tech adalah software house yang menyediakan jasa pembuatan website, aplikasi mobile, sistem informasi, dashboard, API, dan solusi digital untuk bisnis.",

  keywords: [
    "software house",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "web developer",
    "mobile app development",
    "next.js developer",
    "react developer",
    "express.js",
    "custom software",
    "UI UX",
    "Indonesia",
    "Wewolk",
  ],

  authors: [
    {
      name: "Wewolk.tech",
    },
  ],

  creator: "Wewolk.tech",

  publisher: "Wewolk.tech",

  applicationName: "Wewolk.tech",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Wewolk.tech | Software House Indonesia",
    description:
      "Membantu bisnis berkembang melalui website, aplikasi mobile, dashboard, API, dan solusi digital modern.",
    url: "https://wewolk.tech",
    siteName: "Wewolk.tech",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wewolk.tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wewolk.tech | Software House Indonesia",
    description:
      "Website, Mobile Apps, Dashboard, API, dan Solusi Digital Modern.",
    images: ["/og-image.png"],
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

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#050816",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased bg-background dark">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}