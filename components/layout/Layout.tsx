import Header from 'components/layout/Header'
import React from 'react'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="max-w-xl min-h-screen px-6 mx-auto mt-10 md:px-0">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
