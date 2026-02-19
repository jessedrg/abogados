import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VALID_SERVICES, MODIFIERS, CITIES, type Service } from "@/lib/sitemap-data"
import { ServiceCityContent } from "@/components/service-city-content"

export const dynamicParams = true
export const revalidate = 604800

const KNOWN_MODIFIERS = MODIFIERS.filter(m => m !== "").map(m => m.slice(1)) as string[]

const SERVICE_NAMES: Record<Service, { name: string; title: string; singular: string }> = {
  "abogado-divorcio": { name: "Abogado de Divorcio", title: "Abogados de Divorcio", singular: "abogado de divorcio" },
  "abogado-herencias": { name: "Abogado de Herencias", title: "Abogados de Herencias", singular: "abogado de herencias" },
  "abogado-accidentes": { name: "Abogado de Accidentes", title: "Abogados de Accidentes", singular: "abogado de accidentes" },
  "abogado-laboral": { name: "Abogado Laboral", title: "Abogados Laboralistas", singular: "abogado laboralista" },
  "abogado-penal": { name: "Abogado Penalista", title: "Abogados Penalistas", singular: "abogado penalista" },
  "abogado-extranjeria": { name: "Abogado de Extranjeria", title: "Abogados de Extranjeria", singular: "abogado de extranjeria" },
  "abogado-familia": { name: "Abogado de Familia", title: "Abogados de Familia", singular: "abogado de familia" },
  "abogado-civil": { name: "Abogado Civil", title: "Abogados Civilistas", singular: "abogado civilista" },
  "abogado-inmobiliario": { name: "Abogado Inmobiliario", title: "Abogados Inmobiliarios", singular: "abogado inmobiliario" },
  "abogado-empresas": { name: "Abogado de Empresas", title: "Abogados de Empresas", singular: "abogado de empresas" },
}

function parseServiceAndModifier(rawService: string): {
  serviceId: Service | null
  modifier?: string
} {
  if (VALID_SERVICES.includes(rawService as Service)) {
    return { serviceId: rawService as Service }
  }
  for (const mod of KNOWN_MODIFIERS) {
    const suffix = `-${mod}`
    if (rawService.endsWith(suffix)) {
      const serviceId = rawService.slice(0, -suffix.length)
      if (VALID_SERVICES.includes(serviceId as Service)) {
        return { serviceId: serviceId as Service, modifier: mod }
      }
    }
  }
  return { serviceId: null }
}

function getCityDisplayName(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

function formatModifier(modifier: string): string {
  const modifierMap: Record<string, string> = {
    "urgente": "Urgente",
    "ahora": "Ahora",
    "hoy": "Hoy",
    "rapido": "Rapido",
    "24-horas": "24 Horas",
    "precios": "Precios",
    "economico": "Economico",
    "barato": "Barato",
    "gratis-consulta": "Consulta Gratis",
    "primera-consulta-gratis": "Primera Consulta Gratis",
    "cuanto-cobra": "Cuanto Cobra",
    "mejor": "Mejor",
    "recomendado": "Recomendado",
    "especialista": "Especialista",
    "experto": "Experto",
    "de-confianza": "de Confianza",
    "mejor-valorado": "Mejor Valorado",
    "pago-resultado": "Pago por Resultado",
    "sin-adelanto": "Sin Adelanto",
    "facilidades-pago": "Facilidades de Pago",
    "cerca-de-mi": "Cerca de Mi",
    "online": "Online",
    "telefono": "por Telefono",
    "mutuo-acuerdo": "Mutuo Acuerdo",
    "express": "Express",
    "con-hijos": "con Hijos",
    "custodia": "Custodia",
  }
  return modifierMap[modifier] || modifier.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

interface PageProps {
  params: Promise<{ service: string; city: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: rawService, city: citySlug } = await params
  const { serviceId, modifier } = parseServiceAndModifier(rawService)
  if (!serviceId) return { title: "No encontrado" }

  const serviceName = SERVICE_NAMES[serviceId]
  const cityName = getCityDisplayName(citySlug)
  const modifierText = modifier ? ` ${formatModifier(modifier)}` : ""
  const fullTitle = `${serviceName.title}${modifierText} en ${cityName}`

  return {
    title: `${fullTitle} | Primera Consulta Gratis | Legal Agencia`,
    description: `Encuentra los mejores ${serviceName.title.toLowerCase()}${modifierText.toLowerCase()} en ${cityName}. Comparamos experiencia, especializacion y honorarios. Primera consulta GRATUITA. Llama ahora: +34 824 805 618`,
    keywords: `${serviceName.name.toLowerCase()} ${cityName}, ${serviceName.title.toLowerCase()} ${cityName}, abogado ${cityName}, mejores abogados ${cityName}`,
    alternates: {
      canonical: `https://www.legalagencia.com/${rawService}/${citySlug}/`,
    },
    openGraph: {
      title: fullTitle,
      description: `Los mejores ${serviceName.title.toLowerCase()}${modifierText.toLowerCase()} en ${cityName}. Primera consulta gratuita. +34 824 805 618`,
      type: "website",
      siteName: "Legal Agencia",
    },
  }
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: rawService, city: citySlug } = await params
  const { serviceId, modifier } = parseServiceAndModifier(rawService)
  if (!serviceId) notFound()

  const serviceName = SERVICE_NAMES[serviceId as Service]
  const cityName = getCityDisplayName(citySlug)
  const modifierText = modifier ? formatModifier(modifier) : ""
  const pageTitle = modifier
    ? `${serviceName.title} ${modifierText} en ${cityName}`
    : `${serviceName.title} en ${cityName}`

  const cityIndex = CITIES.indexOf(citySlug)
  const nearbyCities = CITIES.slice(
    Math.max(0, cityIndex - 5),
    Math.min(CITIES.length, cityIndex + 6)
  ).filter(c => c !== citySlug).slice(0, 5)

  const relatedServices = VALID_SERVICES.filter(s => s !== serviceId).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <ServiceCityContent
          pageTitle={pageTitle}
          serviceName={serviceName}
          cityName={cityName}
          citySlug={citySlug}
          serviceId={serviceId as Service}
          modifierText={modifierText}
          nearbyCities={nearbyCities}
          relatedServices={relatedServices}
          serviceNames={SERVICE_NAMES}
        />
      </main>
      <Footer />
    </div>
  )
}
