import EasterEgg from "@/components/easterEgg";
import SocialMedia from "@/components/socialMediaLinks";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-8">
      <EasterEgg />
      <div className="justify-center text-center md:space-x-4">
        <h3 className="font-high-summit text-4xl text-silver">About</h3>
        <p className="text-left md:px-36">
          Hey, I&apos;m Danny Schapeit (or D3nn7) – a software developer from
          Germany with a passion for open source and privacy-focused software.
          I’m the founder of{" "}
          <Link href={"https://slynite.com"} className="underline">
            Slynite
          </Link>
          , a community-driven project dedicated to building secure and
          user-friendly tools.
          <br />
          <br />
          Professionally, I work as a developer and trainer, mainly using
          Windows at the office and macOS at home – which has helped me gain
          solid experience with both Windows and Unix-based systems. I&apos;m
          always eager to learn new tech, build meaningful solutions, and
          contribute to ideas that actually respect user privacy.
          <br />
          <br />
          In my free time, I enjoy exploring new places, tinkering with creative
          projects like video and photo editing, and occasionally just geeking
          out over clean UI and smooth workflows.
          <br />
          <br />
          You can find more about my experience in my{" "}
          <Link href={"/cv"} className="underline">
            CV
          </Link>
          .
        </p>

        <div className="md:space-x-6 space-y-2 md:space-y-0 md:flex justify-center mt-4 md:m-6">
          <Link href={"/cv"} className="flex hover:underline">
            CV <ChevronRightIcon className="w-6 h-6" />{" "}
          </Link>
          <Link
            href={"mailto:danny@schapeit.com"}
            className="flex hover:underline"
          >
            Drop a mail <ChevronRightIcon className="w-6 h-6" />
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
