import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Contact = () => {
  return (
    <div
      id="Contact"
      className="grid grid-cols-1 justify-items-center mt-[100px]"
    >
      <h1 className="font-rubikBold mt-0 xl:mt-[50px] p-2 text-black text-[50px] sm:text-[64px]">
        Contact
      </h1>
      <p className="max-w-[350px] sm:max-w-[400px] text-center mb-[60px] text-[16px] sm:text-[18px] font-rubikLight">
        Reach out to me if you'd like to hear more about how I can help your
        company!
      </p>
      <input
        className="bg-slate-50 rounded-[6px] border-slate-300 border-[1px] text-black p-2 font-rubikRegular text-[16px] w-[350px] sm:w-[450px] mb-[25px] "
        placeholder="Enter your email address"
        type="text"
      />
      <input
        className="bg-slate-50 rounded-[6px] border-slate-300 border-[1px] text-black p-2 font-rubikRegular text-[16px] w-[350px] sm:w-[450px] mb-[25px]"
        placeholder="Enter your full name"
        type="text"
      />
      <textarea
        className="bg-slate-50 rounded-[6px] border-slate-300 border-[1px] text-black p-2 font-rubikRegular text-[16px] w-[350px] sm:w-[450px]"
        placeholder="Hello Malachi!"
        rows={8}
      />
      <button className="bg-black rounded-[6px] px-[24px] p-[12px] mt-[30px]">
        <div className="flex text-white gap-4 items-center font-rubikLight">
          <FontAwesomeIcon icon={faPaperPlane} className="w-[15px] h-[15px]" />
          Send
        </div>
      </button>
    </div>
  )
}
