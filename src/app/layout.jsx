import React from 'react'
import '../styles/globals.css'
import Header from './Header'
import Head from './head'
import Footer from './Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body
        className="flex flex-col bg-gray-100
       dark:bg-zinc-900 transition-all-duration-700"
      >
        <Header />
        <div className="flex-auto flex-shrink-0 max-w-6xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
