import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Abogado de Divorcio",
      slug: "abogado-divorcio",
      description:
        "Especialistas en separaciones y divorcios. Custodia de hijos, pension compensatoria, reparto de bienes y divorcios de mutuo acuerdo o contencioso.",
      features: ["Custodia hijos", "Pension alimenticia", "Mutuo acuerdo"],
    },
    {
      title: "Abogado de Herencias",
      slug: "abogado-herencias",
      description:
        "Expertos en testamentos, sucesiones y reparto de herencias. Impuesto de sucesiones, herencias sin testamento y reclamacion de legitima.",
      features: ["Testamentos", "Sucesiones", "Impuesto herencias"],
    },
    {
      title: "Abogado Laboral",
      slug: "abogado-laboral",
      description:
        "Defendemos tus derechos laborales. Despidos improcedentes, reclamacion de salarios, acoso laboral, ERTEs y negociacion de indemnizaciones.",
      features: ["Despidos", "Reclamaciones", "Acoso laboral"],
    },
    {
      title: "Abogado Penalista",
      slug: "abogado-penal",
      description:
        "Defensa penal especializada. Asistencia al detenido, juicios rapidos, delitos contra la seguridad vial, estafas y defensa en todo tipo de procedimientos penales.",
      features: ["Defensa penal", "Juicios rapidos", "Asistencia detenido"],
    },
    {
      title: "Abogado de Extranjeria",
      slug: "abogado-extranjeria",
      description:
        "Tramitacion de permisos de residencia, nacionalidad, arraigo, reagrupacion familiar, NIE y renovacion de documentacion migratoria.",
      features: ["Residencia", "Nacionalidad", "Arraigo"],
    },
    {
      title: "Abogado de Accidentes",
      slug: "abogado-accidentes",
      description:
        "Reclamacion de indemnizaciones por accidentes de trafico, laborales o negligencias medicas. Maximizamos tu indemnizacion sin adelantos.",
      features: ["Trafico", "Indemnizaciones", "Sin adelanto"],
    },
    {
      title: "Abogado de Familia",
      slug: "abogado-familia",
      description:
        "Custodia, regimen de visitas, pension de alimentos, patria potestad, adopcion y tutela. Protegemos los intereses de tu familia.",
      features: ["Custodia", "Pension alimentos", "Regimen visitas"],
    },
    {
      title: "Abogado Inmobiliario",
      slug: "abogado-inmobiliario",
      description:
        "Compraventa de inmuebles, arrendamientos, desahucios, reclamaciones a constructoras y comunidades de propietarios.",
      features: ["Compraventa", "Arrendamientos", "Desahucios"],
    },
    {
      title: "Abogado para Desahucios",
      slug: "abogado-desahucio",
      description:
        "Defensa integral frente a desahucios. Negociacion con propietarios, oposicion al desahucio, plazos legales y alternativas habitacionales.",
      features: ["Oposicion desahucio", "Negociacion", "Defensa inquilino"],
    },
    {
      title: "Abogado Laboralista",
      slug: "abogado-laboralista",
      description:
        "Especialistas en derecho laboral. Despidos, reclamaciones salariales, acoso laboral, ERTEs y todo tipo de conflictos en el trabajo.",
      features: ["Despido improcedente", "Acoso laboral", "Reclamaciones"],
    },
    {
      title: "Abogado Mercantil",
      slug: "abogado-mercantil",
      description:
        "Derecho mercantil y societario. Constitucion de empresas, concurso de acreedores, contratos mercantiles y conflictos entre socios.",
      features: ["Concurso acreedores", "Sociedades", "Contratos"],
    },
    {
      title: "Reclamar Gastos Hipoteca",
      slug: "reclamar-gastos-hipoteca",
      description:
        "Recupera los gastos de formalizacion de tu hipoteca. Notaria, registro, gestoria y tasacion. Reclamacion sin adelantos.",
      features: ["Sin adelantos", "Gastos notaria", "Clausula suelo"],
    },
  ]

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestros servicios</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground text-balance">
            Cada caso merece el abogado adecuado
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Te ayudamos a encontrar el especialista perfecto segun tu situacion legal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}/madrid/`}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Ver abogados
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
