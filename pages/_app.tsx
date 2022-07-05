import Layout from 'components/layout/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEOMetaTags />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

const SEOMetaTags = () => {
  return (
    <Head>
      <title>Gionatha Sturba</title>
      <meta name="description" content="Gionatha Sturba Homepage" />
      <meta name="author" content="Gionatha Sturba" />

      <meta property="og:url" content="https://www.gionathas.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gionatha Sturba" />
      <meta property="og:description" content="Gionatha Sturba Homepage" />
      <meta property="og:image" content="https://www.craftz.dog/card.png" />
    </Head>
  )
}

export default App
