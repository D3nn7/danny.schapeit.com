"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DrvSpaceIcon,
  NetscapeHome,
  WindowsAddressBook,
  WindowsOutlookExpress,
  WindowsXPCamera,
  WordDocument,
} from "react-old-icons";
import type { FC } from "react";
import type { OldIconProps } from "react-old-icons";
import { getLinksPageUi } from "@/app/site-content";
import type { Locale } from "@/lib/i18n";
import type { LinkEntry, LinksPayload } from "@/lib/links-data";

const iconMap: Record<LinkEntry["icon"], { component: FC<OldIconProps>; alt: string }> = {
  mail: { component: WindowsOutlookExpress, alt: "E-Mail" },
  github: { component: DrvSpaceIcon, alt: "Code und Repositories" },
  linkedin: { component: WindowsAddressBook, alt: "Business-Kontakt" },
  devto: { component: WordDocument, alt: "Blog und Artikel" },
  instagram: { component: WindowsXPCamera, alt: "Instagram" },
  home: { component: NetscapeHome, alt: "Portfolio" },
};

export default function LinksHub({ locale }: { locale: Locale }) {
  const [payload, setPayload] = useState<LinksPayload | null>(null);
  const [error, setError] = useState(false);
  const ui = getLinksPageUi(locale);

  useEffect(() => {
    let active = true;

    async function loadLinks() {
      try {
        const response = await fetch(`/api/links?locale=${locale}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const data = (await response.json()) as LinksPayload;
        if (active) {
          setPayload(data);
        }
      } catch {
        if (active) {
          setError(true);
        }
      }
    }

    void loadLinks();

    return () => {
      active = false;
    };
  }, [locale]);

  if (error) {
    return (
      <section className="links-shell">
        <div className="links-panel">
          <p className="links-kicker">{ui.errorKicker}</p>
          <h1 className="links-title">{ui.errorTitle}</h1>
          <p className="links-copy">{ui.errorCopy}</p>
        </div>
      </section>
    );
  }

  if (!payload) {
    return (
      <section className="links-shell">
        <div className="links-panel">
          <p className="links-kicker">{ui.loadingKicker}</p>
          <h1 className="links-title">{ui.loadingTitle}</h1>
        </div>
      </section>
    );
  }

  const featured = payload.links.filter((link) => link.featured);
  const moreLinks = payload.links.filter((link) => !link.featured);

  return (
    <section className="links-shell">
      <div className="links-grid">
        <header className="links-panel links-hero">
          <div className="links-avatar-frame">
            <Image
              src="/d3nn7-on-mac_memoji.png"
              alt={payload.profile.name}
              width={160}
              height={160}
              className="links-avatar"
              priority
            />
          </div>
          <div className="links-hero-copy">
            <div className="links-linkbar">
              <Link href={ui.homePath} className="links-toolbar-link">
                {ui.homeLabel}
              </Link>
              <Link
                href={ui.switchPath}
                className="links-toolbar-link"
                title={ui.switchLocale === "DE" ? "Deutsch" : "English"}
                aria-label={ui.switchLocale === "DE" ? "Auf Deutsch wechseln" : "Switch to English"}
              >
                {ui.switchLocale}
              </Link>
            </div>
            <p className="links-kicker">{ui.headline}</p>
            <h1 className="links-title">{payload.profile.name}</h1>
            <p className="links-copy">{payload.profile.tagline}</p>
            <div className="links-meta-row">
              <span className="links-badge">{ui.statusLabel}: {payload.profile.status}</span>
              <span className="links-badge">{payload.profile.location}</span>
            </div>
            <div className="links-terminal">
              <span>C:\Users\Danny&gt;</span>
              <span> open links</span>
            </div>
          </div>
        </header>

        <div className="links-panel">
          <div className="links-section-head">
            <p className="links-kicker">{ui.featuredTitle}</p>
            <p className="links-section-copy">{ui.featuredCopy}</p>
          </div>
          <div className="links-list">
            {featured.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </div>
        </div>

        <div className="links-panel">
          <div className="links-section-head">
            <p className="links-kicker">{ui.moreTitle}</p>
            <p className="links-section-copy">{ui.moreCopy}</p>
          </div>
          <div className="links-list">
            {moreLinks.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkCard({ link }: { link: LinkEntry }) {
  const icon = iconMap[link.icon];
  const IconComponent = icon.component;
  const external = /^https?:\/\//.test(link.href);

  return (
    <Link
      href={link.href}
      className={`links-card accent-${link.accent}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="links-card-icon" aria-hidden="true">
        <IconComponent size={34} alt={icon.alt} className="links-card-icon-image" />
      </span>
      <span className="links-card-body">
        <span className="links-card-title">{link.title}</span>
        <span className="links-card-description">{link.description}</span>
      </span>
      <span className="links-card-label">{link.label}</span>
    </Link>
  );
}
