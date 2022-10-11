import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'
import { brandLinks, navLinks } from '../constants'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="mt-10 mb-5 md:mb-10 mx-10 flex items-center justify-between">
      <div className="flex gap-2 text-[31px] tracking-widest">
        <p className="font-interBlack">MAL</p>
        <p className="font-interBlack">ON</p>
        <p className="font-interBlack">BC</p>
      </div>
      <ul className="hidden md:flex font-rubikRegular text-xl items-center gap-14">
        {navLinks.map((nav) => (
          <li key={nav.id} className="hover:animate-pulse">
            <Link href={nav.hrefValue}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <div className="md:flex gap-4 hidden">
        {brandLinks.map((brand) => (
          <Link key={brand.id} href={brand.hrefLink}>
            <FontAwesomeIcon
              icon={brand.icon}
              className="w-[30px] h-[30px] hover:animate-bounce cursor-pointer"
            />
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <div onClick={() => setToggle((t) => !t)}>
          <FontAwesomeIcon
            icon={faBars}
            className="w-[30px] h-[30px] hover:animate-bounce cursor-pointer"
          />
        </div>
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } bg-white sidebar absolute top-20 right-0 mx-2 my-2 min-w-[140px] border-black border-2 rounded-xl p-4 z-[5]`}
        >
          <ul className="flex list-none flex-col items-start justify-end gap-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer font-rubikRegular text-[16px] hover:animate-pulse text-black "
              >
                <Link href={nav.hrefValue}>{nav.name}</Link>
              </li>
            ))}
            <div className="flex gap-3 mt-[10px]">
              {brandLinks.map((brand) => (
                <Link key={brand.id} href={brand.hrefLink}>
                  <FontAwesomeIcon
                    icon={brand.icon}
                    className="w-[20px] h-[20px] hover:animate-bounce cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
