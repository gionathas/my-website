import Header from 'components/layout/Header'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Gionatha Sturba</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main className="max-w-xl mx-auto min-h-screen mt-10 px-3 md:px-0">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
