import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <span className="text-3xl font-serif tracking-tight">LEGAL AGENCIA</span>
            <p className="mt-4 text-background/60 leading-relaxed text-sm">
              Conectamos clientes con los mejores abogados de España. Primera consulta gratuita y asesoramiento personalizado.
            </p>
            <a
              href="tel:+34824805618"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              824 805 618
            </a>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-background/40 mb-4">Servicios</p>
            <nav className="flex flex-col gap-2.5">
              <Link href="/abogado-divorcio/madrid/" className="text-sm text-background/70 hover:text-background transition-colors">Abogado de divorcio</Link>
              <Link href="/abogado-herencias/madrid/" className="text-sm text-background/70 hover:text-background transition-colors">Abogado de herencias</Link>
              <Link href="/abogado-laboral/madrid/" className="text-sm text-background/70 hover:text-background transition-colors">Abogado laboral</Link>
              <Link href="/abogado-penal/madrid/" className="text-sm text-background/70 hover:text-background transition-colors">Abogado penalista</Link>
              <Link href="/abogado-extranjeria/madrid/" className="text-sm text-background/70 hover:text-background transition-colors">Abogado extranjeria</Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-background/40 mb-4">Ciudades</p>
            <nav className="flex flex-col gap-2.5">
              <Link href="/abogado-divorcio/madrid/" className="text-sm text-background/70 hover:text-background transition-colors">Abogados en Madrid</Link>
              <Link href="/abogado-divorcio/barcelona/" className="text-sm text-background/70 hover:text-background transition-colors">Abogados en Barcelona</Link>
              <Link href="/abogado-divorcio/valencia/" className="text-sm text-background/70 hover:text-background transition-colors">Abogados en Valencia</Link>
              <Link href="/abogado-divorcio/sevilla/" className="text-sm text-background/70 hover:text-background transition-colors">Abogados en Sevilla</Link>
              <Link href="/abogado-divorcio/bilbao/" className="text-sm text-background/70 hover:text-background transition-colors">Abogados en Bilbao</Link>
              <Link href="/abogado-divorcio/malaga/" className="text-sm text-background/70 hover:text-background transition-colors">Abogados en Malaga</Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-background/40 mb-4">Contacto</p>
            <div className="flex flex-col gap-2.5 text-sm text-background/70">
              <a href="mailto:hola@legalagencia.com" className="hover:text-background transition-colors">hola@legalagencia.com</a>
              <a href="tel:+34824805618" className="hover:text-background transition-colors">+34 824 805 618</a>
              <p>L-V 9:00 - 20:00</p>
              <p>Sabados 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">2026 LEGAL AGENCIA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-xs text-background/40">
            <Link href="#" className="hover:text-background/70 transition-colors">Politica de privacidad</Link>
            <Link href="#" className="hover:text-background/70 transition-colors">Aviso legal</Link>
            <Link href="#" className="hover:text-background/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
