'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function SearchBox({ hidden }) {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!input) return

    router.push(`/search?term=${input}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className={`${hidden ? 'hidden': 'block'} md:flex max-w-6xl justify-between items-center px-5`}
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-14 
            rounded-sm placeholder-gray-500 
            text-gray-500 outline-none flex-1 bg-transparent
            dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="w-full md:w-auto text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
