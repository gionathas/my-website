import routes from 'config/routes'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { fetchPosts } from '../../lib/api/blog'

export const getServerSideProps = async () => {
  const posts = await fetchPosts()

  return { props: { posts } }
}

const BlogPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <BlogSeo />

      <ul className="space-y-8">
        {posts.map((post) => (
          <li className="flex flex-col gap-y-1" key={post.slug}>
            <Link
              className="text-2xl font-extrabold hover:underline hover:underline-offset-4"
              key={post.slug}
              href={routes.blogPost(post.slug)}
            >
              {post.title}
            </Link>
            <span className="text-sm text-gray-300">
              {post.tags.join(', ')}
            </span>
            <span className="text-xs text-gray-500">{post.createdTime}</span>
          </li>
        ))}
      </ul>
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
