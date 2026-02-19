import { Phone, Star } from "lucide-react"

export function HomeHero() {
  return (
    <section className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-tight text-balance">
              Encuentra el abogado perfecto para tu caso
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Cobertura en toda <strong className="text-foreground">España</strong>.
              Abogados 100% verificados. Primera consulta gratuita. Resultados garantizados.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+34824805618"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-foreground text-foreground text-lg font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                Como funciona
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">EXCELENTE</span> - 4.9/5 basado en{" "}
                <span className="font-semibold text-foreground">2.134 opiniones</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format&fit=crop"
                alt="Despacho de abogados profesional"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-card rounded-2xl p-4 shadow-lg border border-border">
              <p className="text-sm font-semibold text-foreground">+2.000 casos resueltos</p>
              <p className="text-xs text-muted-foreground">con exito en toda España</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
