import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const mainCities = [
  { name: "Madrid", slug: "madrid", count: 312 },
  { name: "Barcelona", slug: "barcelona", count: 287 },
  { name: "Valencia", slug: "valencia", count: 156 },
  { name: "Sevilla", slug: "sevilla", count: 124 },
  { name: "Bilbao", slug: "bilbao", count: 98 },
  { name: "Malaga", slug: "malaga", count: 107 },
  { name: "Zaragoza", slug: "zaragoza", count: 82 },
  { name: "Murcia", slug: "murcia", count: 74 },
]

const moreCities = [
  { name: "Valladolid", slug: "valladolid" },
  { name: "Palma", slug: "palma" },
  { name: "Cadiz", slug: "cadiz" },
  { name: "Salamanca", slug: "salamanca" },
  { name: "Granada", slug: "granada" },
  { name: "Cordoba", slug: "cordoba" },
  { name: "Santander", slug: "santander" },
  { name: "Pamplona", slug: "pamplona" },
  { name: "Toledo", slug: "toledo" },
  { name: "Tarragona", slug: "tarragona" },
  { name: "Oviedo", slug: "oviedo" },
  { name: "Burgos", slug: "burgos" },
  { name: "Gijon", slug: "gijon" },
  { name: "Badajoz", slug: "badajoz" },
  { name: "Lleida", slug: "lleida" },
  { name: "Lugo", slug: "lugo" },
]

export function CitiesSection() {
  return (
    <section id="ciudades" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Cobertura nacional</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground text-balance">
            Abogados en toda España
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Trabajamos con mas de 3.000 abogados verificados en las principales ciudades
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mainCities.map((city) => (
            <Link
              key={city.slug}
              href={`/abogado-divorcio/${city.slug}/`}
              className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{city.count}+ abogados</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ver abogados <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Tambien disponible en:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {moreCities.map((city) => (
              <Link
                key={city.slug}
                href={`/abogado-divorcio/${city.slug}/`}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
