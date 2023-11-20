import { NotionRenderer } from '@notion-render/client'
import { fetchPostBySlug, fetchPostContent } from 'lib/api/blog'
import { Post } from 'lib/mappers/post'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import notion from 'notion'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { slug } = params as { slug: string }

  const post = await fetchPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const renderer = new NotionRenderer({
    client: notion,
  })

  const content = await fetchPostContent(post.id)
  const html = await renderer.render(...content)

  return {
    props: {
      post,
      htmlContent: html,
    },
  }
}

const BlogPostPage = ({
  post,
  htmlContent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <BlogPostSeo post={post} />

      <article>
        <h1 className="mb-1.5 text-3xl font-bold ">{post.title}</h1>
        <p className="mb-8 text-sm text-gray-400 ">
          {post.createdTime}
          &nbsp;&bull;&nbsp;
          {post.tags.join(', ')}
        </p>
        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </>
  )
}

const BlogPostSeo = ({ post }: { post: Post }) => {
  return (
    <Head>
      <title>{post.title}</title>
    </Head>
  )
}

export default BlogPostPage
