"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  certifications,
  contactLinks,
  education,
  experience,
  interests,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/app/site-content";

type WindowId = "about" | "cv" | "skills" | "projects" | "console" | "guestbook" | "contact";
type CvTab = "experience" | "education" | "certs";

type WindowState = { open: boolean; minimized: boolean };
type WindowPosition = { top: number; left: number; width: number };
type LayoutMode = "stacked" | "compact" | "wide";

type MenuAction =
  | { type: "focus"; target: WindowId }
  | { type: "minimize"; target: WindowId }
  | { type: "close"; target: WindowId }
  | { type: "link"; href: string }
  | { type: "copy"; value: string; message: string }
  | { type: "dialog"; message: string };

type DesktopPortfolioProps = {
  initialWindow?: WindowId;
};

type ContextMenuState =
  | {
      kind: "desktop";
      x: number;
      y: number;
    }
  | {
      kind: "window";
      target: WindowId;
      x: number;
      y: number;
    };

const FLOATING_BREAKPOINT = 900;
const WIDE_DESKTOP_BREAKPOINT = 1280;

const initialWindows: Record<WindowId, WindowState> = {
  about: { open: true, minimized: false },
  cv: { open: true, minimized: false },
  skills: { open: true, minimized: false },
  projects: { open: true, minimized: false },
  console: { open: true, minimized: false },
  guestbook: { open: true, minimized: false },
  contact: { open: true, minimized: false },
};

const initialPositions: Record<WindowId, WindowPosition> = {
  about: { top: 18, left: 0, width: 520 },
  cv: { top: 42, left: 420, width: 480 },
  skills: { top: 258, left: 54, width: 410 },
  projects: { top: 282, left: 490, width: 430 },
  console: { top: 120, left: 860, width: 360 },
  guestbook: { top: 430, left: 120, width: 360 },
  contact: { top: 420, left: 540, width: 400 },
};

const icons: Record<WindowId, string> = {
  about: "💻",
  cv: "📄",
  skills: "🔧",
  projects: "📁",
  console: "⬛",
  guestbook: "📓",
  contact: "📧",
};

const desktopEntries: Array<{ id: WindowId | "recycle"; label: string; icon: string }> = [
  { id: "about", label: "Danny.exe", icon: "💻" },
  { id: "cv", label: "CV.doc", icon: "📄" },
  { id: "skills", label: "Skills.exe", icon: "🔧" },
  { id: "projects", label: "Projekte", icon: "📁" },
  { id: "console", label: "Terminal", icon: "⬛" },
  { id: "guestbook", label: "Gaestebuch", icon: "📓" },
  { id: "contact", label: "Kontakt", icon: "📧" },
  { id: "recycle", label: "Papierkorb", icon: "🗑️" },
];

const guestbookEntries = [
  { author: "xXCodingMasterXx", date: "14.04.2026 09:42", text: "Coole Seite. Erinnert mich an GeoCities-Zeiten. Weiter so! (☞ﾟヮﾟ)☞" },
  { author: "SwiftNinja2000", date: "13.04.2026 16:20", text: "Endlich versteht jemand, dass Xcode der wahre Endgegner ist. (╥_╥)" },
  { author: "HomelabHero", date: "12.04.2026 23:15", text: "Tailscale + Docker = Liebe. Gruesse aus dem Serverraum! ┗(°0°)┛" },
  { author: "RetroWebDev", date: "10.04.2026 11:33", text: "Endlich eine Seite, die nicht aussieht wie jede andere. ¯\\_(ツ)_/¯" },
];

const clippyMessages = [
  "Willkommen auf dem Desktop. Mit den Icons links springst du direkt in die einzelnen Bereiche.",
  "Im CV-Fenster findest du Erfahrung, Ausbildung und Zertifikate in eigenen Tabs.",
  "Das Terminal kennt ein paar kleine Kommandos. help ist ein guter Start.",
];

const asciiBanner = String.raw`
 ____                          ____       _
|  _ \  __ _ _ __  _ __  _   _/ ___|  ___| |__   __ _ _ __   ___
| | | |/ _\` | '_ \| '_ \| | | \___ \ / __| '_ \ / _\` | '_ \ / _ \
| |_| | (_| | | | | | | | |_| |___) | (__| | | | (_| | |_) |  __/
|____/ \__,_|_| |_|_| |_|\__, |____/ \___|_| |_|\__,_| .__/ \___|
                         |___/                        |_|
`;

