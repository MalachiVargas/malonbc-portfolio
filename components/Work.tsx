import { useState } from 'react'
import { skillFilters } from '../constants'
import { projects } from '../data'
import _ from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEye } from '@fortawesome/free-regular-svg-icons'

export const Work = () => {
  const [clicked, setClicked] = useState<string[]>(['all'])

  const handleFilterClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget.id === 'all') {
      setClicked(['all'])
    } else if (!clicked.includes(e.currentTarget.id)) {
      let clickedCopy = _.filter([...clicked], (click) => click !== 'all')
      clickedCopy.push(e.currentTarget.id)
      setClicked(clickedCopy)
    } else {
      const clickedCopy = _.filter(
        [...clicked],
        (click) => click !== e.currentTarget.id
      )
      setClicked(clickedCopy)
    }
  }
  const clickedCopy = [...clicked]
  const filteredData = clicked.includes('all')
    ? projects
    : projects.filter((project) => {
        const lowercaseSkills = project.skills.map((skill) =>
          skill.toLowerCase()
        )
        return lowercaseSkills.some((skill) => clickedCopy.includes(skill))
      })

  return (
    <div id="Work" className="grid grid-cols-1 justify-items-center">
      <h1 className="font-rubikBold mt-0 xl:mt-[50px] p-2 text-black text-[50px] sm:text-[64px]">
        Work
      </h1>
      <p className="max-w-[320px] sm:max-w-[640px] text-center mb-[60px] text-[16px] sm:text-[18px] font-rubikLight">
        All the sites are hosted on vercel and the code can be found on my
        github or gitlab. Feel free to reach out to me if you have any questions
        about my work or experience.
      </p>
      <div className="mx-10 gap-4 flex flex-wrap justify-evenly">
        {skillFilters.map((skill) => (
          <button
            id={skill.id}
            key={skill.id}
            className={`${
              clicked.includes(skill.id)
                ? 'bg-black text-white'
                : 'bg-[#EBEBEB] text-black'
            } rounded-[22px] outline-none font-rubikLight text-[14px] sm:text-[16px] px-[20px] py-[4px] sm:px-[30px] sm:py-[7px]`}
            onClick={handleFilterClick}
          >
            {skill.title} {`(${skill.count})`}
          </button>
        ))}
      </div>
      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-[30px] gap-[40px] z-[10]">
        {filteredData.map((project) => (
          <div key={project.id} className="flex flex-col">
            <div className="w-[320px] h-[240px] relative overflow-hidden rounded-lg border-5 border-gray-100">
              <Image
                layout="fill"
                src={project.image as string}
                alt={project.alt}
              />
            </div>
            <h3 className="font-rubikBold text-sm mt-2 px-1">
              {project.title}
            </h3>
            <div className="flex gap-3">
              {(project.skills.length > 3
                ? [
                    ...project.skills.slice(0, 3),
                    `+${project.skills.length - 3}`
                  ]
                : project.skills
              ).map((skill) => (
                <div
                  key={skill}
                  className="bg-[#EBEBEB] text-black py-1 px-[14px] mt-3 rounded-[13px] font-rubikRegular text-[13px] inline"
                >
                  {skill}
                </div>
              ))}
            </div>
            <div>
              <p className="font-rubikLight text-[12px] text-[#707070] max-w-[300px] px-1 mt-3">
                {project.description}
              </p>
              <div className="flex text-[14px] font-rubikLight mt-3 gap-4">
                <button className="bg-black rounded-[6px] px-[37px] p-2">
                  <Link href={project.liveSiteLink}>
                    <div className="flex text-white gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="w-[15px] h-[15px] "
                      />
                      <p>Preview</p>
                    </div>
                  </Link>
                </button>
                <button className="bg-white border-black border rounded-[6px] px-[30px] p-2">
                  <Link href={project.repositoryLink}>
                    <div className="flex text-black gap-2 items-center">
                      <FontAwesomeIcon
                        icon={project.repositoryIcon}
                        className="w-[15px] h-[15px] "
                      />
                      <p>{project.repository} repo</p>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
