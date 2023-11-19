import Layout from 'components/layout/Layout'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics'
import 'styles/globals.css'

const description = 'Developer, writer and creator.'

const App = ({ Component, pageProps }: AppProps) => {
  usePageViews()

  return (
    <>
      <DefaultSeo />
      <GoogleAnalytics />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

const DefaultSeo = () => {
  return (
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Gionatha Sturba</title>
      <meta name="description" content={description} />
      <meta name="author" content="Gionatha Sturba" />

      <meta
        property="og:image"
        content="https://gionathas.dev/images/og_image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:url" content="https://gionathas.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gionatha Sturba" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Gionatha Sturba" />

      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default App
