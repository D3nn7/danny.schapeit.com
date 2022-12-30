import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { faFile, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {

	let isBusinessCard = false;
	let isCV = false;
	const router = useRouter()
	const path = router.pathname

	if (path === undefined || path === '/') {
		isBusinessCard = true;
	} else if (path === '/cv') {
		isCV = true;
	} else {
		isBusinessCard = false;
		isCV = false;
	}

	return (
		<>
			<Link href={'mailto:danny@schapeit.com'} className="mr-1 inline-block md:mb-0 px-6 py-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"><FontAwesomeIcon icon={faEnvelope} className="ml-1 mr-1" /> Drop a mail</Link>
			<Link href={'/'} className={`ml-1 mr-1 inline-block px-6 py-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out ${isBusinessCard ? "hidden" : "visible"} `}><FontAwesomeIcon icon={faFile} className="ml-1 mr-1" />Business card</Link>
			<Link href={'/cv'} className={`ml-1 mr-1 inline-block px-6 py-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out ${isCV ? "hidden" : "visible"} `}><FontAwesomeIcon icon={faFile} className="ml-1 mr-1" /> CV</Link>
			<Link href={'https://github.com/sponsors/D3nn7'} target="_blank" className="inline-block px-6 py-2.5 bg-slate-900 text-slate font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"><FontAwesomeIcon icon={faHeart} className="ml-1 mr-1 text-[#cf5d9a]" /> Sponsor me</Link>  
		</>
	)
}