import localFont from "next/font/local"

export const amalfi = localFont({
  src: [
    {
      path: "../public/fonts/amalfi.ttf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-amalfi",
  display: "swap",
})

export const ivyMode = localFont({
  src: [
    {
      path: "../public/fonts/ivy-mode-regular.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-ivy-mode",
  display: "swap",
})
