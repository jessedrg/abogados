import { Phone } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cuentanos tu caso",
      description:
        "Llamanos o dejanos tus datos. Un asesor especializado te escuchara para entender tu situacion legal: tipo de caso, urgencia y zona donde necesitas abogado.",
    },
    {
      number: "02",
      title: "Te asignamos el abogado ideal",
      description:
        "En menos de 24 horas te presentamos abogados especializados en tu tipo de caso y zona. Sin compromiso, sin costes ocultos.",
    },
    {
      number: "03",
      title: "Primera consulta gratuita",
      description:
        "El abogado evalua tu caso en una primera consulta sin coste. Te explica tus opciones, probabilidades de exito y honorarios con total transparencia.",
    },
  ]

  return (
    <section id="como-funciona" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Como funciona</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground text-balance">
            Encontrar el abogado perfecto nunca fue tan facil
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Nos encargamos de todo para que tu solo tengas que preocuparte de lo importante: resolver tu caso.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 relative">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                <span className="text-5xl font-serif text-primary/20">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+34824805618"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Llamar al 824 805 618
          </a>
          <p className="text-sm text-muted-foreground">Llamada gratuita, sin compromiso</p>
        </div>

        <div className="mt-16 relative rounded-3xl overflow-hidden aspect-[21/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop"
            alt="Abogado asesorando a cliente en despacho profesional"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
