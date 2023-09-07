import StreamBanner from '@/components/streamBanner'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '300', '400','700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Hey I\'m Danny 👋🏻',
  description: 'Hey! I\'m Danny, a software developer from Germany with a preference for open-source and privacy-protected software. Learn more about me on my website.',
  keywords: 'developer, software engineer, open source, open source developer, privacy-focused, geek, german developer, d3nn7, slynite, danny schapeit, danny-tobias schapeit',
  robots: 'index, follow',
  authors: { name: 'Danny-Tobias Schapeit', url: 'https://danny.schapeit.com' },
  referrer: 'origin',
  themeColor: '#131313'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<link rel="manifest" href="/favicon/site.webmanifest"/>
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1e293b"/>
			</head>
			<body className={roboto.className}>
				<div className='flex justify-center flex-col max-h-[64rem] min-h-screen'>
					<Image src={'/background.jpg'} width={1920} height={600} alt='Background' className='max-h-[300px] 2xl:max-h-[64rem] self-center' />
					<div className='flex min-h-screen flex-col items-center px-6 lg:px-5 xl:px-36 2xl:px-64 bg-black text-gray-300'>
						<Link href={'https://holopin.io/collect/clfh7d7uc32160fjmhvwvnfvx'} target='_blank'><Image src={'/logo.png'} width={400} height={400} alt="Logo" className='-mt-28 md:-mt-32' /></Link>
						{process.env.NEXT_PUBLIC_TWITCH_LIVE === 'true' ? <StreamBanner /> : null}
						<h1 className='font-high-summit text-4xl md:text-6xl text-silver mb-4'>Danny Schapeit</h1>
						<h2 className='text-center md:text-xl mb-8'>Developer with focus on privacy and open source.</h2>
						{children} 
					</div>
				</div> 
			</body>
		</html>
	)
}
