import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const runtime = "edge";
export const alt = "Alessandro Fontana portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#030303",
          color: "#f5f5f5",
          padding: 64,
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -90,
            top: 40,
            width: 480,
            height: 480,
            border: "36px solid #f5f5f5",
            borderRadius: 240,
            opacity: 0.16,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
            <span>{siteConfig.shortName}</span>
            <span>Full Stack / AI Integrations</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ color: "#c084fc", fontSize: 28 }}>{siteConfig.location.en}</div>
            <h1 style={{ fontSize: 92, lineHeight: 0.95, margin: 0, maxWidth: 860 }}>
              Premium web products, business systems, and AI integrations.
            </h1>
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#b8b8b0" }}>
            <span>React</span>
            <span>Next.js</span>
            <span>WordPress</span>
            <span>Laravel</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
