'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology'
]

function NavLinks({nav, showNav}) {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname?.split('/').pop() === path
  }


  return (
    <>
        <nav className="container mx-auto hidden md:flex gap-5 justify-between  ">
        {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
        </nav>

        {/* mobile nav */}
        <nav
          className={
            `h-[100vh] fixed bottom-0 flex flex-col pt-24 justify-around items-center w-36 md:hidden bg-white z-40 duration-1000 
            ${nav ? "right-[0px]" : "right-[-100vw]"} `
          }
        >
          {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
        </nav>
      </>
  )
}

export default NavLinks