export default function DesktopPortfolio({ initialWindow = "about" }: DesktopPortfolioProps) {
  const windowRefs = useRef<Partial<Record<WindowId, HTMLElement | null>>>({});
  const [windows, setWindows] = useState(initialWindows);
  const [positions, setPositions] = useState(initialPositions);
  const [windowOrder, setWindowOrder] = useState<WindowId[]>(["about", "cv", "skills", "projects", "console", "guestbook", "contact"]);
  const [activeWindow, setActiveWindow] = useState<WindowId>(initialWindow);
  const [activeMenu, setActiveMenu] = useState<{ windowId: WindowId; menu: string } | null>(null);
  const [startOpen, setStartOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);
  const [activeCvTab, setActiveCvTab] = useState<CvTab>("experience");
  const [consoleInput, setConsoleInput] = useState("");
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [consoleLines, setConsoleLines] = useState<string[]>([
    "Microsoft Windows [Version 98.2026]",
    "(c) Danny Schapeit. Keine Rechte vorbehalten. ¯\\_(ツ)_/¯",
    "",
    "Verfuegbare Befehle: help, about, skills, contact, coffee, matrix, clear, exit",
  ]);
  const [clippyIndex, setClippyIndex] = useState(0);
  const [clippyVisible, setClippyVisible] = useState(true);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("stacked");
  const isDesktop = layoutMode !== "stacked";
  const isCompactDesktop = layoutMode === "compact";

  useEffect(() => {
    const syncViewport = () => {
      const width = window.innerWidth;

      if (width >= WIDE_DESKTOP_BREAKPOINT) {
        setLayoutMode("wide");
        return;
      }

      if (width >= FLOATING_BREAKPOINT) {
        setLayoutMode("compact");
        return;
      }

      setLayoutMode("stacked");
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (layoutMode === "stacked") {
      return;
    }

    const distributeWindows = () => {
      const compactLayout = layoutMode === "compact" || window.innerHeight < 860;
      const desktopLeftOffset = compactLayout ? 96 : 120;
      const horizontalInset = compactLayout ? 24 : 32;
      const availableWidth = Math.max(window.innerWidth - desktopLeftOffset - horizontalInset, 320);
      const availableHeight = Math.max(window.innerHeight - (compactLayout ? 108 : 120), 420);
      const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
      const clampWidth = (value: number, min: number, max: number) => clamp(Math.round(value), min, Math.min(max, availableWidth));

      const clampLeft = (left: number, width: number) =>
        Math.max(0, Math.min(left, Math.max(availableWidth - width, 0)));
      const clampTop = (top: number, height = 320) =>
        Math.max(0, Math.min(top, Math.max(availableHeight - height, 0)));

      if (compactLayout) {
        const leftCol = 0;
        const rightCol = Math.round(availableWidth * 0.48);
        const topRow = 0;
        const upperMidRow = Math.round(availableHeight * 0.16);
        const middleRow = Math.round(availableHeight * 0.42);
        const lowerMidRow = Math.round(availableHeight * 0.54);
        const lowerRow = Math.round(availableHeight * 0.68);
        const aboutWidth = clampWidth(availableWidth * 0.42, 320, 430);
        const cvWidth = clampWidth(availableWidth * 0.49, 360, 540);
        const skillsWidth = clampWidth(availableWidth * 0.29, 240, 300);
        const projectsWidth = clampWidth(availableWidth * 0.43, 320, 450);
        const consoleWidth = clampWidth(availableWidth * 0.3, 250, 320);
        const guestbookWidth = clampWidth(availableWidth * 0.3, 250, 310);
        const contactWidth = clampWidth(availableWidth * 0.33, 260, 340);

        setPositions({
          about: {
            width: aboutWidth,
            left: clampLeft(leftCol, aboutWidth),
            top: clampTop(topRow, 330),
          },
          cv: {
            width: cvWidth,
            left: clampLeft(rightCol, cvWidth),
            top: clampTop(upperMidRow, 400),
          },
          skills: {
            width: skillsWidth,
            left: clampLeft(leftCol + 20, skillsWidth),
            top: clampTop(middleRow, 280),
          },
          projects: {
            width: projectsWidth,
            left: clampLeft(rightCol - 28, projectsWidth),
            top: clampTop(lowerMidRow, 320),
          },
          console: {
            width: consoleWidth,
            left: clampLeft(rightCol + Math.round(availableWidth * 0.16), consoleWidth),
            top: clampTop(topRow + 18, 280),
          },
          guestbook: {
            width: guestbookWidth,
            left: clampLeft(leftCol + Math.round(availableWidth * 0.14), guestbookWidth),
            top: clampTop(lowerRow, 280),
          },
          contact: {
            width: contactWidth,
            left: clampLeft(rightCol + Math.round(availableWidth * 0.08), contactWidth),
            top: clampTop(lowerRow + 12, 300),
          },
        });
        return;
      }

      const leftEdge = Math.round(availableWidth * 0.01);
      const centerLane = Math.round(availableWidth * 0.37);
      const rightLane = Math.round(availableWidth * 0.73);
      const topRow = Math.round(availableHeight * 0.02);
      const middleRow = Math.round(availableHeight * 0.34);
      const lowerRow = Math.round(availableHeight * 0.63);

      const aboutWidth = clampWidth(availableWidth * 0.28, 400, 500);
      const cvWidth = clampWidth(availableWidth * 0.3, 430, 520);
      const skillsWidth = clampWidth(availableWidth * 0.2, 300, 350);
      const projectsWidth = clampWidth(availableWidth * 0.25, 340, 430);
      const consoleWidth = clampWidth(availableWidth * 0.21, 300, 360);
      const guestbookWidth = clampWidth(availableWidth * 0.2, 290, 350);
      const contactWidth = clampWidth(availableWidth * 0.22, 320, 390);

      setPositions({
        about: {
          width: aboutWidth,
          left: clampLeft(leftEdge, aboutWidth),
          top: clampTop(topRow, 360),
        },
        cv: {
          width: cvWidth,
          left: clampLeft(centerLane, cvWidth),
          top: clampTop(Math.round(availableHeight * 0.06), 420),
        },
        skills: {
          width: skillsWidth,
          left: clampLeft(rightLane, skillsWidth),
          top: clampTop(topRow, 300),
        },
        projects: {
          width: projectsWidth,
          left: clampLeft(leftEdge + Math.round(availableWidth * 0.1), projectsWidth),
          top: clampTop(middleRow, 340),
        },
        console: {
          width: consoleWidth,
          left: clampLeft(centerLane + Math.round(availableWidth * 0.12), consoleWidth),
          top: clampTop(middleRow - Math.round(availableHeight * 0.08), 300),
        },
        guestbook: {
          width: guestbookWidth,
          left: clampLeft(rightLane, guestbookWidth),
          top: clampTop(middleRow + Math.round(availableHeight * 0.1), 300),
        },
        contact: {
          width: contactWidth,
          left: clampLeft(centerLane - Math.round(availableWidth * 0.08), contactWidth),
          top: clampTop(lowerRow, 320),
        },
      });
    };

    distributeWindows();
    window.addEventListener("resize", distributeWindows);
    return () => window.removeEventListener("resize", distributeWindows);
  }, [layoutMode]);

  useEffect(() => {
    focusWindow(initialWindow);
  }, [initialWindow]);

  useEffect(() => {
    const applyHashTarget = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        return;
      }

      const target = hash as WindowId;
      if (!Object.keys(initialWindows).includes(target)) {
        return;
      }

      focusWindow(target);
      if (!isDesktop) {
        window.requestAnimationFrame(() => {
          windowRefs.current[target]?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    applyHashTarget();
    window.addEventListener("hashchange", applyHashTarget);
    return () => window.removeEventListener("hashchange", applyHashTarget);
  }, [isDesktop]);

  useEffect(() => {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════╗");
    console.log("║   Du hast die Konsole gefunden. Ein Mensch Kultur.  ║");
    console.log("║   Versuch mal: help, coffee oder danny.hire()       ║");
    console.log("╚══════════════════════════════════════════════════════╝");
    console.log("¯\\_(ツ)_/¯");
    (window as Window & { danny?: Record<string, () => void> }).danny = {
      hire: () => console.log("Kontakt: danny@schapeit.com"),
      coffee: () => console.log("Kaffee-Modus aktiv."),
      secret: () => console.log("ASCII-Einhorn freigeschaltet: /)  (\\\\"),
    };
  }, []);

  useEffect(() => {
    if (!clippyVisible) return;
    const timer = window.setTimeout(() => {
      setClippyIndex((current) => (current + 1) % clippyMessages.length);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [clippyIndex, clippyVisible]);

  const taskbarItems = useMemo(() => windowOrder.filter((id) => windows[id].open), [windowOrder, windows]);

  function focusWindow(id: WindowId) {
    setWindows((current) => ({ ...current, [id]: { open: true, minimized: false } }));
    setWindowOrder((current) => [...current.filter((entry) => entry !== id), id]);
    setActiveWindow(id);
    setActiveMenu(null);
  }

  function minimizeWindow(id: WindowId) {
    setWindows((current) => ({ ...current, [id]: { ...current[id], minimized: true } }));
    setActiveMenu(null);
  }

  function closeWindow(id: WindowId) {
    setWindows((current) => ({ ...current, [id]: { open: false, minimized: false } }));
    setActiveMenu(null);
  }

  function openFromDesktop(id: WindowId | "recycle") {
    if (id === "recycle") {
      setDialogMessage("Papierkorb-Inhalt:\n- alte-portfolio-v1.html\n- node_modules/ (unloeschbar)\n\n¯\\_(ツ)_/¯");
      return;
    }
    focusWindow(id);
    window.location.hash = id;
    setStartOpen(false);
    setContextMenu(null);
  }

  function navigateToWindow(id: WindowId) {
    focusWindow(id);
    if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    }
    if (!isDesktop) {
      window.requestAnimationFrame(() => {
        windowRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  async function runMenuAction(action: MenuAction) {
    setContextMenu(null);
    if (action.type === "focus") return navigateToWindow(action.target);
    if (action.type === "minimize") return minimizeWindow(action.target);
    if (action.type === "close") return closeWindow(action.target);
    if (action.type === "link") {
      window.open(action.href, "_blank", "noreferrer");
      setActiveMenu(null);
      return;
    }
    if (action.type === "copy") {
      try {
        await navigator.clipboard.writeText(action.value);
        setDialogMessage(action.message);
      } catch {
        setDialogMessage(`${action.message}\n\n${action.value}`);
      }
      setActiveMenu(null);
      return;
    }
    setDialogMessage(action.message);
    setActiveMenu(null);
  }

  function handleTitlePointerDown(id: WindowId, event: ReactPointerEvent<HTMLElement>) {
    if (!isDesktop || event.button !== 0) return;
    const startX = event.clientX;
    const startY = event.clientY;
    const startPosition = positions[id];
    focusWindow(id);

    const handleMove = (moveEvent: PointerEvent) => {
      setPositions((current) => ({
        ...current,
        [id]: {
          ...current[id],
          left: Math.max(0, startPosition.left + moveEvent.clientX - startX),
          top: Math.max(0, startPosition.top + moveEvent.clientY - startY),
        },
      }));
    };

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  }

  function appendConsoleOutput(command: string, output: string[]) {
    setConsoleLines((current) => [...current, `C:\\Users\\Danny> ${command}`, ...output]);
  }

  function openContextMenu(
    event: React.MouseEvent<HTMLElement>,
    menu: ContextMenuState,
  ) {
    event.preventDefault();
    event.stopPropagation();
    setActiveMenu(null);
    setStartOpen(false);
    setContextMenu(menu);
  }

  function renderContextMenu() {
    if (!contextMenu) {
      return null;
    }

    const menuWidth = 196;
    const menuHeight = contextMenu.kind === "desktop" ? 136 : 104;
    const left = Math.max(8, Math.min(contextMenu.x, window.innerWidth - menuWidth - 8));
    const top = Math.max(8, Math.min(contextMenu.y, window.innerHeight - menuHeight - 8));

    const items =
      contextMenu.kind === "desktop"
        ? [
            {
              label: "Ueber mich oeffnen",
              action: () => navigateToWindow("about"),
            },
            {
              label: "CV oeffnen",
              action: () => navigateToWindow("cv"),
            },
            {
              label: "Terminal oeffnen",
              action: () => navigateToWindow("console"),
            },
            {
              label: "Desktop aktualisieren",
              action: () => setDialogMessage("Desktop erfolgreich aktualisiert. Nichts ist kaputt gegangen. ¯\\_(ツ)_/¯"),
            },
          ]
        : [
            {
              label: `${contextMenu.target} nach vorne`,
              action: () => navigateToWindow(contextMenu.target),
            },
            {
              label: "Minimieren",
              action: () => minimizeWindow(contextMenu.target),
            },
            {
              label: "Schliessen",
              action: () => closeWindow(contextMenu.target),
            },
          ];

    return (
      <div
        className="retro-context-menu"
        style={{ position: "fixed", top: `${top}px`, left: `${left}px` }}
        onClick={(event) => event.stopPropagation()}
      >
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            className="retro-context-item"
            onClick={() => {
              setContextMenu(null);
              item.action();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  function handleConsoleCommand(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = consoleInput.trim().toLowerCase();
    if (!command) return;
    const commands: Record<string, string[]> = {
      help: ["help - Hilfe", "about - Kurzprofil", "skills - Technologien", "contact - Kontakt", "coffee - Kaffee", "matrix - ASCII", "clear - Leeren", "exit - Minimieren"],
      about: [profile.name, `${profile.role} bei ${profile.company}`, "Fokus: Android, Fullstack, Security, Privacy, Architektur"],
      skills: skillGroups.flatMap((group) => [group.title, ...group.items.map((item) => `${item.name}: ${item.level}%`)]),
      contact: contactLinks.map((item) => `${item.label}: ${item.value}`),
      coffee: ["  ( (", "   ) )", "........", "| Kaffee|]", "\\      /", " `----'"],
      matrix: ["01000100 01100001 01101110 01101110 01111001", "wake up, developer..."],
    };
    if (command === "clear") {
      setConsoleLines([]);
      setConsoleInput("");
      return;
    }
    if (command === "exit") {
      appendConsoleOutput(command, ["Terminal wird minimiert..."]);
      setConsoleInput("");
      minimizeWindow("console");
      return;
    }
    appendConsoleOutput(command, commands[command] ?? [`'${command}' ist kein gueltiger Befehl.`]);
    setConsoleInput("");
  }

  function renderWindowMenu(windowId: WindowId, menu: string) {
    const actions: Record<string, MenuAction[]> = {
      datei: [{ type: "minimize", target: windowId }, { type: "close", target: windowId }],
      bearbeiten: [{ type: "copy", value: "danny@schapeit.com", message: "E-Mail kopiert." }, { type: "dialog", message: "Bearbeiten.exe ist dekorativ. ¯\\_(ツ)_/¯" }],
      ansicht: [{ type: "focus", target: "about" }, { type: "focus", target: "projects" }],
      hilfe: [{ type: "dialog", message: "Retro-Hilfe: Fenster sind klickbar, verschiebbar und per Taskbar fokussierbar." }],
      format: [{ type: "dialog", message: "Formatierung erfolgreich geprueft. 800x600 approved." }],
      extras: [{ type: "focus", target: "console" }, { type: "link", href: "https://dev.to/d3nn7" }],
      einfuegen: [{ type: "dialog", message: "Noch nichts zum Einfuegen. Vielleicht spaeter ein Floppy-Import." }],
      optionen: [{ type: "dialog", message: "Optionen geoeffnet: Mehr CRT, mehr Bevel, mehr Y2K." }],
    };
    return actions[menu.toLowerCase()] ?? [{ type: "dialog", message: `${menu} ist gerade nur nostalgisch.` }];
  }

  function renderWindow(id: WindowId, title: string, menu: string[], status: string, content: React.ReactNode) {
    const state = windows[id];
    if (!state.open || state.minimized) return null;
    const position = positions[id];
    const zIndex = 10 + windowOrder.indexOf(id);

    return (
      <section
        key={id}
        id={id}
        ref={(node) => {
          windowRefs.current[id] = node;
        }}
        className={`retro-window ${activeWindow === id ? "is-active" : "is-inactive"} ${isDesktop ? "is-floating" : "is-stacked"} ${isCompactDesktop ? "is-compact" : ""}`}
        style={isDesktop ? { top: position.top, left: position.left, width: position.width, zIndex } : { zIndex }}
        onMouseDown={() => focusWindow(id)}
        onContextMenu={(event) =>
          openContextMenu(event, {
            kind: "window",
            target: id,
            x: event.clientX,
            y: event.clientY,
          })
        }
      >
        <div className="retro-titlebar retro-titlebar-draggable" onPointerDown={(event) => handleTitlePointerDown(id, event)}>
          <span className="retro-title-icon">{icons[id]}</span>
          <h2 className="retro-title">{title}</h2>
          <div className="retro-controls" onPointerDown={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="retro-control"
              aria-label="Minimieren"
              onClick={(event) => {
                event.stopPropagation();
                minimizeWindow(id);
              }}
            >
              _
            </button>
            <button
              type="button"
              className="retro-control"
              aria-label="Maximieren"
              onClick={(event) => {
                event.stopPropagation();
                setDialogMessage("Maximieren folgt in Build 98.2026.");
              }}
            >
              □
            </button>
            <button
              type="button"
              className="retro-control retro-control-close"
              aria-label="Schliessen"
              onClick={(event) => {
                event.stopPropagation();
                closeWindow(id);
              }}
            >
              ×
            </button>
          </div>
        </div>

        <div className="retro-menubar" aria-label={`${title} Menu`}>
          {menu.map((menuLabel) => (
            <div key={menuLabel} className="retro-menu-wrap">
              <button
                type="button"
                className={`retro-menu-button ${
                  activeMenu?.windowId === id && activeMenu.menu === menuLabel ? "is-open" : ""
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveMenu((current) =>
                    current?.windowId === id && current.menu === menuLabel
                      ? null
                      : { windowId: id, menu: menuLabel },
                  );
                }}
              >
                {menuLabel}
              </button>
              {activeMenu?.windowId === id && activeMenu.menu === menuLabel ? (
                <div className="retro-menu-dropdown">
                  {renderWindowMenu(id, menuLabel).map((action, index) => (
                    <button
                      key={`${menuLabel}-${index}`}
                      type="button"
                      className="retro-menu-item"
                      onClick={(event) => {
                        event.stopPropagation();
                        void runMenuAction(action);
                      }}
                    >
                      {action.type === "focus" && `Fenster ${action.target}`}
                      {action.type === "minimize" && "Minimieren"}
                      {action.type === "close" && "Schliessen"}
                      {action.type === "link" && "Externen Link oeffnen"}
                      {action.type === "copy" && "E-Mail kopieren"}
                      {action.type === "dialog" && "Info anzeigen"}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="retro-content">{content}</div>
        <div className="retro-statusbar">
          <span>{status}</span>
          <span>{id}.exe</span>
        </div>
      </section>
    );
  }

  return (
    <main
      className={`retro-desktop ${isCompactDesktop ? "is-compact" : ""}`}
      onClick={() => {
        if (activeMenu) setActiveMenu(null);
        if (contextMenu) setContextMenu(null);
      }}
      onContextMenu={(event) =>
        openContextMenu(event, {
          kind: "desktop",
          x: event.clientX,
          y: event.clientY,
        })
      }
    >
      <div className="retro-desktop-icons" aria-label="Desktop">
        {desktopEntries.map((item) => (
          <button
            key={item.id}
            type="button"
            className="retro-icon"
            onClick={(event) => {
              event.stopPropagation();
              openFromDesktop(item.id);
            }}
            onContextMenu={(event) =>
              openContextMenu(event, {
                kind: "desktop",
                x: event.clientX,
                y: event.clientY,
              })
            }
          >
            <span className="retro-icon-emoji">{item.icon}</span>
            <span className="retro-icon-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div
        className={`retro-desktop-canvas ${isDesktop ? "is-desktop" : "is-mobile"} ${isCompactDesktop ? "is-compact" : ""}`}
        style={isDesktop ? { minHeight: "calc(100dvh - 84px)" } : undefined}
      >
        {renderWindow(
          "about",
          "Danny Schapeit - Systemeigenschaften",
          ["Datei", "Bearbeiten", "Ansicht", "Hilfe"],
          "Bereit",
          <div className="retro-about-layout">
            <div className="retro-about-main">
              <div className="retro-photo-frame">
                <div className="retro-avatar">👨‍💻</div>
              </div>
              <div>
                <h1 className="retro-heading">{profile.name}</h1>
                <p className="retro-subheading">
                  {profile.role} · {profile.company} · {profile.location}
                </p>
                <div className="retro-copy">
                  {profile.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="retro-chip-row">
                  <span className="retro-chip">Build 98.2026</span>
                  <span className="retro-chip">{profile.focus}</span>
                </div>
              </div>
            </div>
            <div className="retro-construction">
              <span>*** under construction ***</span>
              <span>beste Ansicht: Desktop und Mobile</span>
              <span>Besucher Nr. 031337</span>
            </div>
            <pre className="retro-ascii-banner">{asciiBanner}</pre>
            <div className="retro-badge-row">
              <Link href="#cv" className="retro-link-button" onClick={() => navigateToWindow("cv")}>
                CV oeffnen
              </Link>
              <Link href="mailto:danny@schapeit.com" className="retro-link-button">
                Mail
              </Link>
              <Link href="https://dev.to/d3nn7" target="_blank" rel="noreferrer" className="retro-link-button">
                Blog
              </Link>
            </div>
          </div>,
        )}

        {renderWindow(
          "cv",
          "CV.doc - Microsoft Word 98",
          ["Datei", "Bearbeiten", "Format", "Einfuegen"],
          "Seite 1 von 1",
          <div>
            <div className="retro-tabbar">
              <button type="button" className={`retro-tab ${activeCvTab === "experience" ? "is-active" : ""}`} onClick={() => setActiveCvTab("experience")}>Erfahrung</button>
              <button type="button" className={`retro-tab ${activeCvTab === "education" ? "is-active" : ""}`} onClick={() => setActiveCvTab("education")}>Ausbildung</button>
              <button type="button" className={`retro-tab ${activeCvTab === "certs" ? "is-active" : ""}`} onClick={() => setActiveCvTab("certs")}>Zertifikate</button>
            </div>
            {activeCvTab === "experience" ? (
              <div className="retro-list">
                {experience.map((item) => (
                  <article key={`${item.title}-${item.period}`} className="retro-card">
                    <h3>{item.title}</h3>
                    <p className="retro-meta">{item.organization} · {item.period}</p>
                    <p className="retro-body">{item.description}</p>
                    <div className="retro-tag-row">
                      {item.tags.map((tag) => (
                        <span key={tag} className="retro-tag">{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
            {activeCvTab === "education" ? (
              <div className="retro-list">
                {education.map((item) => (
                  <article key={item.title} className="retro-card">
                    <h3>{item.title}</h3>
                    <p className="retro-meta">{item.period} · {item.details}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {activeCvTab === "certs" ? (
              <div className="retro-list">
                {certifications.map((item) => (
                  <article key={item} className="retro-card">
                    <p className="retro-body" style={{ marginTop: 0 }}>{item}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>,
        )}

        {renderWindow(
          "skills",
          "Skills.exe - Systemsteuerung",
          ["Datei", "Ansicht", "Extras"],
          "Skills geladen",
          <div className="retro-list">
            {skillGroups.map((group) => (
              <section key={group.title} className="retro-skill-group">
                <h3 className="retro-kicker">{group.title}</h3>
                {group.items.map((item) => (
                  <div key={item.name} className="retro-skill-row">
                    <div className="retro-skill-header">
                      <span>{item.name}</span>
                      <span>{item.label}</span>
                    </div>
                    <div className="retro-progress">
                      <span style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>,
        )}

        {renderWindow(
          "projects",
          "C:\\Projekte - Windows Explorer",
          ["Datei", "Bearbeiten", "Ansicht", "Extras"],
          `${projects.length} Objekte`,
          <div className="retro-list">
            {projects.map((project) => (
              <article key={project.title} className="retro-card">
                <h3>{project.title}</h3>
                <p className="retro-meta">{project.stack}</p>
                <p className="retro-body">{project.description}</p>
              </article>
            ))}
          </div>,
        )}

        {renderWindow(
          "console",
          "C:\\WINDOWS\\system32\\cmd.exe",
          ["Datei", "Bearbeiten", "Ansicht", "Hilfe"],
          "Console bereit",
          <div className="retro-console">
            <div className="retro-console-output">
              {consoleLines.map((line, index) => (
                <div key={`${line}-${index}`}>{line || "\u00A0"}</div>
              ))}
            </div>
            <form className="retro-console-form" onSubmit={handleConsoleCommand}>
              <span>C:\Users\Danny&gt;</span>
              <input
                value={consoleInput}
                onChange={(event) => setConsoleInput(event.target.value)}
                className="retro-console-input"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>,
        )}

        {renderWindow(
          "guestbook",
          "Gaestebuch - Internet Explorer 5.0",
          ["Datei", "Bearbeiten", "Ansicht"],
          `${guestbookEntries.length} Eintraege`,
          <div className="retro-list">
            {guestbookEntries.map((entry) => (
              <article key={`${entry.author}-${entry.date}`} className="retro-card">
                <div className="retro-guestbook-header">
                  <strong>{entry.author}</strong>
                  <span className="retro-meta">{entry.date}</span>
                </div>
                <p className="retro-body">{entry.text}</p>
              </article>
            ))}
          </div>,
        )}

        {renderWindow(
          "contact",
          "Kontakt - Outlook Express",
          ["Datei", "Bearbeiten", "Hilfe"],
          "Online (wahrscheinlich)",
          <div className="retro-list">
            <div className="retro-card">
              {contactLinks.map((item) => (
                <div key={item.label} className="retro-contact-item">
                  <span className="retro-contact-label">{item.label}</span>
                  <Link
                    href={item.href}
                    className="retro-contact-link"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </Link>
                </div>
              ))}
            </div>
            <div className="retro-card">
              <h3>Sprachen</h3>
              <div className="retro-doc-list" style={{ marginTop: "0.75rem" }}>
                {languages.map((item) => (
                  <p key={item.name} className="retro-body" style={{ marginTop: 0 }}>
                    {item.name}: {item.level}
                  </p>
                ))}
              </div>
            </div>
            <div className="retro-card">
              <h3>Interessen</h3>
              <p className="retro-body">{interests.join(" · ")}</p>
            </div>
          </div>,
        )}
      </div>

      {clippyVisible ? (
        <div className="retro-clippy">
          <div className="retro-clippy-bubble">
            <button type="button" className="retro-clippy-close" onClick={() => setClippyVisible(false)}>
              ×
            </button>
            <div className="retro-clippy-text">{clippyMessages[clippyIndex]}</div>
          </div>
          <button
            type="button"
            className="retro-clippy-pin"
            onClick={() => setClippyIndex((current) => (current + 1) % clippyMessages.length)}
          >
            <span className="retro-clippy-pin-bg" />
            <span className="retro-clippy-pin-icon">📎</span>
          </button>
        </div>
      ) : null}

      {dialogMessage ? (
        <div className="retro-dialog-overlay" onClick={() => setDialogMessage(null)}>
          <div className="retro-dialog" onClick={(event) => event.stopPropagation()}>
            <div className="retro-titlebar">
              <span className="retro-title-icon">!</span>
              <h2 className="retro-title">Systemmeldung</h2>
              <div className="retro-controls">
                <button type="button" className="retro-control retro-control-close" onClick={() => setDialogMessage(null)}>
                  ×
                </button>
              </div>
            </div>
            <div className="retro-content">
              <pre className="retro-dialog-text">{dialogMessage}</pre>
              <div className="retro-link-row">
                <button type="button" className="retro-link-button" onClick={() => setDialogMessage(null)}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {renderContextMenu()}

      {startOpen ? (
        <div className="retro-start-menu">
          <div className="retro-start-menu-header">
            <div className="retro-start-menu-avatar">D</div>
            <div>
              <strong>Danny Schapeit</strong>
              <div>Portfolio 98.2026</div>
            </div>
          </div>
          <div className="retro-start-menu-body">
            {desktopEntries
              .filter((item) => item.id !== "recycle")
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="retro-start-menu-item"
                  onClick={() => openFromDesktop(item.id)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
          </div>
        </div>
      ) : null}

      <footer className="retro-taskbar">
        <button type="button" className="retro-start" onClick={() => setStartOpen((current) => !current)}>
          Start
        </button>
        <div className="retro-taskbar-links">
          {taskbarItems.map((id) => (
            <button
              key={id}
              type="button"
              className={`retro-taskbar-link ${activeWindow === id ? "is-active" : ""}`}
              onClick={() => navigateToWindow(id)}
            >
              {icons[id]} {id}
            </button>
          ))}
        </div>
        <span className="retro-clock">14:44</span>
      </footer>
    </main>
  );
}
