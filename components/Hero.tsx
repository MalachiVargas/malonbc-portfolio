import Image from 'next/image'
import Link from 'next/link'
import headshot from '../public/images/headshot.jpg'
export const Hero = () => {
  return (
    <div
      id="home"
      className="mx-10 mt-0 sm:mt-10 mb-0 lg:mb-10 pt-0 sm:pt-10 pb-5 lg:pb-14 px-20 grid grid-cols-[repeat(auto-fit,_minmax(min(515px,_100%),_1fr))]"
    >
      <div className="flex justify-self-center xl:justify-self-end mr:0 lg:mr-20 relative">
        <div className="w-[300px] h-[460px] sm:w-[420px] sm:h-[660px] relative">
          <Image
            layout="fill"
            className="z-[0]"
            src={headshot}
            alt="headshot"
          />
        </div>

        <div className="absolute top-[-70px] left-[-130px] z-[1] w-[270px] h-[210px] hidden sm:block">
          <Image layout="fill" src="/Group1.svg" alt="Group1" />
        </div>
        <div className="absolute bottom-[-130px] left-[310px] z-[1] w-[270px] h-[210px] hidden sm:block">
          <Image layout="fill" src="/Group2.svg" alt="Group2" />
        </div>
      </div>
      <div className="flex flex-col justify-self-center xl:justify-self-start justify-center items-center xl:items-start max-w-[780px] mt-0 sm:mt-[50px] xl:mt-0">
        <div className="pt-[10px] md:pt-[30px] pb-[30px]">
          <h1 className="font-rubikBold text-black text-[40px] sm:text-[56px] py-[10px]">
            Hi, I'm Malachi and I'm a
          </h1>
          <h1 className="font-rubikBold text-white bg-black text-[50px] sm:text-[60px] leading-[.66] inline-block tracking-wider">
            Full Stack Developer<span>.</span>
          </h1>
        </div>

        <p className="text-[18px] sm:text-[20px] font-rubikLight max-w-[690px]">
          Check out the sites I've built and the technology I have learned along
          the way. My primary tech stack is React, Typescript, NextJS,
          TailwindCSS, Java, MySQL, and Spring Boot. I am highly interested in
          building web applications for emerging blockchain technologies like
          the Polygon Network, AI technologies like GPT-4, and BCI technologies
          like Neuralink.
        </p>
        <div className="flex gap-10 mt-10 mb-0 xl:mb-[105px] text-sm sm:text-xl">
          <button className="px-[25px] sm:px-[45px] font-rubikBold rounded-[8px] outline-none bg-black text-white">
            <Link href="#Contact">Contact me</Link>
          </button>
          <button className="font-rubikLight p-[9px] xs:p-[16px] px-[25px] sm:px-[45px] rounded-[8px] outline-none border border-black bg-white">
            <Link href="#Work">Check my work</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
