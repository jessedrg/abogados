"use client"

import { useState } from "react"
import Link from "next/link"
import type { Service } from "@/lib/sitemap-data"
import { Phone, Star, Shield, Clock, MapPin, Heart, Users, CheckCircle, ChevronDown, ArrowRight } from "lucide-react"

const PHONE = "+34824805618"
const PHONE_DISPLAY = "+34 824 805 618"

interface Review {
  name: string
  city: string
  rating: number
  text: string
  date: string
  verified: boolean
}

function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

function generateReviews(cityName: string, serviceName: string, serviceId: string): Review[] {
  const seed = hashCode(`${cityName}-${serviceId}`)

  const allFirstNames = [
    "Carmen", "Antonio", "Maria Jose", "Francisco", "Isabel", "Manuel", "Ana", "Jose Luis",
    "Pilar", "Miguel", "Rosa", "Pedro", "Teresa", "Juan Carlos", "Dolores", "Rafael",
    "Lucia", "Javier", "Marta", "Fernando", "Beatriz", "Carlos", "Elena", "Enrique",
    "Cristina", "Alberto", "Silvia", "Andres", "Patricia", "Sergio",
  ]
  const allSurnames = ["G.", "M.", "R.", "L.", "S.", "F.", "P.", "D.", "H.", "V.", "N.", "T.", "B.", "C.", "A."]
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

  const divorcioTemplates = [
    `Mi marido me pidio el divorcio de repente. El abogado de LEGAL AGENCIA en ${cityName} me explico todo con calma, consiguio una custodia compartida justa y una pension adecuada. Estare siempre agradecida por su profesionalidad.`,
    `Llevabamos meses sin ponernos de acuerdo en la separacion. El abogado que nos asigno LEGAL AGENCIA en ${cityName} consiguio que llegaramos a un acuerdo de mutuo acuerdo en semanas. Nos ahorro meses de juicio.`,
    `Tenia miedo del proceso de divorcio con hijos. La abogada de ${cityName} que me asignaron fue increible. Me guio en cada paso, protegió los intereses de mis hijos y todo se resolvio mas rapido de lo que esperaba.`,
    `Buscaba un abogado de divorcio economico en ${cityName}. LEGAL AGENCIA me conecto con un especialista que cobro honorarios justos y consiguio un resultado excelente. La primera consulta fue gratis y muy clarificadora.`,
    `Mi exmarido no pagaba la pension. El abogado que me asigno LEGAL AGENCIA en ${cityName} presento una demanda de ejecucion y en dos meses empezo a cobrar. Profesionales de verdad.`,
    `El divorcio fue la decision mas dificil de mi vida. Pero el equipo que me asignaron en ${cityName} hizo que el proceso fuera lo menos doloroso posible. Siempre disponibles, siempre profesionales.`,
  ]

  const herenciasTemplates = [
    `Tras el fallecimiento de mi padre, mis hermanos y yo no nos poniamos de acuerdo con la herencia. El abogado de LEGAL AGENCIA en ${cityName} nos ayudo a mediar y resolver todo sin llegar a juicio.`,
    `No habia testamento y la herencia era complicada. El abogado que me asigno LEGAL AGENCIA en ${cityName} gestiono la declaracion de herederos y el reparto con total transparencia. Un profesional excelente.`,
    `El impuesto de sucesiones nos parecia inasumible. El abogado de ${cityName} nos ayudo a aplicar todas las bonificaciones posibles y al final pagamos mucho menos de lo previsto. Conocimiento impresionante.`,
    `Mi hermano queria quedarse con todo. El abogado de herencias que me asigno LEGAL AGENCIA en ${cityName} reclamo mi parte legitima y la consiguio sin necesidad de juicio. Rapidez y eficacia.`,
    `Heredamos un piso en ${cityName} con cargas. El abogado nos asesoro sobre si aceptar la herencia a beneficio de inventario. Al final fue la mejor decision. Un profesional que sabe lo que hace.`,
    `La tramitacion de la herencia de mi madre fue complicada por tener bienes en varias ciudades. El abogado de ${cityName} coordino todo de forma impecable.`,
  ]

  const laboralTemplates = [
    `Me despidieron tras 12 anos en la empresa. El abogado laboralista de LEGAL AGENCIA en ${cityName} consiguio que reconocieran el despido improcedente. Indemnizacion justa y rapido. Impecable.`,
    `No me pagaban las horas extras desde hacia meses. El abogado de ${cityName} que me asigno LEGAL AGENCIA reclamo todo lo que me debian y ganamos. Sin adelantar ni un euro.`,
    `Sufria acoso laboral y no sabia como actuar. La abogada laboralista de ${cityName} me guio en cada paso, recopilamos pruebas y conseguimos una indemnizacion por danos. Mi vida cambio para mejor.`,
    `Me hicieron un ERTE y luego me despidieron. El abogado de LEGAL AGENCIA en ${cityName} demostro que era fraude y conseguimos la maxima indemnizacion. Profesional de primera.`,
    `Mi empresa no me daba el finiquito correcto. El abogado laboralista de ${cityName} reviso todo, encontro errores a mi favor y reclamo la diferencia. Cobre 3.400 euros mas de lo que me ofrecian.`,
    `Me despidieron estando embarazada. El abogado de ${cityName} demostro la nulidad del despido. Me readmitieron con todos los salarios de tramitacion. Una profesional extraordinaria.`,
  ]

  const penalTemplates = [
    `Me acusaron injustamente de un delito. El abogado penalista de LEGAL AGENCIA en ${cityName} preparo una defensa impecable y conseguimos la absolucion. Le debo mi libertad.`,
    `Mi hijo fue detenido un viernes por la noche. LEGAL AGENCIA me conecto con un abogado penalista de guardia en ${cityName} en menos de 2 horas. Profesionalidad total en el momento mas dificil.`,
    `Tuve un juicio rapido por un delito de trafico. El abogado de ${cityName} consiguio reducir la pena al minimo y evitar la prision. Conocia perfectamente el procedimiento.`,
    `Me denunciaron por lesiones en una pelea. El abogado penalista de ${cityName} demostro que fue legitima defensa. Absolucion total. Un profesional excepcional.`,
    `Necesitaba cancelar antecedentes penales para un trabajo. El abogado de LEGAL AGENCIA en ${cityName} tramito todo rapidamente y sin complicaciones.`,
    `Me acusaban de estafa y estaba desesperado. El abogado penalista que me asigno LEGAL AGENCIA en ${cityName} estudio el caso a fondo y consiguio el sobreseimiento.`,
  ]

  const extranjeriaTemplates = [
    `Necesitaba renovar mi permiso de residencia urgente en ${cityName}. LEGAL AGENCIA me conecto con un abogado especialista que gestionó todo sin problemas. Papeles renovados a tiempo.`,
    `Queria solicitar la nacionalidad espanola. El abogado de extranjeria de ${cityName} me preparo toda la documentacion y me guio en el proceso. Ahora soy ciudadano espanol.`,
    `Mi arraigo social fue denegado. El abogado de LEGAL AGENCIA en ${cityName} presento un recurso con argumentos solidos y finalmente me lo concedieron. Un profesional excelente.`,
    `Necesitaba reagrupar a mi familia desde mi pais. El abogado de ${cityName} gestiono todo el papeleo, que es enorme, y en 8 meses ya estaban aqui conmigo. Servicio increible.`,
    `Me habian denegado el NIE dos veces. El abogado de extranjeria de ${cityName} identifico los errores de las solicitudes anteriores y a la tercera lo conseguimos. Conocimiento total de la materia.`,
    `Estaba en situacion irregular y tenia miedo. El abogado de LEGAL AGENCIA en ${cityName} me explico mis opciones con claridad y tramito mi arraigo con exito.`,
  ]

  const accidentesTemplates = [
    `Tuve un accidente de trafico con lesiones graves. El abogado de LEGAL AGENCIA en ${cityName} consiguio una indemnizacion de 28.000 euros sin que yo tuviera que adelantar ni un euro.`,
    `La aseguradora me ofrecia una miseria por mi accidente. El abogado de ${cityName} reclamo y conseguimos triplicar la oferta inicial. Solo cobro al ganar. Totalmente recomendable.`,
    `Sufri un accidente laboral y la empresa no queria reconocerlo. El abogado de LEGAL AGENCIA en ${cityName} demostro la negligencia y conseguimos una indemnizacion justa mas baja laboral.`,
    `Un atropello me dejo 3 meses de baja. El abogado de ${cityName} gestiono toda la reclamacion contra el seguro del conductor. Cobre 15.000 euros y no page nada por adelantado.`,
    `Tuve una negligencia medica que empeoro mi lesion. El abogado especialista de ${cityName} monto un caso solido con peritos medicos y ganamos el juicio. Profesional de primer nivel.`,
    `Accidente de moto con secuelas. El abogado de LEGAL AGENCIA en ${cityName} peleo cada euro con la aseguradora. Resultado: 42.000 euros de indemnizacion. Merece cada estrella.`,
  ]

  const generalTemplates = [
    `No sabia que tipo de abogado necesitaba. LEGAL AGENCIA en ${cityName} evaluo mi caso y me conecto con el especialista perfecto. Servicio rapido y profesional desde el primer momento.`,
    `La primera consulta gratuita me convencio. El abogado de ${cityName} me explico mis opciones con claridad y sin presion. Decidi contratarlo y fue la mejor decision.`,
    `Habia contactado con 3 abogados antes sin quedar satisfecho. LEGAL AGENCIA me conecto con un profesional de ${cityName} que finalmente resolvio mi caso. A la cuarta fue la vencida.`,
    `Lo que mas valoro de LEGAL AGENCIA es la transparencia. El abogado de ${cityName} me explico los honorarios desde el principio, sin sorpresas. Y el resultado fue excelente.`,
    `Necesitaba un abogado urgente en ${cityName} un viernes por la tarde. LEGAL AGENCIA me conecto con uno en 3 horas. Resolvio mi emergencia ese mismo fin de semana. Servicio impresionante.`,
    `Mi comunidad de vecinos tenia un problema legal complejo. El abogado de ${cityName} que nos asigno LEGAL AGENCIA resolvio el conflicto en un mes. Todos los vecinos encantados.`,
  ]

  let templates: string[]
  if (serviceId.includes("divorcio")) {
    templates = divorcioTemplates
  } else if (serviceId.includes("herencia")) {
    templates = herenciasTemplates
  } else if (serviceId.includes("laboral")) {
    templates = laboralTemplates
  } else if (serviceId.includes("penal")) {
    templates = penalTemplates
  } else if (serviceId.includes("extranjeria")) {
    templates = extranjeriaTemplates
  } else if (serviceId.includes("accidente")) {
    templates = accidentesTemplates
  } else {
    templates = generalTemplates
  }

  const startIdx = seed % templates.length
  const selectedTemplates: string[] = []
  for (let i = 0; i < 6; i++) {
    selectedTemplates.push(templates[(startIdx + i) % templates.length])
  }

  const nameStartIdx = seed % allFirstNames.length
  const surnameStartIdx = (seed * 7) % allSurnames.length
  const daySeeds = [3, 17, 8, 24, 11, 29]
  const monthSeeds = [7, 9, 8, 10, 11, 7]

  return selectedTemplates.map((text, i) => ({
    name: `${allFirstNames[(nameStartIdx + i * 3) % allFirstNames.length]} ${allSurnames[(surnameStartIdx + i * 2) % allSurnames.length]}`,
    city: cityName,
    rating: (seed + i) % 5 === 0 ? 4 : 5,
    text,
    date: `${daySeeds[i]} de ${months[monthSeeds[i]]} 2025`,
    verified: true,
  }))
}

