import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _dmSans = DM_Sans({ subsets: ["latin"] })
const _dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.legalagencia.com"),
  title: "LEGAL AGENCIA — Encuentra el abogado perfecto para tu caso",
  description:
    "Conectamos clientes con los mejores abogados de España. Primera consulta gratuita. Abogados especializados en divorcio, herencias, laboral, penal y mas.",
  generator: "v0.app",
  openGraph: {
    title: "LEGAL AGENCIA — Encuentra el abogado perfecto",
    description:
      "Te ayudamos a encontrar el mejor abogado para tu caso. Asesoramiento personalizado y primera consulta gratuita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEGAL AGENCIA - Abogados especializados",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGAL AGENCIA — Encuentra el abogado perfecto",
    description: "Te ayudamos a encontrar el mejor abogado para tu caso.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
