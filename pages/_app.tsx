import Layout from 'components/layout/Layout'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics'
import 'styles/globals.css'

const seoDescription = 'Developer, writer and creator.'

const App = ({ Component, pageProps }: AppProps) => {
  usePageViews()

  return (
    <>
      <Seo />
      <GoogleAnalytics />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

const Seo = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        defaultTitle="Gionatha Sturba"
        titleTemplate="%s | Gionatha Sturba"
        description={seoDescription}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://gionathas.dev/',
          site_name: 'Gionatha Sturba',
          images: [
            {
              url: 'https://gionathas.dev/images/og_image.png',
              width: 1200,
              height: 630,
              alt: 'Gionatha Sturba',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>',
          },
        ]}
      />
    </>
  )
}

export default App
