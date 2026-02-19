import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VALID_SERVICES, CITIES, type Service } from "@/lib/sitemap-data"
import { SERVICE_NAMES } from "@/lib/service-names"

export const dynamicParams = true
export const revalidate = 604800

const NEAR_ME_SLUGS: Record<string, { title: string; description: string; service: Service }> = {
  "abogado-cerca-de-mi": {
    title: "Abogado Cerca de Mi",
    description: "Encuentra un abogado cerca de ti. Te conectamos con los mejores abogados de tu zona. Primera consulta gratuita.",
    service: "abogado-civil",
  },
  "abogado-laboralista-cerca-de-mi": {
    title: "Abogado Laboralista Cerca de Mi",
    description: "Encuentra un abogado laboralista cerca de ti. Especialistas en despidos, acoso laboral y reclamaciones.",
    service: "abogado-laboralista",
  },
  "abogado-laboral-cerca-de-mi": {
    title: "Abogado Laboral Cerca de Mi",
    description: "Encuentra un abogado laboral cerca de ti. Especialistas en derecho del trabajo y seguridad social.",
    service: "abogado-laboral",
  },
}

const MAJOR_CITIES = [
  "madrid", "barcelona", "valencia", "sevilla", "zaragoza", "malaga",
  "murcia", "palma-de-mallorca", "bilbao", "alicante", "cordoba", "valladolid",
  "vigo", "gijon", "hospitalet-de-llobregat", "vitoria-gasteiz", "granada",
  "elche", "oviedo", "santa-cruz-de-tenerife", "pamplona", "almeria",
  "san-sebastian", "burgos", "albacete", "santander", "castellon-de-la-plana",
  "logrono", "badajoz", "salamanca", "huelva", "lleida", "tarragona",
  "leon", "cadiz", "jaen", "ourense", "lugo", "caceres", "melilla",
  "guadalajara", "toledo", "pontevedra", "palencia", "ciudad-real",
  "zamora", "avila", "cuenca", "huesca", "segovia", "soria", "teruel",
]

function getCityDisplayName(slug: string): string {
  return slug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  const nearMe = NEAR_ME_SLUGS[slug]
  if (nearMe) {
    return {
      title: `${nearMe.title} — LEGAL AGENCIA`,
      description: nearMe.description,
      alternates: { canonical: `https://www.legalagencia.com/${slug}/` },
    }
  }

  if (VALID_SERVICES.includes(slug as Service)) {
    const sn = SERVICE_NAMES[slug as Service]
    return {
      title: `${sn.title} en España — LEGAL AGENCIA`,
      description: `Encuentra los mejores ${sn.title.toLowerCase()} en toda España. Primera consulta gratuita. Llama al 824 805 618.`,
      alternates: { canonical: `https://www.legalagencia.com/${slug}/` },
    }
  }

  return {}
}

export default async function NationalPage({ params }: PageProps) {
  const { slug } = await params

  const nearMe = NEAR_ME_SLUGS[slug]
  const isService = VALID_SERVICES.includes(slug as Service)

  if (!nearMe && !isService) notFound()

  const title = nearMe ? nearMe.title : SERVICE_NAMES[slug as Service].title
  const description = nearMe
    ? nearMe.description
    : `Encuentra los mejores ${SERVICE_NAMES[slug as Service].title.toLowerCase()} en toda España. Selecciona tu ciudad para ver abogados especializados cerca de ti.`

  const serviceSlug = nearMe ? nearMe.service : (slug as Service)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {title} en España
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {description}
            </p>
            <a
              href="tel:+34824805618"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Llamar al 824 805 618
            </a>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-4">
              Selecciona tu ciudad
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Tenemos {SERVICE_NAMES[serviceSlug].title.toLowerCase()} en mas de 8.000 municipios de España. Estas son las principales ciudades:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {MAJOR_CITIES.map(city => (
                <Link
                  key={city}
                  href={`/${serviceSlug}/${city}/`}
                  className="flex items-center justify-center p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <span className="text-sm font-medium text-foreground">
                    {getCityDisplayName(city)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
              Servicios Legales Relacionados
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {VALID_SERVICES.filter(s => s !== slug).slice(0, 12).map(s => (
                <Link
                  key={s}
                  href={`/${s}/`}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <span className="text-sm font-medium">{SERVICE_NAMES[s].title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas un {SERVICE_NAMES[serviceSlug].singular}?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Primera consulta gratuita. Llámanos y te ponemos en contacto con el mejor abogado para tu caso.
            </p>
            <a
              href="tel:+34824805618"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors"
            >
              824 805 618 — Llamar Ahora
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
