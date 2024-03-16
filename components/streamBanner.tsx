import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function StreamBanner() {
  return (
    <Link
      href={"https://www.twitch.tv/dannyschapeit"}
      target="_blank"
      className="flex items-center space-x-2 rounded-full border border-gray-600 hover:border-gray-500 text-gray-500 text-sm h-6"
    >
      <div className="w-2 h-2 rounded-full bg-red-500 ml-2 animate-pulse" />
      <h1>I&apos;m currently streaming on Twitch</h1>
      <ChevronRightIcon className="w-6 h-6" />
    </Link>
  );
}
