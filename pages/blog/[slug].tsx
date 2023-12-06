import { NotionRenderer } from '@notion-render/client'
import routes from 'config/routes'
import { fetchPostBySlug, fetchPostContent } from 'lib/api/blog'
import { Post } from 'lib/mappers/post'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import notion from 'notion'
import { ParsedUrlQuery } from 'querystring'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps<{
  post: Post
  htmlContent: string
}> = async ({ params }) => {
  const { slug } = params as ParsedUrlQuery

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const post = await fetchPostBySlug(slug as string)

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
    revalidate: parseInt(process.env.BLOG_POST_REVALIDATE_TIME),
  }
}

const BlogPostPage = ({
  post,
  htmlContent,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    <NextSeo
      defaultTitle={post.title}
      description={post.preview}
      openGraph={{
        title: post.title,
        url: `https://gionathas.dev${routes.blogPost(post.slug)}`,
        description: post.preview,
        article: {
          publishedTime: post.createdTime,
          modifiedTime: post.lastEditedTime,
          tags: post.tags,
          authors: ['Gionatha Sturba'],
        },
      }}
    />
  )
}

export default BlogPostPage
