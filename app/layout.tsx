import { AnimationProvider } from "@/components/animations/AnimationProvider";
import { MusicProvider } from "@/components/music/MusicProvider";
import { amalfi, ivyMode } from "@/utils/fonts";
import { Cinzel_Decorative, Poppins, Roboto } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
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
  authors: [{ name: "fit.tra_" }],
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
        url: "https://wedding-invitation-ifha-jefri.vercel.app/images/cover.jpg",
        secureUrl:
          "https://wedding-invitation-ifha-jefri.vercel.app/images/cover.jpg",
        type: "image/jpeg",
        width: 500,
        height: 500,
        alt: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
      },
      {
        url: "https://wedding-invitation-ifha-jefri.vercel.app/images/cover.png",
        secureUrl:
          "https://wedding-invitation-ifha-jefri.vercel.app/images/cover.png",
        type: "image/png",
        width: 500,
        height: 500,
        alt: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
      },
      {
        url: "https://wedding-invitation-ifha-jefri.vercel.app/images/cover.webp",
        secureUrl:
          "https://wedding-invitation-ifha-jefri.vercel.app/images/cover.webp",
        type: "image/webp",
        width: 500,
        height: 500,
        alt: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",
      },
    ],
  },

  other: {
    author: "fit.tra_",
    language: "id",
    "og:keywords":
      "undangan, wedding, undangan digital, undangan online, wedding invitation, template undangan, template undangan pernikahan, undangan pernikahan, template undangan online, wedding invitation github, template website, template website undangan pernikahan",
  },

  alternates: {
    canonical: "https://wedding-invitation-ifha-jefri.vercel.app/",
  },

  applicationName: "Website Undangan Pernikahan Ifha dan Jefri Secara Online",

  icons: {
    icon: "https://wedding-invitation-ifha-jefri.vercel.app/favicon.ico",
    shortcut: "https://wedding-invitation-ifha-jefri.vercel.app/favicon.ico",
    apple: "https://wedding-invitation-ifha-jefri.vercel.app/images/icon-192x192.png",
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
          <AnimationProvider>
            <ScrollToTop />
            {children}
          </AnimationProvider>
        </MusicProvider>
      </body>
    </html>
  );
}
