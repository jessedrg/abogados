import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1e3a5f",
          borderRadius: "6px",
          fontSize: "16px",
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.5px",
        }}
      >
        LA
      </div>
    ),
    { ...size }
  )
}
