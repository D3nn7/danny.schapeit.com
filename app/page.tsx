import EasterEgg from '@/components/easterEgg'
import SocialMedia from '@/components/socialMediaLinks'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center space-y-8'>
		<EasterEgg />
		<div className='justify-center text-center md:space-x-4'>
			<h3 className='font-high-summit text-4xl text-silver'>About</h3>
			<p className='text-left md:px-36'>
				I&apos;m Danny Schapeit (or D3nn7) a developer from Germany with a preference for open source and privacy protected software.
				Most of all I like to develop projects for my company <Link href={'https://slynite.com'} className='underline'>Slynite</Link>.
				My skills and knowledge can be found in my <Link href={'/cv'} className='underline'>CV</Link>. I mainly work on my Macbook, which is why I have advanced Unix knowledge.
				In my free time I like to explore the world, play games or steam sometimes on <Link href={'https://www.twitch.tv/dannyschapeit'} className='underline'>Twitch</Link>. I am also an absolute cat lover and I like to play table tennis. Video/Photo editing is also one of my hobbies (I have good knowledge of some Adobe CC products).
			</p>

			<div className='md:space-x-6 space-y-2 md:space-y-0 md:flex justify-center mt-4 md:m-6'>
				<Link href={'/cv'} className='flex hover:underline'>CV <ChevronRightIcon className='w-6 h-6' /> </Link>
				<Link href={'mailto:danny@schapeit.com'} className='flex hover:underline'>Drop a mail <ChevronRightIcon className='w-6 h-6' /></Link>
				<Link href={'https://dev.to/d3nn7'} target='_blank' className='flex hover:underline'>Blog (Dev.to) <ChevronRightIcon className='w-6 h-6' /></Link>
			</div>
		</div>

		<SocialMedia />
    </main>
  )
}
