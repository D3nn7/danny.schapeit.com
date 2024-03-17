import LinkButton from "@/components/linkButton";
import SocialMedia from "@/components/socialMediaLinks";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-8 w-full">
      <div className="w-full justify-center text-center items-center mt-16 md:mt-0 space-y-2 flex flex-col">
        <LinkButton href="https://slynite.com" text="Slynite" target="_blank" />
        <LinkButton href="/69mm" text="69mm videoclub" />
        <LinkButton
          href="https://open.spotify.com/user/31sopj7x57putwcpessfq5ptzdhe?si=7e85977feb584146"
          text="Spotify playlists"
          target="_blank"
        />
        <LinkButton href="/cv" text="my CV" />
        <LinkButton
          href="mailto:danny@schapeit.com"
          text="contact me"
          target="_blank"
        />
      </div>
    </main>
  );
}
