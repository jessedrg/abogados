import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VALID_SERVICES, PROBLEMS, CITIES, type Service } from "@/lib/sitemap-data"
import { SERVICE_NAMES } from "@/lib/service-names"
import { ServiceCityContent } from "@/components/service-city-content"

export const dynamicParams = true
export const revalidate = 604800

const PROBLEM_DISPLAY: Record<string, string> = {
  // Divorcio
  "quiero-divorciarme": "Quiero divorciarme",
  "separacion": "Separacion",
  "custodia-hijos": "Custodia de hijos",
  "pension-compensatoria": "Pension compensatoria",
  "reparto-bienes": "Reparto de bienes",
  "divorcio-rapido": "Divorcio rapido",
  // Herencias
  "fallecio-familiar": "Fallecio un familiar",
  "testamento": "Testamento",
  "herencia-sin-testamento": "Herencia sin testamento",
  "impuesto-sucesiones": "Impuesto de sucesiones",
  "repartir-herencia": "Repartir herencia",
  "deudas-herencia": "Deudas en la herencia",
  // Accidentes
  "accidente-coche": "Accidente de coche",
  "accidente-moto": "Accidente de moto",
  "atropello": "Atropello",
  "accidente-trabajo": "Accidente de trabajo",
  "negligencia-medica": "Negligencia medica",
  "indemnizacion": "Indemnizacion",
  // Laboral
  "despido": "Despido",
  "despido-improcedente": "Despido improcedente",
  "no-me-pagan": "No me pagan",
  "acoso-laboral": "Acoso laboral",
  "horas-extras": "Horas extras",
  "finiquito": "Finiquito",
  // Penal
  "detenido": "Detenido",
  "denuncia": "Denuncia",
  "me-acusan": "Me acusan",
  "juicio-rapido": "Juicio rapido",
  "antecedentes": "Antecedentes",
  "delito": "Delito",
  // Extranjeria
  "permiso-residencia": "Permiso de residencia",
  "nacionalidad": "Nacionalidad",
  "arraigo": "Arraigo",
  "reagrupacion-familiar": "Reagrupacion familiar",
  "NIE": "NIE",
  "renovacion-papeles": "Renovacion de papeles",
  // Familia
  "custodia": "Custodia",
  "regimen-visitas": "Regimen de visitas",
  "pension-alimentos": "Pension de alimentos",
  "patria-potestad": "Patria potestad",
  "adopcion": "Adopcion",
  "tutela": "Tutela",
  // Civil
  "reclamar-deuda": "Reclamar deuda",
  "contrato": "Contrato",
  "comunidad-vecinos": "Comunidad de vecinos",
  "responsabilidad-civil": "Responsabilidad civil",
  "daños-perjuicios": "Danos y perjuicios",
  // Inmobiliario
  "compraventa": "Compraventa",
  "alquiler": "Alquiler",
  "desahucio": "Desahucio",
  "hipoteca": "Hipoteca",
  "clausula-suelo": "Clausula suelo",
  "okupas": "Okupas",
  // Empresas
  "constituir-empresa": "Constituir empresa",
  "contratos-mercantiles": "Contratos mercantiles",
  "socios": "Conflicto entre socios",
  "concurso-acreedores": "Concurso de acreedores",
  "deudas-empresa": "Deudas de empresa",
}

function getCityDisplayName(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

function getProblemDisplayName(slug: string): string {
  return PROBLEM_DISPLAY[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

interface PageProps {
  params: Promise<{ service: string; problem: string; city: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, problem, city: citySlug } = await params

  if (!VALID_SERVICES.includes(service as Service)) return { title: "No encontrado" }
  const problems = PROBLEMS[service as Service] || []
  if (!problems.includes(problem)) return { title: "No encontrado" }

  const serviceName = SERVICE_NAMES[service as Service]
  const cityName = getCityDisplayName(citySlug)
  const problemName = getProblemDisplayName(problem)

  return {
    title: `${problemName} en ${cityName} | ${serviceName.title} | Legal Agencia`,
    description: `Necesitas un ${serviceName.singular} en ${cityName} por ${problemName.toLowerCase()}? Te conectamos con el especialista ideal. Primera consulta GRATUITA. Llama: +34 824 805 618`,
    keywords: `${problemName.toLowerCase()} ${cityName}, ${serviceName.name.toLowerCase()} ${cityName}, ${problem} abogado ${cityName}`,
    alternates: {
      canonical: `https://www.legalagencia.com/necesidad/${service}/${problem}/${citySlug}/`,
    },
    openGraph: {
      title: `${problemName} en ${cityName} - ${serviceName.title}`,
      description: `Encuentra un ${serviceName.singular} en ${cityName} para ${problemName.toLowerCase()}. Primera consulta gratuita. +34 824 805 618`,
      type: "website",
      siteName: "Legal Agencia",
    },
  }
}

export default async function NecesidadPage({ params }: PageProps) {
  const { service, problem, city: citySlug } = await params

  if (!VALID_SERVICES.includes(service as Service)) notFound()
  const problems = PROBLEMS[service as Service] || []
  if (!problems.includes(problem)) notFound()
  if (!CITIES.includes(citySlug)) notFound()

  const serviceName = SERVICE_NAMES[service as Service]
  const cityName = getCityDisplayName(citySlug)
  const problemName = getProblemDisplayName(problem)

  const pageTitle = `${problemName}: ${serviceName.title} en ${cityName}`

  const cityIndex = CITIES.indexOf(citySlug)
  const nearbyCities = CITIES.slice(
    Math.max(0, cityIndex - 5),
    Math.min(CITIES.length, cityIndex + 6)
  ).filter(c => c !== citySlug).slice(0, 5)

  const relatedServices = VALID_SERVICES.filter(s => s !== service).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <ServiceCityContent
          pageTitle={pageTitle}
          serviceName={serviceName}
          cityName={cityName}
          citySlug={citySlug}
          serviceId={service as Service}
          modifierText={problemName}
          nearbyCities={nearbyCities}
          relatedServices={relatedServices}
          serviceNames={SERVICE_NAMES}
        />
      </main>
      <Footer />
    </div>
  )
}
