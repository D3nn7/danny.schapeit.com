import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function NotFound() {
    return (
      <main>
        <h1 className="text-2xl font-bold">¯\(ツ)/¯</h1>
        <p>Hier ist wohl nix..</p>
        <div className='mb-6 flex justify-center'>
            <Link href={'/'} className='flex hover:underline'>Home <ChevronRightIcon className='w-6 h-6' /> </Link>
        </div>
      </main>
    )
  }