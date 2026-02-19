"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "El servicio de LEGAL AGENCIA tiene algun coste?",
    answer:
      "No, nuestro servicio de conexion es completamente gratuito. Nosotros te ponemos en contacto con el abogado especializado ideal para tu caso. Los honorarios del abogado se acuerdan directamente con el, de forma transparente, en la primera consulta que ademas es gratuita.",
  },
  {
    question: "Cuanto tardais en asignarme un abogado?",
    answer:
      "En la mayoria de los casos, te presentamos un abogado especializado en menos de 24 horas. Para casos urgentes (detenciones, ordenes de alejamiento, desahucios inminentes), activamos nuestro protocolo de urgencia y podemos conectarte con un abogado en cuestion de horas.",
  },
  {
    question: "Como verificais a los abogados?",
    answer:
      "Todos los abogados de nuestra red pasan un proceso de verificacion que incluye: comprobacion de colegiacion activa, revision de trayectoria profesional, evaluacion de especializacion real en su area de practica, analisis de opiniones de clientes anteriores y entrevista personal. Solo trabajamos con profesionales que cumplen nuestros estandares.",
  },
  {
    question: "La primera consulta es realmente gratuita?",
    answer:
      "Si, la primera consulta con el abogado asignado es siempre gratuita y sin compromiso. En esta consulta el abogado evalua tu caso, te explica tus opciones legales, probabilidades de exito y te presenta un presupuesto transparente de honorarios. Tu decides si quieres continuar.",
  },
  {
    question: "Que tipos de casos atendeis?",
    answer:
      "Cubrimos todas las areas del derecho: divorcios y familia, herencias y sucesiones, accidentes e indemnizaciones, derecho laboral (despidos, reclamaciones), derecho penal, extranjeria, derecho inmobiliario, derecho civil y derecho mercantil para empresas. Cada caso se asigna a un especialista en esa area concreta.",
  },
  {
    question: "Puedo elegir entre varios abogados?",
    answer:
      "Si. Dependiendo de tu zona y tipo de caso, podemos presentarte varios abogados especializados para que compares perfiles, experiencia y honorarios. Tu siempre tienes la ultima palabra. Si el primer abogado no te convence, te buscamos otro sin problema.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif text-foreground text-balance">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
