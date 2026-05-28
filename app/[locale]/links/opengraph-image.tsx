import { ImageResponse } from "next/og";
import { defaultLocale, isLocale } from "@/lib/i18n";

export const alt = "Danny Schapeit Links";
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
  const cards = [isEnglish ? "Email" : "E-Mail", "GitHub", "LinkedIn", "Dev.to"];

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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            border: "4px solid #000",
            background: "#c0c0c0",
            boxShadow: "10px 10px 0 rgba(0,0,0,0.28)",
            padding: 18,
            gap: 24,
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
            <div style={{ fontSize: 24, fontWeight: 700 }}>Links.exe</div>
            <div style={{ fontSize: 20 }}>/{locale}/links</div>
          </div>

          <div style={{ display: "flex", gap: 24, alignItems: "center", flex: 1 }}>
            <div
              style={{
                width: 220,
                height: 220,
                border: "3px solid #000",
                background: "linear-gradient(135deg, #fff7bf 0%, #ffc6dc 52%, #9deaff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              Danny
            </div>

            <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
              <div style={{ color: "#001a7a", fontSize: 26, fontWeight: 700 }}>
                {isEnglish ? "Quick Access" : "Schnellzugriff"}
              </div>
              <div style={{ fontSize: 70, lineHeight: 0.92, fontWeight: 800 }}>
                {isEnglish ? "All important links" : "Alle wichtigen Links"}
              </div>
              <div style={{ fontSize: 28, lineHeight: 1.35, maxWidth: 720 }}>
                {isEnglish
                  ? "Contact, GitHub, LinkedIn, articles, and the full desktop site."
                  : "Kontakt, GitHub, LinkedIn, Artikel und die volle Desktop-Seite."}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 10 }}>
                {cards.map((card) => (
                  <div
                    key={card}
                    style={{
                      border: "2px solid #000",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(232,232,232,0.95))",
                      padding: "12px 16px",
                      fontSize: 24,
                    }}
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