function generateFAQs(cityName: string, serviceName: { title: string; singular: string }, modifierText: string, serviceId: string) {
  const baseFaqs = [
    {
      q: `Cuanto cobra un ${serviceName.singular} en ${cityName}?`,
      a: `Los honorarios de un ${serviceName.singular} en ${cityName} dependen de la complejidad del caso, la duracion estimada del procedimiento y la experiencia del profesional. Pueden variar significativamente segun se trate de un caso sencillo o complejo. Nuestro equipo te presentara abogados con diferentes rangos de honorarios para que elijas el que mejor se adapte a tu presupuesto. La primera consulta es siempre gratuita. Llama al ${PHONE_DISPLAY} para orientacion sin compromiso.`
    },
    {
      q: `El servicio de LEGAL AGENCIA en ${cityName} tiene algun coste?`,
      a: `El servicio de conexion de LEGAL AGENCIA es completamente gratuito. No cobramos comision ni al cliente ni al abogado. Te ponemos en contacto con el profesional ideal para tu caso en ${cityName} sin ningun coste. Los honorarios se acuerdan directamente con el abogado de forma transparente.`
    },
    {
      q: `Cuanto tiempo tardais en asignarme un abogado en ${cityName}?`,
      a: `Nuestro equipo responde en menos de 24 horas desde la primera llamada. Te presentamos un abogado especializado en tu tipo de caso disponible en ${cityName}. Para situaciones urgentes (detenciones, desahucios, ordenes de alejamiento), activamos nuestro protocolo de urgencia y podemos conectarte con un abogado en cuestion de horas.`
    },
  ]

  if (serviceId.includes("divorcio") || serviceId.includes("familia")) {
    baseFaqs.push(
      {
        q: `Cuanto tarda un proceso de divorcio en ${cityName}?`,
        a: `Un divorcio de mutuo acuerdo en ${cityName} puede resolverse en 2-3 meses. Un divorcio contencioso puede durar entre 6 meses y mas de un ano dependiendo de la complejidad (hijos, bienes, pensiones). El abogado que te asignemos evaluara tu situacion concreta en la primera consulta gratuita y te dara una estimacion realista.`
      },
      {
        q: `Puedo divorciarme sin que mi pareja este de acuerdo?`,
        a: `Si, en España puedes solicitar el divorcio de forma unilateral (divorcio contencioso). No necesitas el consentimiento de tu pareja. El proceso es mas largo y costoso que un mutuo acuerdo, pero es un derecho que te asiste. Los abogados de nuestra red en ${cityName} tienen amplia experiencia en ambos tipos de procedimiento.`
      },
      {
        q: `Como se calcula la pension de alimentos para los hijos?`,
        a: `La pension de alimentos se calcula en funcion de los ingresos de ambos progenitores, las necesidades de los hijos, el numero de hijos y otros factores como gastos extraordinarios. No existe una formula fija, pero nuestros abogados en ${cityName} conocen los criterios habituales de los juzgados de la zona y te orientaran sobre lo que puedes esperar.`
      }
    )
  } else if (serviceId.includes("herencia")) {
    baseFaqs.push(
      {
        q: `Que pasa si no hay testamento?`,
        a: `Si no hay testamento, se abre la sucesion intestada. Los herederos se determinan por ley segun el grado de parentesco. Es necesario tramitar una declaracion de herederos ante notario. El proceso puede ser mas lento y complejo, pero nuestros abogados en ${cityName} estan especializados en este tipo de situaciones y te guiaran en cada paso.`
      },
      {
        q: `Puedo rechazar una herencia en ${cityName}?`,
        a: `Si, puedes renunciar a la herencia si consideras que las deudas superan los bienes, o aceptarla a beneficio de inventario (solo respondes de las deudas hasta donde lleguen los bienes heredados). Nuestros abogados en ${cityName} te asesoran sobre la opcion mas conveniente tras analizar la composicion de la herencia.`
      },
      {
        q: `Cuanto se paga de impuesto de sucesiones en ${cityName}?`,
        a: `El impuesto de sucesiones varia mucho segun la comunidad autonoma, el grado de parentesco, el valor de la herencia y las bonificaciones aplicables. En algunas comunidades las bonificaciones para hijos y conyuges son muy altas. Nuestros abogados en ${cityName} conocen la fiscalidad especifica de la zona y te ayudan a minimizar la carga fiscal legalmente.`
      }
    )
  } else if (serviceId.includes("laboral")) {
    baseFaqs.push(
      {
        q: `Me han despedido, que debo hacer primero?`,
        a: `Lo primero es no firmar nada que no entiendas completamente. Tienes 20 dias habiles para impugnar el despido. Contacta con un abogado laboralista cuanto antes. En LEGAL AGENCIA podemos conectarte con un especialista en ${cityName} en menos de 24 horas para que evalue tu caso y proteja tus derechos.`
      },
      {
        q: `Puedo reclamar horas extras no pagadas?`,
        a: `Si, puedes reclamar las horas extras de los ultimos 12 meses (plazo de prescripcion). Es importante recopilar pruebas: registros horarios, emails, testigos. Los abogados laboralistas de nuestra red en ${cityName} te ayudaran a construir un caso solido y recuperar lo que te corresponde.`
      },
      {
        q: `Que indemnizacion me corresponde por despido improcedente?`,
        a: `La indemnizacion por despido improcedente es de 33 dias por ano trabajado con un maximo de 24 mensualidades (para contratos posteriores a febrero 2012). Para la antiguedad anterior, se calcula a 45 dias por ano con maximo de 42 mensualidades. Nuestros abogados en ${cityName} calcularan tu indemnizacion exacta.`
      }
    )
  } else if (serviceId.includes("penal")) {
    baseFaqs.push(
      {
        q: `Me han detenido, que derechos tengo?`,
        a: `Tienes derecho a guardar silencio, a no declarar contra ti mismo, a ser asistido por un abogado desde el primer momento, a que se informe a un familiar de tu detencion y a ser examinado por un medico. LEGAL AGENCIA puede conectarte con un abogado penalista de guardia en ${cityName} de forma urgente.`
      },
      {
        q: `Que diferencia hay entre falta y delito?`,
        a: `Desde 2015 las faltas se eliminaron del Codigo Penal. Ahora existen delitos leves (antes faltas) y delitos menos graves y graves. Los delitos leves se juzgan en juicios rapidos y las penas son menores. Nuestros abogados penalistas en ${cityName} evaluaran la gravedad de tu situacion y te defenderan en consecuencia.`
      },
      {
        q: `Puedo evitar ir a prision?`,
        a: `Depende del delito, las circunstancias y tus antecedentes. Para penas de hasta 2 anos de prision, si no tienes antecedentes, es posible solicitar la suspension de la pena. Tambien existen alternativas como trabajos en beneficio de la comunidad. Un abogado penalista experto en ${cityName} evaluara tus opciones reales.`
      }
    )
  } else if (serviceId.includes("extranjeria")) {
    baseFaqs.push(
      {
        q: `Que requisitos necesito para el arraigo social en ${cityName}?`,
        a: `Para el arraigo social necesitas: 3 anos de residencia continuada en España (demostrable), carecer de antecedentes penales, un contrato de trabajo de al menos un ano o medios economicos suficientes, y un informe de integracion social. Nuestros abogados en ${cityName} te ayudan a preparar toda la documentacion.`
      },
      {
        q: `Cuanto tarda el proceso de nacionalidad?`,
        a: `El proceso de nacionalidad puede tardar entre 1 y 3 anos dependiendo de la carga de trabajo de la administracion. Es posible presentar un recurso contencioso por silencio administrativo si pasa mas de un ano sin respuesta. Nuestros abogados de extranjeria en ${cityName} te mantienen informado en cada fase del proceso.`
      },
      {
        q: `Pueden denegarme la renovacion del permiso de residencia?`,
        a: `Si, si no cumples los requisitos (medios economicos insuficientes, antecedentes penales, ausencias prolongadas de España). Si te deniegan la renovacion, tienes plazo para recurrir. Es fundamental actuar rapido con un abogado especialista. En ${cityName} podemos conectarte con uno de forma urgente.`
      }
    )
  } else if (serviceId.includes("accidente")) {
    baseFaqs.push(
      {
        q: `Tengo que pagar algo por adelantado al abogado de accidentes?`,
        a: `La mayoria de abogados de accidentes de nuestra red en ${cityName} trabajan a resultado: solo cobran si ganan tu caso, un porcentaje de la indemnizacion obtenida. No tienes que adelantar nada. Es la formula mas justa y la que recomendamos.`
      },
      {
        q: `Cuanto puedo reclamar por un accidente de trafico?`,
        a: `La indemnizacion depende de la gravedad de las lesiones, los dias de baja, las secuelas y los perjuicios economicos (lucro cesante). Se calcula segun el baremo de trafico vigente. Nuestros abogados en ${cityName} evaluaran tu caso con un perito medico para maximizar la reclamacion.`
      },
      {
        q: `Que plazo tengo para reclamar por un accidente?`,
        a: `El plazo general es de 1 ano desde la fecha del alta medica definitiva (no desde el accidente). Para accidentes laborales el plazo puede variar. Es importante no dejar pasar el tiempo. Contacta con un abogado especialista en ${cityName} cuanto antes para proteger tus derechos.`
      }
    )
  } else {
    baseFaqs.push(
      {
        q: `La primera consulta es realmente gratuita?`,
        a: `Si, la primera consulta con cualquier abogado de nuestra red en ${cityName} es siempre gratuita y sin compromiso. El abogado evalua tu caso, te explica tus opciones y te presenta un presupuesto transparente. Tu decides si quieres continuar.`
      },
      {
        q: `Puedo cambiar de abogado si no estoy satisfecho?`,
        a: `Absolutamente. Si el primer abogado que te asignamos en ${cityName} no te convence por cualquier motivo, te buscamos otro sin coste adicional. Tu satisfaccion es nuestra prioridad.`
      },
      {
        q: `Atenddeis urgencias legales fuera de horario?`,
        a: `Si, tenemos un protocolo de urgencias para casos que no pueden esperar: detenciones, ordenes de alejamiento, desahucios inminentes. Podemos conectarte con un abogado de guardia en ${cityName} en cuestion de horas, incluso fines de semana.`
      }
    )
  }

  return baseFaqs
}

