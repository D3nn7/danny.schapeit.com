import ProgressbarItem from "@/components/progressbarItem";
import SocialMedia from "@/components/socialMediaLinks";
import TimelineItem from "@/components/timelineItem";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV - Danny Schapeit",
};

export default function CV() {
  return (
    <main className="items-center space-y-8">
      <div className="justify-center text-center md:space-x-4">
        <div className="mb-6 flex justify-center">
          <Link href={"/"} className="flex hover:underline">
            Home <ChevronRightIcon className="w-6 h-6" />{" "}
          </Link>
        </div>
        <h3 className="text-4xl text-silver">Resume</h3>
      </div>
      <div className="text-left">
        <p className="mb-6">
          I&apos;m Danny Schapeit (or D3nn7) a developer from Germany with a
          preference for open source and privacy protected software. Most of all
          I like to develop projects for my company{" "}
          <Link href={"https://slynite.com"} className="underline">
            Slynite
          </Link>
          . My skills and knowledge can be found in my{" "}
          <Link href={"/cv"} className="underline">
            CV
          </Link>
          . I mainly work on my Macbook, which is why I have advanced Unix
          knowledge. In my free time I like to explore the world, play games or
          steam sometimes on{" "}
          <Link
            href={"https://www.twitch.tv/dannyschapeit"}
            className="underline"
          >
            Twitch
          </Link>
          . I am also an absolute cat lover and I like to play table tennis.
          Video/Photo editing is also one of my hobbies (I have good knowledge
          of some Adobe CC products).
        </p>

        <h4 className="text-2xl text-silver">Experince</h4>
        <ol className="relative border-l border-gray-400 space-y-4">
          <TimelineItem
            title="Slynite"
            time="2019 - Present"
            extraInfos="Founder & CEO"
          />
          <TimelineItem
            title="SPEDION GmbH"
            time="2023 - Present"
            extraInfos="Software Developer"
          />
          <TimelineItem
            title="em-BIT GmbH"
            time="2020 - Present"
            extraInfos="Mobile device setup"
          />
          <TimelineItem
            title="SPEDION GmbH"
            time="2020 - 2023 (3 yrs)"
            extraInfos="Apprenticeship as IT specialist for application development"
          />
          <TimelineItem
            title="REWE Group (Rewe Markt Bierwirth OHG)"
            time="2019 - 2020 (2 yrs)"
            extraInfos="Temporary help (mini job) in sales area"
          />
          <TimelineItem
            title="Heimatbote Druckerei & Verlag Ostheimer"
            time="2018 - 2019 (2 yrs)"
            extraInfos="Newspaper delivery boy"
          />
        </ol>
      </div>

      <div>
        <h4 className="text-2xl text-silver">Education</h4>
        <ol className="relative border-l border-gray-400 space-y-4">
          <TimelineItem
            title="Apprenticeship as IT specialist for application development"
            time="2020 - 2023"
            extraInfos="Berufsschule Miltenberg Obernburg"
          />
          <TimelineItem
            title="German Hauptschule and Realschule"
            time="2009 - 2020"
            extraInfos="Different schools in Bavaria, Hesse and Rhineland-Palatinate"
          />
        </ol>
      </div>

      <div>
        <h4 className="text-2xl text-silver">Certifications</h4>
        <ol className="relative border-l border-gray-400 space-y-4">
          <TimelineItem
            title="Qualification of Apprenticeship as IT specialist for application development"
            time="26. July 2023"
            extraInfos="Europeean qualificationlevel 4"
          />
          <TimelineItem
            title="Samsung Knox Certified Consultant 2022"
            time="22. June 2022"
          />
        </ol>
      </div>

      <div>
        <h4 className="text-2xl text-silver">Skills</h4>
        <div className="space-y-4">
          <ProgressbarItem
            title="Java & Kotlin"
            state="Very Good"
            progress={70}
          />
          <ProgressbarItem title="C#" state="Good" progress={75} />
          <ProgressbarItem
            title="Javascript & Typescript"
            state="Very Good"
            progress={85}
          />
          <ProgressbarItem
            title="Node.js & React (mainly Next.js)"
            state="Very Good"
            progress={85}
          />
          <ProgressbarItem title="Docker" state="Good" progress={60} />
          <ProgressbarItem title="Git" state="Very Good" progress={85} />
          <ProgressbarItem title="Unix" state="Very Good" progress={85} />
          <ProgressbarItem
            title="Project management"
            state="Good"
            progress={60}
          />
          <ProgressbarItem title="Adobe CC Suite" state="Ok" progress={55} />
        </div>
      </div>

      <div>
        <h4 className="text-2xl text-silver">Language</h4>
        <div className="space-y-4">
          <ProgressbarItem title="German" state="Native" progress={100} />
          <ProgressbarItem title="English" state="Good" progress={70} />
        </div>
      </div>
    </main>
  );
}
