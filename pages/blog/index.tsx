import routes from 'config/routes'
import { Post } from 'lib/mappers/post'
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

      <ul className="space-y-7">
        {posts.map((post) => (
          <PostPreviewEntry key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}

const PostPreviewEntry = ({ post }: { post: Post }) => {
  return (
    <li>
      <Link
        className="text-lg font-bold leading-tight text-white hover:underline hover:underline-offset-4"
        key={post.slug}
        href={routes.blogPost(post.slug)}
      >
        {post.title}
      </Link>
      <p className="mt-1 text-xs text-gray-400">
        <span>{post.createdTime}</span>
        <span>&nbsp;&bull;&nbsp;</span>
        <span>{post.tags.join(', ')}</span>
      </p>
    </li>
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
