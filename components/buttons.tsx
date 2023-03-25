import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { faFile, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {

	let isBusinessCard = false;
	const router = useRouter()
	const path = router.pathname

	if (path === undefined || path === '/') {
		isBusinessCard = true;
	}

	return (
		<div className="flex-col space-y-4 mt-2 mb-2">
			<div>
				<Link href={'mailto:danny@schapeit.com'} className="pl-6 pr-6 pt-2.5 pb-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"><FontAwesomeIcon icon={faEnvelope} className="ml-1 mr-1" /> Drop a mail</Link>
			</div>
			<div>
				<Link href={'/'} className={`pl-6 pr-6 pt-2.5 pb-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out ${isBusinessCard ? "hidden" : "visible"} `}><FontAwesomeIcon icon={faFile} className="ml-1 mr-1" />Business card</Link>
			</div>
			<div>
				<Link href={'/cv'} className={`pl-6 pr-6 pt-2.5 pb-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out ${isBusinessCard ? "visible" : "hidden"} `}><FontAwesomeIcon icon={faFile} className="ml-1 mr-1" />CV</Link>
			</div>
			<div>
				<Link href={'https://github.com/sponsors/D3nn7'} target="_blank" className="pl-6 pr-6 pt-2.5 pb-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"><FontAwesomeIcon icon={faHeart} className="ml-1 mr-1 text-[#cf5d9a]" /> Sponsor me</Link>  
			</div>
		</div>
	)
}