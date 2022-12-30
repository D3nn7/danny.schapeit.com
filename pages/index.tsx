import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hey I&apos;m Danny 👋🏻</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Hey! I'm Danny, a software developer from Germany with a preference for open-source and privacy-protected software. Learn more about me on my website."/>
        <meta name="keywords" content="developer, software engineer, open source, open source developer, privacy-focused, geek, german developer, d3nn7, slynite, danny schapeit, danny-tobias schapeit"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="15 days"/>
        <meta name="author" content="Danny-Tobias Schapeit"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1e293b"/>
        <meta name="apple-mobile-web-app-title" content="Danny-Tobias Schapeit (D3nn7)"/>
        <meta name="application-name" content="Danny-Tobias Schapeit (D3nn7)"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#1e293b"/>
      </Head>
      <main>
        <p className="text-sm">
          Hey! I&apos;m Danny, a software developer from Germany with a preference for open source and privacy protected software. <br />(You can view some of them on <Link href="https://github.com/d3nn7" target="_blank" className="text-[#bc9c76] font-semibold">Github</Link>)<br /><br />
          Most of all I like to develop projects for my company <Link href="https://slynite.com" target="_blank" className="text-[#bc9c76] font-semibold">Slynite</Link>. On the side I&aposm working on my non-profit project for equal rights of people and genders <Link href="http://all-the-same.org" target="_blank" className="text-[#bc9c76] font-semibold">&quot;We are all the same&quot;</Link>.<br /><br />
          My skills include Java and C# development. I also have a good command of Javascript and Typescript. With the framework Nextjs I also have good experience. I like to work agile and with the support of Git. Docker is also not an unknown term for me. I mainly work on my Macbook, which is why I also have advanced Unix knowledge. Kotlin is also something I know a little bit more.<br /><br />
          In my free time I like to explore the world. I am also an absolute cat lover and I like to play table tennis. Video/Photo editing is also one of my hobbies (I have good knowledge of some Adobe CC products).
        </p>
      </main>
    </>
  )
}