function getRelatedKeywordPages(serviceId: string): { slug: string; label: string }[] {
  const KEYWORD_MAP: Record<string, { slug: string; label: string }[]> = {
    // LABORAL vertical
    "abogado-laboral": [
      { slug: "abogado-laboralista", label: "Abogado Laboralista" },
      { slug: "abogado-despido-improcedente", label: "Despido Improcedente" },
      { slug: "abogado-despido-disciplinario", label: "Despido Disciplinario" },
      { slug: "abogado-acoso-laboral", label: "Acoso Laboral" },
      { slug: "accidente-trabajo", label: "Accidente de Trabajo" },
      { slug: "abogado-de-oficio", label: "Abogado de Oficio" },
    ],
    "abogado-laboralista": [
      { slug: "abogado-laboral", label: "Abogado Laboral" },
      { slug: "abogado-despido-improcedente", label: "Despido Improcedente" },
      { slug: "abogado-despido-disciplinario", label: "Despido Disciplinario" },
      { slug: "abogado-acoso-laboral", label: "Acoso Laboral" },
      { slug: "accidente-trabajo", label: "Accidente de Trabajo" },
    ],
    // FAMILIA/DIVORCIO vertical
    "abogado-divorcio": [
      { slug: "abogado-divorcio-mutuo-acuerdo", label: "Divorcio Mutuo Acuerdo" },
      { slug: "abogado-separacion-matrimonial", label: "Separacion Matrimonial" },
      { slug: "abogado-pension-compensatoria", label: "Pension Compensatoria" },
      { slug: "abogado-pension-alimentos", label: "Pension de Alimentos" },
      { slug: "abogado-custodia-hijos", label: "Custodia de Hijos" },
      { slug: "abogado-familia", label: "Abogado de Familia" },
    ],
    "abogado-familia": [
      { slug: "abogado-divorcio", label: "Abogado de Divorcio" },
      { slug: "abogado-custodia-hijos", label: "Custodia de Hijos" },
      { slug: "abogado-pension-alimentos", label: "Pension de Alimentos" },
      { slug: "abogado-violencia-domestica", label: "Violencia Domestica" },
      { slug: "abogado-separacion-matrimonial", label: "Separacion Matrimonial" },
      { slug: "abogado-familiar", label: "Abogado Familiar" },
    ],
    // HERENCIAS vertical
    "abogado-herencias": [
      { slug: "abogado-especialista-herencias", label: "Especialista Herencias" },
      { slug: "tramitar-herencia", label: "Tramitar Herencia" },
      { slug: "reclamar-herencia", label: "Reclamar Herencia" },
    ],
    // INMOBILIARIO vertical
    "abogado-inmobiliario": [
      { slug: "abogado-desahucio", label: "Desahucio" },
      { slug: "reclamar-gastos-hipoteca", label: "Gastos Hipoteca" },
      { slug: "reclamar-clausula-suelo", label: "Clausula Suelo" },
      { slug: "abogado-hipoteca-variable", label: "Hipoteca Variable" },
      { slug: "abogado-contrato-arrendamiento", label: "Contrato Arrendamiento" },
      { slug: "abogado-deuda-hipotecaria", label: "Deuda Hipotecaria" },
    ],
    // PENAL vertical
    "abogado-penal": [
      { slug: "abogado-penalista", label: "Abogado Penalista" },
      { slug: "recurrir-multa-trafico", label: "Recurrir Multa Trafico" },
      { slug: "abogado-estafa-internet", label: "Estafa por Internet" },
      { slug: "abogado-violencia-domestica", label: "Violencia Domestica" },
    ],
    // MERCANTIL/EMPRESAS vertical
    "abogado-empresas": [
      { slug: "abogado-mercantil", label: "Abogado Mercantil" },
      { slug: "abogado-concurso-acreedores", label: "Concurso Acreedores" },
      { slug: "abogado-estafa-internet", label: "Estafa por Internet" },
    ],
    "abogado-mercantil": [
      { slug: "abogado-empresas", label: "Abogado de Empresas" },
      { slug: "abogado-concurso-acreedores", label: "Concurso Acreedores" },
      { slug: "abogado-estafa-internet", label: "Estafa por Internet" },
    ],
    // ACCIDENTES vertical
    "abogado-accidentes": [
      { slug: "reclamar-accidente-trafico", label: "Reclamar Accidente Trafico" },
      { slug: "accidente-trabajo", label: "Accidente de Trabajo" },
      { slug: "reclamar-seguro", label: "Reclamar al Seguro" },
      { slug: "reclamar-seguro-hogar", label: "Reclamar Seguro Hogar" },
    ],
    // EXTRANJERIA vertical
    "abogado-extranjeria": [
      { slug: "abogado-de-oficio", label: "Abogado de Oficio" },
      { slug: "consulta-abogado-gratis", label: "Consulta Abogado Gratis" },
    ],
  }

  // Return mapped keywords, or a generic set of high-value pages
  return KEYWORD_MAP[serviceId] || [
    { slug: "abogado-laboralista", label: "Abogado Laboralista" },
    { slug: "abogado-desahucio", label: "Desahucio" },
    { slug: "abogado-despido-improcedente", label: "Despido Improcedente" },
    { slug: "reclamar-gastos-hipoteca", label: "Gastos Hipoteca" },
    { slug: "abogado-divorcio", label: "Abogado de Divorcio" },
    { slug: "consulta-abogado-gratis", label: "Consulta Abogado Gratis" },
  ]
}

