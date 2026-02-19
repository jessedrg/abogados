import { Phone, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-foreground">
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-background text-balance max-w-3xl mx-auto">
              Tu caso merece la mejor defensa. Nosotros te ayudamos a encontrarla.
            </h2>
            <p className="mt-6 text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
              Llamanos hoy y un asesor especializado te conectara con el abogado perfecto para tu situacion. Sin compromiso, primera consulta gratuita.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+34824805618"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground text-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-6 h-6" />
                824 805 618
              </a>
              <a
                href="tel:+34824805618"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-background/40 text-background font-semibold hover:bg-background/10 transition-colors"
              >
                Solicitar llamada <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-background/60">
              Lunes a viernes de 9:00 a 20:00 | Sabados de 10:00 a 14:00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
