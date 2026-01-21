import { AnimationProvider } from "@/components/animations/AnimationProvider";
import { MusicProvider } from "@/components/music/MusicProvider";
import { amalfi, ivyMode } from "@/utils/fonts";
import type { Metadata } from "next";
import { Cinzel_Decorative, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
  description: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
  keywords: [
    "undangan",
    "wedding",
    "undangan digital",
    "undangan online",
    "wedding invitation",
    "template undangan",
    "template undangan pernikahan",
    "undangan pernikahan",
    "template undangan online",
    "wedding invitation github",
    "template website",
    "template website undangan pernikahan",
  ],
  authors: [{ name: "dewanakl" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
    description: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
    url: "https://wedding-invitation-ifha-jefri.vercel.app",
    siteName: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://wedding-invitation-ifha-jefri.vercel.app/images/cover-1.webp",
        secureUrl:
          "https://wedding-invitation-ifha-jefri.vercel.app/images/cover-1.webp",
        type: "image/webp",
        width: 980,
        height: 980,
        alt: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
      },
    ],
  },

  /* === EXTRA META (TIDAK ADA FIELD KHUSUS) === */
  other: {
    author: "dewanakl",
    language: "id",
    "og:keywords":
      "undangan, wedding, undangan digital, undangan online, wedding invitation, template undangan, template undangan pernikahan, undangan pernikahan, template undangan online, wedding invitation github, template website, template website undangan pernikahan",
  },

  alternates: {
    canonical: "https://wedding-invitation-ifha-jefri.vercel.app/",
  },

  applicationName: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",

  icons: {
    icon: "https://wedding-invitation-ifha-jefri.vercel.app/assets/favicon.ico",
    shortcut: "https://wedding-invitation-ifha-jefri.vercel.app/assets/favicon.ico",
    apple: "https://wedding-invitation-ifha-jefri.vercel.app/assets/images/icon-192x192.png",
  },

  appleWebApp: {
    capable: true,
    title: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${ivyMode.variable}
          ${amalfi.variable}
          ${roboto.variable}
          ${cinzel.variable}
          antialiased
        `}
      >
        <MusicProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </MusicProvider>
      </body>
    </html>
  );
}
