import { Star, CheckCircle } from "lucide-react"

const reviews = [
  {
    name: "Carmen R.",
    city: "Madrid",
    date: "Hace 3 dias",
    rating: 5,
    text: "Mi marido me pidio el divorcio de un dia para otro. No sabia ni por donde empezar. LEGAL AGENCIA me conecto con una abogada especialista en derecho de familia que me explico todo con calma. Conseguimos custodia compartida y una pension justa. Estare siempre agradecida.",
  },
  {
    name: "Miguel A.",
    city: "Barcelona",
    date: "Hace 1 semana",
    rating: 5,
    text: "Me despidieron tras 12 anos en la empresa alegando causas objetivas falsas. El abogado laboralista que me asignaron consiguio que reconocieran el despido improcedente. Indemnizacion de 45.000 euros. Servicio impecable y rapido.",
  },
  {
    name: "Laura G.",
    city: "Valencia",
    date: "Hace 5 dias",
    rating: 5,
    text: "Tras el fallecimiento de mi padre, mis hermanos y yo no nos poniamos de acuerdo con la herencia. El abogado de LEGAL AGENCIA nos ayudo a mediar y resolver todo sin llegar a juicio. Primera consulta gratuita y honorarios muy razonables.",
  },
  {
    name: "Javier M.",
    city: "Sevilla",
    date: "Hace 2 semanas",
    rating: 5,
    text: "Tuve un accidente de trafico con lesiones graves. El abogado que me asignaron consiguio una indemnizacion de 28.000 euros sin que yo tuviera que adelantar ni un euro. Cobraron solo al ganar el caso. Totalmente recomendable.",
  },
  {
    name: "Isabel P.",
    city: "Bilbao",
    date: "Hace 4 dias",
    rating: 5,
    text: "Necesitaba un abogado de extranjeria urgente para renovar mi permiso de residencia. En 24 horas ya tenia cita con un especialista que me guio en todo el proceso. Papeles renovados sin problemas. Un servicio increible.",
  },
  {
    name: "Antonio F.",
    city: "Malaga",
    date: "Hace 1 semana",
    rating: 4,
    text: "Me acusaron injustamente de un delito menor. El abogado penalista que me asignaron preparo una defensa impecable y conseguimos la absolucion. Proceso rapido y profesional. La unica pega fue la espera inicial, pero el resultado lo compensa todo.",
  },
]

export function ReviewsSection() {
  return (
    <section id="opiniones" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Opiniones reales</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground text-balance">
            Miles de clientes ya confian en nosotros
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">basado en 2.134 opiniones</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed text-sm">{review.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  Verificada
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{review.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
