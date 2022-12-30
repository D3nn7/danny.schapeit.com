import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

export default function CV() {
	return (
		<>
			<Head>
				<title>My Resume | Danny Schapeit</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="description" content="Hey! Here is my current resume. Here you can find out what I can do and what are my hobbies."/>
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
            <p className="text-xl font-semibold">Experience</p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <div>
                  <p className="font-semibold">Slynite</p>
                  <p>Founder & CEO</p>
                  <p className="text-xs">Management, Project management, Development, Agil, Administration and Marketing</p>
                  <p className="text-xs">2019 - Present</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="font-semibold">SPEDION GmbH</p>
                  <p>Apprenticeship as IT specialist for application development</p>
                  <p className="text-xs">C#, Java, Kotlin, Android and JavaScript (ExtJS) development</p>
                  <p className="text-xs">2020 - Present</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="font-semibold">em-BIT GmbH</p>
                  <p>Mobile device setup</p>
                  <p className="text-xs">especially Samsung devices</p>
                  <p className="text-xs">2020 - Present</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="font-semibold">Rewe Group</p>
                  <p>Themporary help (mini job) in sales area</p>
                  <p className="text-xs">Rewe Markt Bierwirth OHG</p>
                  <p className="text-xs">2019 - 2020</p>
                </div>
              </li>
            </ul>

            <p className="text-xl font-semibold mt-4">Education</p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <div>
                  <p className="font-semibold">German &quot;Hauptschulabschluss&quot; and &quot;Realschulabschluss&quot;</p>
                  <p>Mittelschule Schöllkrippen</p>
                  <p className="text-xs">2019, 2020</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="font-semibold">Apprenticeship as IT specialist for application development</p>
                  <p>Berufsschule Miltenberg Obernburg</p>
                  <p className="text-xs">2020 - Present</p>
                </div>
              </li>
            </ul>

            <p className="text-xl font-semibold mt-4">Certifications</p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <div>
                  <p className="font-semibold">Samsung Knox Certified Consultant 2022</p>
                  <p className="text-xs">22 June 2022</p>
                </div>
              </li>
            </ul>

            <p className="text-xl font-semibold mt-4">Skills</p>
            <div className="grid grid-cols-2">
              <ul className="space-y-2 text-slate-300">
                <li>
                  <div>
                    <p className="font-semibold">Java</p>
                    <p className="text-xs">Very Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Kotlin</p>
                    <p className="text-xs">Learning</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Javascript & Typescript</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Nodejs</p>
                    <p>React, Node.js</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">C#</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Docker</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Unix</p>
                    <p>Linux, Linux Server, Mac OS</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <div>
                    <p className="font-semibold">Project management</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Agil</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Adobe CC</p>
                    <p>After Effects, Premiere Pro, Photoshop, Illustrator</p>
                    <p className="text-xs">Good</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-semibold">Microsoft Office</p>
                    <p>Word, Powerpoint, Excel</p>
                    <p className="text-xs">Very Good</p>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-xl font-semibold mt-4">Languages</p>
            <ul className="space-y-2 text-slate-300 grid grid-cols-2">
              <li>
                <div>
                  <p className="font-semibold">German</p>
                  <p className="text-xs">Native</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="font-semibold">English</p>
                  <p className="text-xs">Good</p>
                </div>
              </li>
            </ul>

            <p className="text-xl font-semibold mt-4">Hobbies</p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <p className="font-semibold"><FontAwesomeIcon icon={faArrowRight} /> Travel & Explore</p>
              </li>
              <li>
                <p className="font-semibold"><FontAwesomeIcon icon={faArrowRight} /> Programming</p>
              </li>
              <li>
                <p className="font-semibold"><FontAwesomeIcon icon={faArrowRight} />  Learn new things</p>
              </li>
              <li>
                <p className="font-semibold"><FontAwesomeIcon icon={faArrowRight} />  Spend time with friends</p>
              </li>
            </ul>
		</>
	)
}