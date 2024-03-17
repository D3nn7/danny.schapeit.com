import Image from "next/image";
import SocialMedia from "./socialMediaLinks";
import Link from "next/link";

export default function Footer({ socials = true }: { socials?: boolean }) {
  return (
    <footer className="flex flex-col items-center">
      {socials && <SocialMedia />}
      <Link href={"/"}>
        <Image
          src={"/footer-image.png"}
          width={300}
          height={100}
          alt="footer"
          className="self-center w-[200px] md:w-[300px]"
        />
      </Link>
    </footer>
  );
}
