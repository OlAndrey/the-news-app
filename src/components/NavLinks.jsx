'use client'

import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import SearchBox from './SearchBox'
import PropTypes from 'prop-types';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology'
]

function NavLinks({ nav }) {
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
          `h-[100vh] fixed bottom-0 flex flex-col pt-24 justify-around
          items-center w-2/3 md:hidden bg-white z-40 duration-1000 
            ${nav ? 'right-[0px]' : 'right-[-100vw]'} `}
      >
        <SearchBox hidden={false} />
        {categories.map((category) => (
          <div 
            key={category} 
            className="w-full text-center pb-4 border-b-2 border-gray-500"
          >
            <NavLink category={category} isActive={isActive(category)} />
          </div>
        ))}
      </nav>
    </>
  )
}

NavLinks.propTypes = {
  nav: PropTypes.bool.isRequired
}

export default NavLinks
