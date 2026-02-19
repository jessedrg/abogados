import { ShieldCheck, Clock, Star, Users } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "100% Verificado",
      description: "Todos los abogados pasan nuestro control de calidad",
    },
    {
      icon: Clock,
      title: "Respuesta en 24h",
      description: "Un abogado especializado te contacta en menos de 24 horas",
    },
    {
      icon: Star,
      title: "4.9/5 Valoracion",
      description: "Basado en miles de opiniones de clientes reales",
    },
    {
      icon: Users,
      title: "1a consulta gratis",
      description: "Primera consulta gratuita y sin compromiso",
    },
  ]

  return (
    <section className="py-12 lg:py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{badge.title}</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
