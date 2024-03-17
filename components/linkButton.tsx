import Link from "next/link";

export default function LinkButton({
  href,
  text,
  target,
}: {
  href: string;
  text: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="border-2 border-gray-300 hover:bg-gray-300 hover:text-gray-800 text-gray-300 bg-gray-800/60 w-full md:w-8/12 py-2 md:py-3 rounded-full transition duration-200 ease-in-out"
    >
      {text}
    </Link>
  );
}
