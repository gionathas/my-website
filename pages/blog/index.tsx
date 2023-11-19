import { NextPage } from 'next'
import Head from 'next/head'

const BlogPage: NextPage = () => {
  return (
    <>
      <BlogSeo />
      <div>Work in progress</div>
    </>
  )
}

const BlogSeo = () => {
  return (
    <Head>
      <title>Blog | Gionatha Sturba</title>
    </Head>
  )
}

export default BlogPage
