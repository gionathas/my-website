import Layout from 'components/layout/Layout'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  usePageViews()

  return (
    <>
      <MetaTags />
      <GoogleAnalytics />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

const MetaTags = () => {
  return (
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"
      />

      <title>Gionatha Sturba</title>
      <meta name="description" content="Gionatha Sturba Homepage" />
      <meta name="author" content="Gionatha Sturba" />

      <meta property="og:url" content="https://gionathas.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gionatha Sturba | Homepage" />
      <meta property="og:description" content="Gionatha Sturba Homepage" />
    </Head>
  )
}

export default App
