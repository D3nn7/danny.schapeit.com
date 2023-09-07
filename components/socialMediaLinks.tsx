import SocialLink from "./socialLink";

export default function SocialMedia() {
    return(
        <div className='justify-center text-center space-x-4 pb-12'>
            <h3 className='font-high-summit text-4xl text-silver'>Socials</h3>
            <div className='flex'>
                <SocialLink name={'Github'} link={'https://github.com/d3nn7'} image={'/icons/github-512.png'} />
                <SocialLink name={'Instagram'} link={'https://instagram.com/d3nn7.me'} image={'/icons/instagram-512.png'} />
                <SocialLink name={'Twitch'} link={'https://twitch.tv/dannyschapeit'} image={'/icons/twitch-512.png'} />
                <SocialLink name={'Dev.to'} link={'https://dev.to/d3nn7'} image={'/icons/dev.to-512.png'} />
                <SocialLink name={'LinkedIn'} link={'https://www.linkedin.com/in/danny-schapeit-a23b5a232'} image={'/icons/linkedin-512.png'} />
                <SocialLink name={'Xing'} link={'https://www.xing.com/profile/DannyTobias_Schapeit'} image={'/icons/xing-512.png'} />
            </div>
        </div>
    )
}