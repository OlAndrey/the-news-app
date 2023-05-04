import React from 'react'
import Header from './Header'
import Head from './head'
import Footer from './Footer'

export default function RootLayout({ children }) {
  return (
    <>
      <Head />
      <div
        className="min-h-screen flex flex-col bg-gray-100
       dark:bg-zinc-900 transition-all-duration-700"
      >
        <Header />
        <div className="flex-auto flex-shrink-0">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
