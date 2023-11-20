import Header from 'components/layout/Header'
import { Open_Sans } from 'next/font/google'
import React from 'react'
import Footer from './Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FontFamily />
      <Header />
      <main className="max-w-xl min-h-screen px-6 mx-auto mt-10 md:px-0">
        {children}
      </main>
      <Footer />
    </>
  )
}

const FontFamily = () => {
  return (
    <style jsx global>{`
      html {
        font-family: ${openSans.style.fontFamily};
      }
    `}</style>
  )
}

export default Layout
