import { ImageResponse } from "next/og";
import { defaultLocale, isLocale } from "@/lib/i18n";

export const alt = "Danny Schapeit Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: PageProps) {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;
  const isEnglish = locale === "en";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #008080 0%, #04515a 100%)",
          color: "#111",
          fontFamily: "Arial, sans-serif",
          padding: 40,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "4px solid #000",
            background: "#c0c0c0",
            boxShadow: "10px 10px 0 rgba(0,0,0,0.28)",
            padding: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(90deg, #2d66cf, #0d3b9a)",
              color: "#fff",
              padding: "8px 12px",
              border: "2px solid #fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 18,
                  height: 18,
                  background: "#f4f4f4",
                  border: "2px solid #000",
                }}
              />
              <div style={{ fontSize: 24, fontWeight: 700 }}>
                Danny Schapeit
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 22, height: 22, background: "#d9d9d9", border: "2px solid #000" }} />
              <div style={{ width: 22, height: 22, background: "#d9d9d9", border: "2px solid #000" }} />
              <div style={{ width: 22, height: 22, background: "#c53e14", border: "2px solid #000" }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 28, flex: 1, alignItems: "center", padding: "24px 8px 16px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                width: 170,
              }}
            >
              {["Danny.exe", "CV.doc", "Skills.exe", isEnglish ? "Projects" : "Projekte"].map((item) => (
                <div key={item} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      border: "2px solid rgba(255,255,255,0.7)",
                      background: "rgba(0,20,110,0.22)",
                    }}
                  />
                  <div style={{ color: "#fff", fontSize: 18, textShadow: "1px 1px 0 #000" }}>{item}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                gap: 16,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ color: "#001a7a", fontSize: 28, fontWeight: 700 }}>
                  {isEnglish ? "Software Engineer" : "Softwareentwickler"}
                </div>
                <div style={{ fontSize: 68, lineHeight: 0.92, fontWeight: 800 }}>
                  Danny Schapeit
                </div>
                <div style={{ fontSize: 28, lineHeight: 1.35, maxWidth: 760 }}>
                  {isEnglish
                    ? "Android, full-stack, architecture, deployment, and maintainable systems."
                    : "Android, Fullstack, Architektur, Deployment und wartbare Systeme."}
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Android", "TypeScript", "Next.js", "Kotlin", "Docker", "Kubernetes"].map((tag) => (
                  <div
                    key={tag}
                    style={{
                      border: "2px solid #000",
                      background: "#e7e7e7",
                      padding: "8px 12px",
                      fontSize: 24,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "2px solid #8b8b8b",
              padding: "10px 12px 4px",
              color: "#333",
              fontSize: 22,
            }}
          >
            <div>{isEnglish ? "Portfolio desktop view" : "Portfolio Desktop-Ansicht"}</div>
            <div>danny.schapeit.com/{locale}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
