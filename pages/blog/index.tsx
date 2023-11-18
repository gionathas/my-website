import { NextPage } from 'next'
import Head from 'next/head'

const BlogPage: NextPage = () => {
  return (
    <>
      <PageMetaTags />
      <div>Work in progress</div>
    </>
  )
}

const PageMetaTags = () => {
  return (
    <Head>
      <title>Blog | Gionatha Sturba</title>
    </Head>
  )
}

export default BlogPage
