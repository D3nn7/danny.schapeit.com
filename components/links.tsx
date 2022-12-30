import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Links() {
	return (
		<>
			<Link href="https://github.com/d3nn7" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></Link>
			<Link href="https://instagram.com/d3nn7.me" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagram} /></Link>
			<Link href="https://www.linkedin.com/in/danny-schapeit-a23b5a232" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></Link>
			<Link href="https://www.xing.com/profile/DannyTobias_Schapeit" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faXing} /></Link>
			<Link href="https://slynite.com/team/danny.schapeit" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGlobe} /></Link>
		</>
	)
}