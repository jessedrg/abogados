import { Resend } from "resend"

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

interface LeadData {
  nombre: string
  telefono: string
  zona: string
  tipoAtencion: string
  detalles: string
  conversacion: string
}

export async function sendLeadEmail(data: LeadData) {
  try {
    const result = await getResend().emails.send({
      from: "Legal Agencia <leads@upnesttalent.com>",
      to: ["jesse@upnesttalent.com"],
      subject: `⚖️ Nuevo Lead LEGAL AGENCIA - ${data.zona || "Sin zona"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f0f2f5;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background-color: #ffffff; border: 1px solid #d0d5dd; padding: 40px;">
              <!-- Header -->
              <div style="border-bottom: 1px solid #d0d5dd; padding-bottom: 24px; margin-bottom: 32px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 400; letter-spacing: -0.5px; color: #1e3a5f;">LEGAL AGENCIA</h1>
                <p style="margin: 8px 0 0; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #667085;">Nuevo lead abogados</p>
              </div>
              
              <!-- Lead Info -->
              <div style="margin-bottom: 32px;">
                <h2 style="margin: 0 0 20px; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; color: #667085; font-weight: 400;">Información del contacto</h2>
                
                <div style="background-color: #f8fafc; border: 1px solid #d0d5dd; padding: 20px; margin-bottom: 16px;">
                  <p style="margin: 0 0 12px; font-size: 13px; color: #666;"><strong style="color: #1e3a5f;">Nombre:</strong> ${data.nombre}</p>
                  <p style="margin: 0 0 12px; font-size: 13px; color: #666;"><strong style="color: #1e3a5f;">Teléfono:</strong> ${data.telefono}</p>
                  <p style="margin: 0 0 12px; font-size: 13px; color: #666;"><strong style="color: #1e3a5f;">Zona:</strong> ${data.zona}</p>
                  <p style="margin: 0; font-size: 13px; color: #666;"><strong style="color: #1e3a5f;">Tipo de caso:</strong> ${data.tipoAtencion}</p>
                </div>
              </div>
              
              <!-- Conversación -->
              <div>
                <h2 style="margin: 0 0 20px; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; color: #667085; font-weight: 400;">Conversación completa</h2>
                <div style="background-color: #f8fafc; border: 1px solid #d0d5dd; padding: 20px; white-space: pre-wrap; font-size: 13px; line-height: 1.6; color: #444;">
${data.conversacion}
                </div>
              </div>
              
              <!-- Footer -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #d0d5dd;">
                <p style="margin: 0; font-size: 11px; color: #667085; letter-spacing: 0.5px;">
                  Lead generado automáticamente desde legalagencia.com
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    console.log("[v0] Email sent successfully:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error }
  }
}
