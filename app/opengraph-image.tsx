import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "LEGAL AGENCIA — Encuentra el abogado perfecto para tu caso"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1e3a5f",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              fontFamily: "Georgia, serif",
            }}
          >
            LEGAL AGENCIA
          </div>
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#ffffff",
              opacity: 0.4,
            }}
          />
          <div
            style={{
              fontSize: "28px",
              color: "#ffffff",
              opacity: 0.8,
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Encuentra el abogado perfecto para tu caso
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "20px",
              fontSize: "18px",
              color: "#ffffff",
              opacity: 0.6,
            }}
          >
            <span>Primera consulta gratuita</span>
            <span>·</span>
            <span>+34 824 805 618</span>
            <span>·</span>
            <span>Toda España</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
