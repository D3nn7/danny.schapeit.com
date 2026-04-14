import ProgressbarItem from "@/components/progressbarItem";
import SocialMedia from "@/components/socialMediaLinks";
import TimelineItem from "@/components/timelineItem";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  IdentificationIcon,
} from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV - Danny Schapeit",
};

export default function CV() {
  return (
    <main className="items-center space-y-8">
      <div className="justify-center text-center md:space-x-4">
        <div className="-mt-6 mb-6 flex justify-center">
          <Link href={"/"} className="flex hover:underline">
            Home <ChevronRightIcon className="w-6 h-6" />{" "}
          </Link>
        </div>
        <h3 className="font-high-summit text-4xl text-silver">Resume</h3>
        <p className="mt-2 text-gray-300">Danny Schapeit · danny@schapeit.com</p>
      </div>

      <div className="rounded-lg border border-gray-700 bg-black/20 p-4">
        <h4 className="font-high-summit text-2xl text-silver">Profil</h4>
        <p className="mt-2 text-gray-300">
          Softwareentwickler mit Fokus auf Fullstack- und Mobile-Entwicklung.
          Erfahrung in der Konzeption und Weiterentwicklung produktiver
          Anwendungen im Unternehmensumfeld – von Android Apps bis hin zu
          skalierbaren Cloud- und Backend-Systemen.
        </p>
        <p className="mt-2 text-gray-300">
          Starker Fokus auf saubere Architektur, Sicherheit und Automatisierung
          sowie Interesse an Privacy und Open Source.
        </p>
      </div>

      <div className="text-left">
        <h4 className="font-high-summit text-2xl text-silver inline-flex items-center gap-2">
          <BriefcaseIcon className="h-6 w-6" />
          Berufserfahrung
        </h4>
        <ol className="relative mt-3 border-l border-gray-400 space-y-4">
          <TimelineItem
            title="SPEDION GmbH"
            time="07/2023 - heute"
            extraInfos="Software Engineer"
          />
          <TimelineItem
            title="SPEDION GmbH"
            time="09/2020 - 07/2023"
            extraInfos="Software Engineer"
          />
          <TimelineItem
            title="SPEDION GmbH"
            time="seit 11/2024"
            extraInfos="Ausbilder (Fachinformatiker)"
          />
          <TimelineItem
            title="Slynite (Open Source Projekt)"
            time="2019 - heute"
            extraInfos="Konzeption und Entwicklung einer Plattform mit Fokus auf Privacy und Transparenz"
          />
        </ol>
      </div>

      <div>
        <h4 className="font-high-summit text-2xl text-silver inline-flex items-center gap-2">
          <CodeBracketIcon className="h-6 w-6" />
          Ausgewählte Projekte
        </h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-gray-700 p-3">
            <h5 className="text-lg font-semibold text-gray-200">SPEDION App Suite</h5>
            <p className="text-gray-300">
              Feature-Entwicklung, Bugfixing und UI-Verbesserungen inklusive Dark
              Mode im produktiven Hauptprodukt.
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-3">
            <h5 className="text-lg font-semibold text-gray-200">SPEDION Navigation</h5>
            <p className="text-gray-300">
              Mitentwicklung zentraler Komponenten sowie Blitzer- und
              Benachrichtigungs-Engine auf Android.
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-3">
            <h5 className="text-lg font-semibold text-gray-200">SPEDION DocScan</h5>
            <p className="text-gray-300">
              Entwicklung zentraler Features mit GeniusSDK und UI-Umsetzung via
              Jetpack Compose.
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-3">
            <h5 className="text-lg font-semibold text-gray-200">SPEDION SEPP</h5>
            <p className="text-gray-300">
              Monitoring-Oberfläche mit Next.js und C# API zur Visualisierung von
              Nagios-Meldungen.
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-3">
            <h5 className="text-lg font-semibold text-gray-200">Kubernetes & Cloud Infrastruktur</h5>
            <p className="text-gray-300">
              Aufbau eines Clusters im Team, GitOps mit ArgoCD, externes Kibana
              Logging und Containerisierung von .NET 8 Anwendungen.
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-3">
            <h5 className="text-lg font-semibold text-gray-200">Identity & Access Management</h5>
            <p className="text-gray-300">
              Migration auf Keycloak inklusive Anpassungen in Android, iOS,
              Backend und Fallback-Mechanismus.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-high-summit text-2xl text-silver inline-flex items-center gap-2">
          <AcademicCapIcon className="h-6 w-6" />
          Ausbildung
        </h4>
        <ol className="relative mt-3 border-l border-gray-400 space-y-4">
          <TimelineItem
            title="Fachinformatiker für Anwendungsentwicklung"
            time="2020 - 2023"
            extraInfos="Berufsschule Obernburg"
          />
          <TimelineItem
            title="Realschulabschluss"
            time="2020"
            extraInfos="Mittelschule Schöllkrippen"
          />
        </ol>
      </div>

      <div>
        <h4 className="font-high-summit text-2xl text-silver inline-flex items-center gap-2">
          <IdentificationIcon className="h-6 w-6" />
          Zertifikate
        </h4>
        <ol className="relative mt-3 border-l border-gray-400 space-y-4">
          <TimelineItem
            title="Samsung Knox Certified Associate"
            time="2025"
            extraInfos="Samsung Electronics"
          />
          <TimelineItem
            title="Samsung Galaxy Business Associate"
            time="2025"
            extraInfos="Samsung Electronics"
          />
          <TimelineItem
            title="WeAreDevelopers World Congress Teilnahme"
            time="2025"
            extraInfos="Teilnahme"
          />
          <TimelineItem
            title="Ausbilder-Eignung"
            time="2024"
            extraInfos="IHK"
          />
        </ol>
      </div>

      <div>
        <h4 className="font-high-summit text-2xl text-silver">Technologien</h4>
        <div className="space-y-4 mt-3">
          <ProgressbarItem title="Java & Kotlin" state="Sehr gut" progress={95} />
          <ProgressbarItem title="TypeScript" state="Sehr gut" progress={92} />
          <ProgressbarItem title="C# / .NET 8" state="Gut" progress={85} />
          <ProgressbarItem title="Android (Jetpack Compose)" state="Sehr gut" progress={94} />
          <ProgressbarItem title="Next.js" state="Gut" progress={86} />
          <ProgressbarItem title="Docker & Kubernetes" state="Gut" progress={84} />
          <ProgressbarItem title="ArgoCD / Jenkins / Octopus" state="Gut" progress={80} />
          <ProgressbarItem title="Keycloak / IAM" state="Gut" progress={82} />
        </div>
      </div>

      <div>
        <h4 className="font-high-summit text-2xl text-silver inline-flex items-center gap-2">
          <GlobeAltIcon className="h-6 w-6" />
          Sprachen
        </h4>
        <div className="space-y-4 mt-3">
          <ProgressbarItem title="Deutsch" state="Muttersprache" progress={100} />
          <ProgressbarItem
            title="Englisch"
            state="Verhandlungssicher im Arbeitsalltag"
            progress={90}
          />
        </div>
      </div>

      <div className="rounded-lg border border-gray-700 bg-black/20 p-4">
        <h4 className="font-high-summit text-2xl text-silver">Interessen</h4>
        <p className="mt-2 text-gray-300">
          Open Source · IT-Sicherheit · Privacy · Moderne Softwarearchitektur
        </p>
      </div>

      <div className="flex flex-col items-center">
        <SocialMedia />
      </div>
    </main>
  );
}
