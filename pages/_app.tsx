import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Links from '../components/links'
import Buttons from '../components/buttons'
import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className="grid h-full w-full place-items-center p-7 md:h-screen">
        <div className="rounded-lg md:grid md:grid-cols-3 bg-slate-800 p-4 md:p-8 text-slate-100 lg:ml-52 lg:mr-52">
          <div className="mb-6 md:mr-4">
            <Image className="rounded-md" src={'/d3nn7-on-mac_memoji.png'} width={1080} height={1080} alt="Danny" />
          </div>
          <div className="col-span-2">
            <h1 className="text-3xl font-bold">Danny Schapeit (D3nn7)</h1>
            <h2 className="text-lg">Developer with focus on privacy and open source</h2>
            <div className="pt-2 pb-2 text-md">
              <div className="mb-2 text-lg space-x-1">
                <Links />
              </div>
              <div className="space-y-2">
                <Buttons />              
              </div>
            </div>
            <Component {...pageProps} />
          </div>
        </div>
        <div className="text-sm mb-4 mt-6 text-slate-100">
          <p>Created with <FontAwesomeIcon icon={faHeart} className="text-red-600" /> by Danny Schapeit. <Link href={'https://github.com/d3nn7/danny.schapeit.com'} target="_blank"><b>Github Repository</b></Link></p>
        </div>
      </div>
  )
}
