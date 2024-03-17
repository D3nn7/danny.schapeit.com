import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1 className="text-2xl font-bold">What do you searching?</h1>
      <p>
        The page your trying to access is not available yet. Try again later or
        check the url.
      </p>
      <div className="mb-6 flex justify-center">
        <Link href={"/"} className="flex hover:underline">
          Home
        </Link>
      </div>
    </main>
  );
}
