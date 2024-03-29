import routes from 'config/routes'
import { Post } from 'lib/mappers/post'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { fetchPosts } from '../../lib/api/blog'

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await fetchPosts()

  return {
    props: { posts },
    revalidate: parseInt(process.env.BLOG_REVALIDATE_TIME),
  }
}

const BlogPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

const description =
  'A collection of post where I ramble about anything not tech related.'

const BlogSeo = () => {
  return (
    <NextSeo
      title="Blog"
      description={description}
      openGraph={{
        title: "Gionatha's Blog",
        description,
        url: `https://gionathas.dev${routes.blog}`,
      }}
    />
  )
}

export default BlogPage
