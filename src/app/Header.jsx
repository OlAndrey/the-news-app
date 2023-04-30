import React from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Link href="/" prefetch={false}>
          <h1
            className="font-serif 
          text-4xl text-center"
          >
            The{' '}
            <span
              className="underline 
            decoration-6 decoration-orange-400"
            >
              News
            </span>{' '}
            App
          </h1>
        </Link>
      </div>

      <NavLinks />
    </header>
  )
}

export default Header
