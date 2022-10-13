import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'

export const Resume = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center mt-[40px]">
      <h1 className="font-rubikBold mt-0 xl:mt-[46px] p-2 text-black text-[46px] sm:text-[58px] relative z-[10]">
        Resume
      </h1>
      <div className="relative">
        <div className="absolute top-[-200px] left-[-170px] sm:top-[-240px] sm:left-[-220px] w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] opacity-50 z-[0]">
          <Image layout="fill" src="/Group3.svg" alt="Group3" />
        </div>
      </div>

      <h1 className="font-rubikBold text-white bg-black text-[50px] sm:text-[60px] leading-[.69] inline-block tracking-wider mt-[120px] ">
        Education
      </h1>
      <div className="text-center max-w-[200px] mt-[20px]">
        <h3 className="font-rubikBold text-sm mt-2 px-1">
          University of North Carolina at Charlotte
        </h3>
        <p className="font-rubikLight text-sm mt-2 px-1">
          Bachelor of Science, Computer Science
        </p>
        <h3 className="font-rubikBold text-sm mt-2 px-1">3.95 GPA</h3>
        <p className="font-rubikLight text-sm mt-2 px-1">May 2019 - May 2021</p>
      </div>

      <h1 className="font-rubikBold text-center text-white bg-black text-[50px] sm:text-[60px] leading-[.68] inline-block tracking-wide mt-[40px] max-w-[287px] sm:max-w-[100%]">
        Work Experience
      </h1>
      <div className="text-center max-w-[200px] mt-[20px]">
        <h3 className="font-rubikBold text-sm mt-2 px-1">
          Head of Partnerships
        </h3>
        <p className="font-rubikRegular text-md mt-2 px-1">Dequest, Remote</p>
        <p className="font-rubikLight text-sm mt-2 px-1">
          January 2022 - July 2022
        </p>
      </div>
      <ul className="list-disc mt-[30px] flex flex-col gap-2 font-rubikLight text-justify text-sm px-1 max-w-[280px] sm:max-w-[610px] md:max-w-[820px] leading-[1.6]">
        <li>
          Built relationships with games and guilds across the Web3 ecosystem.
          Metaguild, Qu3st, Mithraeum, and CastleDAO are amongst the many
          partnerships.
        </li>
        <li>
          Developed strategies for DeQuest to reach out to games/guilds to build
          their quests and rewards.
        </li>
        <li>
          Researched and produced reports on the best games/protocols for
          partnerships with details on integration.
        </li>
        <li>
          Set up communications opportunities with leading Web3 gaming content
          creators on Twitter, Twitch, and YT.
        </li>
        <li>
          Worked closely with the COO and CEO in dealing directly with all
          partners.
        </li>
      </ul>

      <div className="text-center max-w-[200px] mt-[20px]">
        <h3 className="font-rubikBold text-sm mt-2 px-1">Phone Banker II</h3>
        <p className="font-rubikRegular text-md mt-2 px-1">
          Wells Fargo CIC, Charlotte, NC
        </p>
        <p className="font-rubikLight text-sm mt-2 px-1">
          April 2018 - May 2019
        </p>
      </div>
      <ul className="list-disc mt-[30px] flex flex-col gap-2 font-rubikLight text-justify text-sm px-1 max-w-[280px] sm:max-w-[610px] md:max-w-[820px] leading-[1.6]">
        <li>
          Provided service for 10,000+ small business customers at the National
          Business Banking Center.
        </li>
        <li>
          Promoted to leader on the new hire coaching team where I was
          responsible for reviewing phone calls, class presentations, and
          overall guidance.
        </li>
        <li>
          Received the customer excellence award for top customer experience
          scores.
        </li>
      </ul>
      <h1 className="font-rubikBold text-center text-white bg-black text-[50px] sm:text-[60px] leading-[.68] inline-block tracking-wide mt-[40px] max-w-[287px] sm:max-w-[100%]">
        Skills and Tools
      </h1>
      <div className="flex gap-[10px] sm:gap-[150px] md:gap-[200px] text-justify text-[13px] sm:text-[16px] sm:text-center">
        <ul className="mt-[40px] flex flex-col gap-2 font-rubikRegular px-1 leading-[2.4]">
          <li>React</li>
          <li>NextJS</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
          <li>Java</li>
          <li>SpringBoot</li>
          <li>Javascript</li>
        </ul>
        <ul className="mt-[40px] flex flex-col gap-2 font-rubikRegular px-1 leading-[2.4]">
          <li>Android Studio</li>
          <li>Figma</li>
          <li>HTML/CSS</li>
          <li>Jira</li>
          <li>GIT</li>
          <li>Github/Gitlab</li>
          <li>REST API</li>
        </ul>
        <ul className="mt-[40px] flex flex-col gap-2 font-rubikRegular px-1 leading-[2.4]">
          <li>GraphQL</li>
          <li>Solidity</li>
          <li>Redux Toolkit</li>
          <li>Video Content</li>
          <li>Documentation</li>
          <li>Sales</li>
          <li>Management</li>
        </ul>
      </div>
      <p className="max-w-[320px] sm:max-w-[640px] text-center mb-[25px] text-[16px] sm:text-[18px] font-rubikRegular mt-[55px]">
        Download my resume as a PDF file.
      </p>
      <button className="bg-black rounded-[6px] px-[22px] p-[10px]">
        <div className="flex text-white gap-4 items-center font-rubikLight ">
          <FontAwesomeIcon icon={faDownload} className="w-[15px] h-[15px]" />
          <a
            download="malachi-vargas-resume-fall-2022"
            href="/resume-fall-2022.pdf"
          >
            Download ~3 MB
          </a>
        </div>
      </button>
    </div>
  )
}
