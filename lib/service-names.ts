import type { Service } from "@/lib/sitemap-data"

export const SERVICE_NAMES: Record<Service, { name: string; title: string; singular: string }> = {
  // ============ BASE SERVICES ============
  "abogado-divorcio": { name: "Abogado de Divorcio", title: "Abogados de Divorcio", singular: "abogado de divorcio" },
  "abogado-herencias": { name: "Abogado de Herencias", title: "Abogados de Herencias", singular: "abogado de herencias" },
  "abogado-accidentes": { name: "Abogado de Accidentes", title: "Abogados de Accidentes", singular: "abogado de accidentes" },
  "abogado-laboral": { name: "Abogado Laboral", title: "Abogados Laboralistas", singular: "abogado laboralista" },
  "abogado-penal": { name: "Abogado Penalista", title: "Abogados Penalistas", singular: "abogado penalista" },
  "abogado-extranjeria": { name: "Abogado de Extranjeria", title: "Abogados de Extranjeria", singular: "abogado de extranjeria" },
  "abogado-familia": { name: "Abogado de Familia", title: "Abogados de Familia", singular: "abogado de familia" },
  "abogado-civil": { name: "Abogado Civil", title: "Abogados Civilistas", singular: "abogado civilista" },
  "abogado-inmobiliario": { name: "Abogado Inmobiliario", title: "Abogados Inmobiliarios", singular: "abogado inmobiliario" },
  "abogado-empresas": { name: "Abogado de Empresas", title: "Abogados de Empresas", singular: "abogado de empresas" },
  // ============ ALIAS SERVICES ============
  "abogado-laboralista": { name: "Abogado Laboralista", title: "Abogados Laboralistas", singular: "abogado laboralista" },
  "abogado-familiar": { name: "Abogado Familiar", title: "Abogados Familiares", singular: "abogado familiar" },
  "abogado-penalista": { name: "Abogado Penalista", title: "Abogados Penalistas", singular: "abogado penalista" },
  "abogado-mercantil": { name: "Abogado Mercantil", title: "Abogados Mercantiles", singular: "abogado mercantil" },
  "abogado-de-oficio": { name: "Abogado de Oficio", title: "Abogados de Oficio", singular: "abogado de oficio" },
  // ============ LABORAL PROBLEMS ============
  "abogado-despido-improcedente": { name: "Abogado Despido Improcedente", title: "Abogados Despido Improcedente", singular: "abogado para despido improcedente" },
  "abogado-despido-disciplinario": { name: "Abogado Despido Disciplinario", title: "Abogados Despido Disciplinario", singular: "abogado para despido disciplinario" },
  "abogado-acoso-laboral": { name: "Abogado Acoso Laboral", title: "Abogados Acoso Laboral", singular: "abogado para acoso laboral" },
  // ============ FAMILIA/DIVORCIO PROBLEMS ============
  "abogado-separacion-matrimonial": { name: "Abogado Separacion Matrimonial", title: "Abogados Separacion Matrimonial", singular: "abogado para separacion matrimonial" },
  "abogado-pension-compensatoria": { name: "Abogado Pension Compensatoria", title: "Abogados Pension Compensatoria", singular: "abogado para pension compensatoria" },
  "abogado-pension-alimentos": { name: "Abogado Pension Alimentos", title: "Abogados Pension de Alimentos", singular: "abogado para pension de alimentos" },
  "abogado-custodia-hijos": { name: "Abogado Custodia Hijos", title: "Abogados Custodia de Hijos", singular: "abogado para custodia de hijos" },
  "abogado-violencia-domestica": { name: "Abogado Violencia Domestica", title: "Abogados Violencia Domestica", singular: "abogado para violencia domestica" },
  "abogado-divorcio-mutuo-acuerdo": { name: "Abogado Divorcio Mutuo Acuerdo", title: "Abogados Divorcio Mutuo Acuerdo", singular: "abogado para divorcio de mutuo acuerdo" },
  // ============ HERENCIAS PROBLEMS ============
  "abogado-especialista-herencias": { name: "Abogado Especialista en Herencias", title: "Abogados Especialistas en Herencias", singular: "abogado especialista en herencias" },
  "tramitar-herencia": { name: "Tramitar Herencia", title: "Tramitar Herencia", singular: "abogado para tramitar herencia" },
  "reclamar-herencia": { name: "Reclamar Herencia", title: "Reclamar Herencia", singular: "abogado para reclamar herencia" },
  // ============ INMOBILIARIO PROBLEMS ============
  "abogado-desahucio": { name: "Abogado Desahucio", title: "Abogados para Desahucios", singular: "abogado para desahucio" },
  "reclamar-gastos-hipoteca": { name: "Reclamar Gastos Hipoteca", title: "Reclamar Gastos de Hipoteca", singular: "abogado para reclamar gastos de hipoteca" },
  "reclamar-clausula-suelo": { name: "Reclamar Clausula Suelo", title: "Reclamar Clausula Suelo", singular: "abogado para reclamar clausula suelo" },
  "abogado-hipoteca-variable": { name: "Abogado Hipoteca Variable", title: "Abogados Hipoteca Variable", singular: "abogado para hipoteca variable" },
  "abogado-contrato-arrendamiento": { name: "Abogado Contrato Arrendamiento", title: "Abogados Contrato de Arrendamiento", singular: "abogado para contrato de arrendamiento" },
  "abogado-deuda-hipotecaria": { name: "Abogado Deuda Hipotecaria", title: "Abogados Deuda Hipotecaria", singular: "abogado para deuda hipotecaria" },
  // ============ MERCANTIL/EMPRESAS ============
  "abogado-concurso-acreedores": { name: "Abogado Concurso Acreedores", title: "Abogados Concurso de Acreedores", singular: "abogado para concurso de acreedores" },
  "abogado-estafa-internet": { name: "Abogado Estafa Internet", title: "Abogados Estafas por Internet", singular: "abogado para estafa por internet" },
  // ============ SEGUROS ============
  "reclamar-seguro": { name: "Reclamar Seguro", title: "Reclamar al Seguro", singular: "abogado para reclamar al seguro" },
  "reclamar-seguro-hogar": { name: "Reclamar Seguro Hogar", title: "Reclamar Seguro del Hogar", singular: "abogado para reclamar seguro del hogar" },
  "reclamar-accidente-trafico": { name: "Reclamar Accidente Trafico", title: "Reclamar Accidente de Trafico", singular: "abogado para reclamar accidente de trafico" },
  // ============ TRÁFICO/MULTAS ============
  "recurrir-multa-trafico": { name: "Recurrir Multa Trafico", title: "Recurrir Multa de Trafico", singular: "abogado para recurrir multa de trafico" },
  "recurso-multa-trafico": { name: "Recurso Multa Trafico", title: "Recurso Multa de Trafico", singular: "abogado para recurso de multa de trafico" },
  "accidente-trabajo": { name: "Accidente de Trabajo", title: "Accidente de Trabajo", singular: "abogado para accidente de trabajo" },
  // ============ CONSULTA GRATUITA ============
  "consulta-abogado-gratis": { name: "Consulta Abogado Gratis", title: "Consulta con Abogado Gratis", singular: "abogado consulta gratuita" },
}
