import Image from "next/image";
import Link from "next/link";

export default function SocialLink({name, link, image}: {name: string, link: string, image: string}) {
    return (
        <Link href={link} target="_blank" rel='noreferrer'>
            <Image src={image} width={80} height={80} alt={name} className='transition ease-in-out hover:scale-110 duration-150' />
        </Link>
    )
}