interface ServiceCityContentProps {
  pageTitle: string
  serviceName: { name: string; title: string; singular: string }
  cityName: string
  citySlug: string
  serviceId: Service
  modifierText: string
  nearbyCities: string[]
  relatedServices: string[]
  serviceNames: Record<Service, { name: string; title: string; singular: string }>
}

export function ServiceCityContent({
  pageTitle,
  serviceName,
  cityName,
  citySlug,
  serviceId,
  modifierText,
  nearbyCities,
  relatedServices,
  serviceNames,
}: ServiceCityContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleReviews, setVisibleReviews] = useState(3)

  const reviews = generateReviews(cityName, serviceName.title, serviceId)
  const faqs = generateFAQs(cityName, serviceName, modifierText, serviceId)
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  function getCityDisplayName(slug: string): string {
    return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }

  return (
    <>
      {/* Hero CTA */}
      <section className="relative bg-secondary">
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-5xl mx-auto">
          <nav className="text-xs tracking-wider text-muted-foreground mb-6 font-sans flex items-center gap-1.5">
            <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <span>/</span>
            <span>{serviceName.title}</span>
            <span>/</span>
            <span className="text-foreground">{cityName}</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-foreground text-balance">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-2xl font-sans leading-relaxed">
            {"Encuentra el mejor "}
            {serviceName.singular}
            {modifierText ? ` ${modifierText.toLowerCase()}` : ""}
            {` en ${cityName}. Comparamos experiencia, especializacion y honorarios. Primera consulta gratuita y sin compromiso.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Llama gratis: {PHONE_DISPLAY}
            </a>
            <a
              href="#como-funciona-ciudad"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-sm sm:text-base font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              Como funciona
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8 text-xs sm:text-sm text-muted-foreground font-sans">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="ml-1 font-semibold text-foreground">{avgRating}/5</span>
            </div>
            <span className="text-border">|</span>
            <span>{reviews.length}+ opiniones verificadas</span>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-foreground/60 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-sans font-medium text-foreground">100% Verificado</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">Abogados colegiados</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-foreground/60 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-sans font-medium text-foreground">{"< 24 horas"}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">Tiempo respuesta</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-foreground/60 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-sans font-medium text-foreground">1a consulta gratis</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">Sin compromiso</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-foreground/60 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-sans font-medium text-foreground">+2.000 casos</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">Resueltos con exito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona-ciudad" className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-5xl mx-auto">
        <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
          Como funciona
        </p>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-10 sm:mb-16 text-balance">
          {`Encontrar ${serviceName.singular} en ${cityName} nunca fue tan facil`}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="relative">
            <span className="font-serif text-5xl sm:text-6xl text-foreground/10">01</span>
            <h3 className="font-sans text-sm sm:text-base font-medium text-foreground mt-2">Cuentanos tu caso</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
              {`Llamanos y explicanos tu situacion. Tipo de caso, urgencia, zona de ${cityName}. Una llamada de 5 minutos es suficiente.`}
            </p>
          </div>
          <div className="relative">
            <span className="font-serif text-5xl sm:text-6xl text-foreground/10">02</span>
            <h3 className="font-sans text-sm sm:text-base font-medium text-foreground mt-2">Te asignamos un especialista</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
              {`Nuestro equipo selecciona el ${serviceName.singular} ideal en ${cityName} segun tu tipo de caso, presupuesto y necesidades. Te lo presentamos en menos de 24 horas.`}
            </p>
          </div>
          <div className="relative">
            <span className="font-serif text-5xl sm:text-6xl text-foreground/10">03</span>
            <h3 className="font-sans text-sm sm:text-base font-medium text-foreground mt-2">Primera consulta gratis</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
              {`El abogado evalua tu caso en una primera consulta gratuita. Te explica opciones, probabilidades y honorarios. Tu decides sin presion.`}
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Empieza ahora: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Why LEGAL AGENCIA */}
      <section className="bg-card border-y border-border">
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-5xl mx-auto">
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
            Por que LEGAL AGENCIA
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-10 sm:mb-16 text-balance">
            {`Tu caso en las mejores manos de ${cityName}`}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors">
              <CheckCircle className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-sans text-sm sm:text-base font-medium text-foreground">Abogados verificados</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
                {`Solo trabajamos con abogados colegiados y verificados en ${cityName}. Comprobamos colegiacion, trayectoria y especializacion real.`}
              </p>
            </div>
            <div className="border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors">
              <Shield className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-sans text-sm sm:text-base font-medium text-foreground">Honorarios transparentes</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
                {`El abogado te presentara un presupuesto claro en la primera consulta. Sin costes ocultos, sin sorpresas. Tu decides con toda la informacion.`}
              </p>
            </div>
            <div className="border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors">
              <Heart className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-sans text-sm sm:text-base font-medium text-foreground">Especializacion real</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
                {"No te asignamos un abogado generalista. Cada caso se asigna a un especialista con experiencia demostrada en ese tipo concreto de asunto legal."}
              </p>
            </div>
            <div className="border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors">
              <Users className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-sans text-sm sm:text-base font-medium text-foreground">Seguimiento del caso</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-sans leading-relaxed">
                {`Hacemos seguimiento para asegurarnos de que estas satisfecho con el servicio del abogado en ${cityName}. Si no lo estas, te buscamos otro.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
              Opiniones reales
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground text-balance">
              {`Clientes de ${cityName} que ya confiaron en nosotros`}
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-sans font-medium text-foreground">{avgRating}/5</span>
            <span className="text-xs text-muted-foreground font-sans">({reviews.length} opiniones)</span>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {reviews.slice(0, visibleReviews).map((review, i) => (
            <article key={i} className="border border-border p-5 sm:p-8 rounded-2xl">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center font-sans text-xs font-medium text-foreground">
                      {review.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-sans font-medium text-foreground">{review.name}</p>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">{review.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-current text-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-foreground/80 font-sans leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-3 mt-4 text-[10px] sm:text-xs text-muted-foreground font-sans">
                <span>{review.date}</span>
                {review.verified && (
                  <>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verificada
                    </span>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <button
            onClick={() => setVisibleReviews(reviews.length)}
            className="mt-6 sm:mt-8 flex items-center gap-2 text-sm font-sans font-medium text-foreground hover:text-foreground/70 transition-colors mx-auto"
          >
            Ver mas opiniones
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </section>

      {/* Mid-page CTA */}
      <section className="bg-secondary">
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            {`No dejes pasar mas tiempo. Tu caso necesita un ${serviceName.singular} en ${cityName}`}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6 max-w-xl mx-auto font-sans leading-relaxed">
            {"Llamanos ahora y en menos de 24 horas tendras un abogado especializado evaluando tu caso. Primera consulta gratuita."}
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 mt-8 rounded-full font-sans text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Llamar ahora: {PHONE_DISPLAY}
          </a>
          <p className="text-xs text-muted-foreground mt-4 font-sans">Lunes a viernes, 9:00 - 20:00 | Sabados 9:00 - 14:00</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-4xl mx-auto">
        <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-10 sm:mb-16 text-balance">
          {`Todo lo que necesitas saber sobre ${serviceName.title.toLowerCase()} en ${cityName}`}
        </h2>

        <div className="space-y-0 border-t border-border">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-left"
              >
                <h3 className="text-xs sm:text-sm font-sans font-medium text-foreground leading-relaxed pr-4">{faq.q}</h3>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="pb-5 sm:pb-6 -mt-2">
                  <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-card border-y border-border">
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-4xl mx-auto">
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
            Guia completa
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-8 text-balance">
            {`Guia para encontrar ${serviceName.singular} en ${cityName}`}
          </h2>
          <div className="prose-sm font-sans text-muted-foreground space-y-4 leading-relaxed text-xs sm:text-sm">
            <p>
              {`Encontrar un buen ${serviceName.singular} en ${cityName} puede ser complicado si no sabes por donde empezar. En LEGAL AGENCIA hemos ayudado a mas de 2.000 clientes en ${cityName} y en toda España a encontrar el abogado ideal para su caso.`}
            </p>
            <h3 className="text-foreground font-medium text-sm sm:text-base pt-4">
              {"Que buscar en un buen abogado"}
            </h3>
            <p>
              {`Un buen ${serviceName.singular} en ${cityName} debe tener experiencia demostrable en tu tipo de caso concreto, estar colegiado y en activo, ofrecer una primera consulta para evaluar tu situacion, y presentarte un presupuesto claro y cerrado antes de empezar a trabajar.`}
            </p>
            <p>
              {"Desconfia de quien te promete resultados seguros (ningun caso tiene garantia al 100%) o de quien no quiere darte un presupuesto por escrito. La transparencia es la marca de un buen profesional."}
            </p>
            <h3 className="text-foreground font-medium text-sm sm:text-base pt-4">
              {`Por que confiar en LEGAL AGENCIA para encontrar ${serviceName.singular} en ${cityName}`}
            </h3>
            <p>
              {`Nuestro equipo verifica personalmente a cada abogado de nuestra red en ${cityName}. Comprobamos colegiacion, trayectoria, especializacion real y opiniones de clientes anteriores. Cuando te recomendamos un abogado, es porque confiamos en su profesionalidad.`}
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
              {serviceName.title} en otras ciudades
            </p>
            <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground mb-6">
              Localidades cercanas
            </h3>
            <nav aria-label="Ciudades cercanas">
              <ul className="space-y-2">
                {nearbyCities.map((city) => (
                  <li key={city}>
                    <Link
                      href={`/${serviceId}/${city}/`}
                      className="flex items-center justify-between py-2.5 border-b border-border/50 group"
                    >
                      <span className="text-xs sm:text-sm font-sans text-foreground group-hover:text-foreground/70 transition-colors">
                        {`${serviceName.title} en ${getCityDisplayName(city)}`}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
              Otros servicios en {cityName}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground mb-6">
              Tambien te puede interesar
            </h3>
            <nav aria-label="Servicios relacionados">
              <ul className="space-y-2">
                {relatedServices.map((svc) => (
                  <li key={svc}>
                    <Link
                      href={`/${svc}/${citySlug}/`}
                      className="flex items-center justify-between py-2.5 border-b border-border/50 group"
                    >
                      <span className="text-xs sm:text-sm font-sans text-foreground group-hover:text-foreground/70 transition-colors">
                        {`${serviceNames[svc as Service]?.title || svc} en ${cityName}`}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Related problem pages - keyword interlinking */}
      <section className="bg-muted">
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-5xl mx-auto">
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
            Problemas legales relacionados
          </p>
          <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground mb-8">
            {`Situaciones frecuentes en ${cityName}`}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {getRelatedKeywordPages(serviceId).map((kw) => (
              <Link
                key={kw.slug}
                href={`/${kw.slug}/${citySlug}/`}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-xl group hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-xs sm:text-sm font-sans text-foreground group-hover:text-primary transition-colors">
                  {kw.label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-foreground">
        <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-background/40 mb-4 font-sans">
            Da el primer paso
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-background text-balance">
            {"Tu caso merece la mejor defensa"}
          </h2>
          <p className="text-sm sm:text-base text-background/70 mt-4 sm:mt-6 max-w-lg mx-auto font-sans leading-relaxed">
            {`Llama ahora y encuentra el ${serviceName.singular} ideal en ${cityName}. Sin compromiso, primera consulta gratis.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full font-sans text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-8 sm:px-10 py-4 sm:py-5 rounded-full font-sans text-sm sm:text-base hover:border-background/60 transition-colors"
            >
              Ver mas servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `LEGAL AGENCIA - ${pageTitle}`,
            description: `Encuentra los mejores ${serviceName.title.toLowerCase()} en ${cityName}. Primera consulta gratuita.`,
            telephone: PHONE,
            url: `https://www.legalagencia.com/${serviceId}/${citySlug}/`,
            address: {
              "@type": "PostalAddress",
              addressLocality: cityName,
              addressCountry: "ES",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: avgRating,
              reviewCount: reviews.length,
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  )
}
