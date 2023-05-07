import React, { useState } from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

function Header() {
  const [nav, setNav] = useState(false)
  const showNav = () => {
    setNav(!nav)
  }
  return (
    <header>
      <div className="container p-10 mx-auto flex justify-between items-center">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl z-51">
            The{' '}
            <span className="underline decoration-6 decoration-orange-400">
              News
            </span>{' '}
            App
          </h1>
        </Link>

        <SearchBox hidden={true} />

        {nav ? (
          <i
            className="right-16 text-3xl z-50 md:hidden"
            aria-hidden="true"
            onClick={showNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
            </svg>
          </i>
        ) : (
          <i
            className=" text-3xl md:hidden"
            aria-hidden="true"
            onClick={showNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </i>
        )}
      </div>

      <NavLinks nav={nav} showNav={showNav} />
    </header>
  )
}

export default Header
