import ProgressbarItem from "@/components/progressbarItem";
import SocialMedia from "@/components/socialMediaLinks";
import TimelineItem from "@/components/timelineItem";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'CV - Danny Schapeit',
  }

export default function CV() {
    return(
        <main className='items-center space-y-8'>
            <div className='justify-center text-center md:space-x-4'>
                <div className='-mt-6 mb-6 flex justify-center'>
                    <Link href={'/'} className='flex hover:underline'>Home <ChevronRightIcon className='w-6 h-6' /> </Link>
                </div>
                <h3 className='font-high-summit text-4xl text-silver'>Resume</h3>
            </div>
            <div className="text-left">
                <h4 className='font-high-summit text-2xl text-silver'>Experince</h4>
                <ol className="relative border-l border-gray-400 space-y-4">      
                    <TimelineItem title="SPEDION GmbH" time="2023 - Present" extraInfos="Software Developer" />           
                    <TimelineItem title="em-BIT GmbH" time="2023 - Present" extraInfos="Mobile device setup" />
                    <TimelineItem title="Slynite" time="2019 - Present" extraInfos="Founder & CEO" />
                    <TimelineItem title="SPEDION GmbH" time="2020 - 2023 (3 yrs)" extraInfos="Apprenticeship as IT specialist for application development" />
                    <TimelineItem title="REWE Group (Rewe Markt Bierwirth OHG)" time="2019 - 2020 (2 yrs)" extraInfos="Temporary help (mini job) in sales area" />
                    <TimelineItem title="Heimatbote Druckerei & Verlag Ostheimer" time="2018 - 2019 (2 yrs)" extraInfos="Newspaper delivery boy" />
                </ol>
            </div>

            <div>
                <h4 className='font-high-summit text-2xl text-silver'>Education</h4>
                <ol className="relative border-l border-gray-400 space-y-4">      
                    <TimelineItem title="Apprenticeship as IT specialist for application development" time="2020 - 2023" extraInfos="Berufsschule Miltenberg Obernburg" />   
                    <TimelineItem title="German Hauptschule and Realschule" time="2009 - 2020" extraInfos="Different schools in Bavaria, Hesse and Rhineland-Palatinate" />
                </ol>
            </div>

            <div>
                <h4 className='font-high-summit text-2xl text-silver'>Certifications</h4>
                <ol className="relative border-l border-gray-400 space-y-4">       
                    <TimelineItem title="Qualification of Apprenticeship as IT specialist for application development" time="26. July 2023" extraInfos="SPEDION GmbH, IHK, Berufsschule Miltenberg Obernburg" />    
                    <TimelineItem title="Samsung Knox Certified Consultant 2022" time="22. June 2022" />
                </ol>
            </div>

            <div>
                <h4 className='font-high-summit text-2xl text-silver'>Skills</h4>
                <div className="space-y-4">
                    <ProgressbarItem title="Java & Kotlin" state="Very Good" progress={99} />
                    <ProgressbarItem title="C#" state="Good" progress={75} />
                    <ProgressbarItem title="Javascript & Typescript" state="Very Good" progress={99} />
                    <ProgressbarItem title="Node.js & React (mainly Next.js)" state="Good" progress={85} />
                    <ProgressbarItem title="Docker" state="Good" progress={70} />
                    <ProgressbarItem title="Git" state="Very Good" progress={99} />
                    <ProgressbarItem title="Unix" state="Very Good" progress={90} />
                    <ProgressbarItem title="Project management" state="Good" progress={75} />
                    <ProgressbarItem title="Adobe CC Suite" state="Ok" progress={60} />
                    <ProgressbarItem title="Microsoft Office" state="Very Good" progress={95} />
                </div>
            </div>

            <div>
                <h4 className='font-high-summit text-2xl text-silver'>Language</h4>
                <div className="space-y-4">
                    <ProgressbarItem title="German" state="Native" progress={100} />
                    <ProgressbarItem title="English" state="Good" progress={85} />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <SocialMedia />
            </div>
        </main>
    )
}