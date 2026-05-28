"use client";

import Link from "next/link";
import {
  Minesweeper,
  Minesweeper2,
  MinesweeperLost,
  Windows95Minesweeper,
} from "react-old-icons";
import { getNotFoundContent } from "@/app/site-content";
import type { Locale } from "@/lib/i18n";

type Cell =
  | { type: "hidden" }
  | { type: "mine" }
  | { type: "flag" }
  | { type: "wrong-flag" }
  | { type: "detonated" }
  | { type: "revealed"; value: number };

const board: Cell[][] = [
  [
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 1 },
    { type: "mine" },
    { type: "revealed", value: 2 },
    { type: "hidden" },
    { type: "hidden" },
    { type: "hidden" },
    { type: "hidden" },
  ],
  [
    { type: "mine" },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 3 },
    { type: "flag" },
    { type: "hidden" },
    { type: "hidden" },
    { type: "hidden" },
  ],
  [
    { type: "revealed", value: 3 },
    { type: "mine" },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 1 },
    { type: "mine" },
    { type: "revealed", value: 3 },
    { type: "revealed", value: 2 },
    { type: "hidden" },
    { type: "hidden" },
  ],
  [
    { type: "revealed", value: 2 },
    { type: "mine" },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 3 },
    { type: "mine" },
    { type: "revealed", value: 1 },
    { type: "hidden" },
    { type: "hidden" },
  ],
  [
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "mine" },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 2 },
    { type: "mine" },
    { type: "revealed", value: 4 },
    { type: "revealed", value: 2 },
    { type: "wrong-flag" },
    { type: "hidden" },
  ],
  [
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 2 },
    { type: "mine" },
    { type: "revealed", value: 3 },
    { type: "revealed", value: 4 },
    { type: "mine" },
    { type: "revealed", value: 2 },
    { type: "hidden" },
    { type: "hidden" },
  ],
  [
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 2 },
    { type: "detonated" },
    { type: "revealed", value: 3 },
    { type: "mine" },
    { type: "revealed", value: 3 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 0 },
  ],
  [
    { type: "revealed", value: 0 },
    { type: "revealed", value: 0 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 2 },
    { type: "revealed", value: 3 },
    { type: "revealed", value: 3 },
    { type: "mine" },
    { type: "revealed", value: 1 },
    { type: "revealed", value: 0 },
  ],
];

const numberColors: Record<number, string> = {
  1: "#0000ff",
  2: "#0a7a0a",
  3: "#d11c1c",
  4: "#101c92",
  5: "#7e1a1a",
  6: "#0f7a7a",
  7: "#111",
  8: "#666",
};

