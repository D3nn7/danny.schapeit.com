import EasterEgg from "@/components/easterEgg";
import SocialMedia from "@/components/socialMediaLinks";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-8">
      <EasterEgg />
      <div className="justify-center text-center md:space-x-4">
        <h3 className="font-high-summit text-4xl text-silver">About me</h3>
        <p className="text-left md:px-36">
          Hallo, ich bin Danny.
          Ich bin Softwareentwickler mit Schwerpunkt auf Android und Fullstack und arbeite aktuell an produktiven Anwendungen im Unternehmensumfeld. Dabei entwickle ich sowohl neue Features als auch bestehende Systeme weiter und beschäftige mich zusätzlich mit Themen wie Architektur, Deployment und Systemintegration.
          Mein Fokus liegt darauf, Software sauber, nachvollziehbar und langfristig wartbar zu entwickeln. Besonders interessieren mich dabei Themen wie Privacy, Security und moderne Technologien rund um mobile Anwendungen und Backend-Systeme.
          Neben der Arbeit an bestehenden Produkten beschäftige ich mich auch mit eigenen Projekten, unter anderem im Open-Source-Bereich. Auch wenn nicht jedes Projekt weitergeführt wird, ist für mich der Lernprozess und das Verständnis für Systeme genauso wichtig wie das fertige Ergebnis.
          Auf{" "}
          <Link href={"/cv"} className="underline">
            dieser Seite
          </Link>
          findest du einen Überblick über meine Projekte und meine Arbeit.
        </p>

        <div className="md:space-x-6 space-y-2 md:space-y-0 md:flex justify-center mt-4 md:m-6">
          <Link href={"/cv"} className="flex hover:underline">
            CV <ChevronRightIcon className="w-6 h-6" />{" "}
          </Link>
          <Link
            href={"mailto:danny@schapeit.com"}
            className="flex hover:underline"
          >
            Schreib mir eine Mail <ChevronRightIcon className="w-6 h-6" />
          </Link>
          <Link
            href={"https://dev.to/d3nn7"}
            target="_blank"
            className="flex hover:underline"
          >
            Blog (Dev.to) <ChevronRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <SocialMedia />
    </main>
  );
}
