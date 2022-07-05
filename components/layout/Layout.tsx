import Header from 'components/layout/Header'
import React from 'react'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="max-w-xl mx-auto min-h-screen mt-10 px-3 md:px-0">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