export default function Solitaire404({ locale }: { locale: Locale }) {
  const copy = getNotFoundContent(locale);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          width: "min(100%, 980px)",
          border: "2px solid",
          borderColor:
            "var(--window-light) var(--window-shadow-dark) var(--window-shadow-dark) var(--window-light)",
          background: "var(--window-face)",
          boxShadow: "6px 6px 0 rgba(0, 0, 0, 0.28)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            padding: "6px 10px",
            background: "linear-gradient(90deg, var(--title-active-a), var(--title-active-b))",
            color: "#fff",
            fontFamily: "var(--font-pixel), monospace",
            fontSize: 24,
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Windows95Minesweeper size={18} alt="Minesweeper" />
            <span>winmine.exe</span>
          </span>
          <span>{copy.titlebar}</span>
        </div>

        <div
          style={{
            display: "grid",
            gap: 18,
            padding: 18,
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 10,
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#001a7a",
                fontFamily: "var(--font-pixel), monospace",
                fontSize: 24,
              }}
            >
              {copy.kicker}
            </p>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-pixel), monospace",
                fontSize: "clamp(36px, 7vw, 62px)",
                lineHeight: 0.92,
              }}
            >
              {copy.title}
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: "60ch",
                lineHeight: 1.6,
              }}
            >
              {copy.description}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <Link href="/de" className="retro-link-button">
                {copy.home}
              </Link>
              <Link href={locale === "de" ? "/en" : "/de"} className="retro-link-button">
                {copy.secondary}
              </Link>
            </div>
          </div>

          <div
            style={{
              border: "2px solid",
              borderColor: "#666 #fff #fff #666",
              background: "#c0c0c0",
              padding: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                marginBottom: 12,
                border: "2px solid",
                borderColor: "#666 #fff #fff #666",
                background: "#bdbdbd",
                padding: "8px 10px",
              }}
            >
              <Counter value="404" />
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 36,
                  height: 36,
                  border: "2px solid",
                  borderColor: "#666 #fff #fff #666",
                  background: "#dcdcdc",
                }}
              >
                <MinesweeperLost size={20} alt="Game over" />
              </div>
              <Counter value="999" />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${board[0].length}, minmax(0, 1fr))`,
                width: "100%",
                maxWidth: 560,
                margin: "0 auto",
                border: "3px solid",
                borderColor: "#808080 #fff #fff #808080",
                background: "#bdbdbd",
              }}
            >
              {board.flatMap((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                  <CellView key={`${rowIndex}-${cellIndex}`} cell={cell} />
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Counter({ value }: { value: string }) {
  return (
    <div
      style={{
        minWidth: 62,
        border: "2px solid",
        borderColor: "#808080 #fff #fff #808080",
        background: "#120000",
        color: "#ff3131",
        padding: "4px 6px",
        fontFamily: '"Courier New", monospace',
        fontSize: 24,
        fontWeight: 700,
        textAlign: "center",
        letterSpacing: "0.12em",
      }}
    >
      {value}
    </div>
  );
}

function CellView({ cell }: { cell: Cell }) {
  const baseStyle = {
    width: "100%",
    aspectRatio: "1 / 1",
    display: "grid",
    placeItems: "center",
    fontFamily: '"Courier New", monospace',
    fontSize: 22,
    fontWeight: 700,
    userSelect: "none" as const,
  };

  if (cell.type === "hidden") {
    return (
      <div
        style={{
          ...baseStyle,
          border: "2px solid",
          borderColor: "#fff #666 #666 #fff",
          background: "#c0c0c0",
        }}
      />
    );
  }

  if (cell.type === "flag") {
    return (
      <div
        style={{
          ...baseStyle,
          border: "2px solid",
          borderColor: "#fff #666 #666 #fff",
          background: "#c0c0c0",
        }}
      >
        <Minesweeper2 size={18} alt="Flagged cell" />
      </div>
    );
  }

  if (cell.type === "wrong-flag") {
    return (
      <div
        style={{
          ...baseStyle,
          position: "relative",
          border: "1px solid #7b7b7b",
          background: "#cfcfcf",
        }}
      >
        <Minesweeper2 size={18} alt="Wrong flag" />
        <span
          style={{
            position: "absolute",
            color: "#c70000",
            fontSize: 22,
            lineHeight: 1,
            fontFamily: "var(--font-pixel), monospace",
          }}
        >
          ×
        </span>
      </div>
    );
  }

  if (cell.type === "mine") {
    return (
      <div
        style={{
          ...baseStyle,
          border: "1px solid #7b7b7b",
          background: "#cfcfcf",
        }}
      >
        <Minesweeper size={18} alt="Mine" />
      </div>
    );
  }

  if (cell.type === "detonated") {
    return (
      <div
        style={{
          ...baseStyle,
          position: "relative",
          border: "1px solid #7b7b7b",
          background: "#ff3a3a",
        }}
      >
        <Minesweeper size={18} alt="Detonated mine" />
        <span
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffd400",
            boxShadow: "0 0 12px #ffd400",
            animation: "mine-blink 600ms steps(1) infinite",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        ...baseStyle,
        border: "1px solid #7b7b7b",
        background: "#cfcfcf",
        color: cell.value === 0 ? "transparent" : numberColors[cell.value],
      }}
    >
      {cell.value}
    </div>
  );
}
