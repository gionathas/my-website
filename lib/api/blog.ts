import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import invariant from 'invariant'
import { mapPageResponseToPost } from 'lib/mappers/post'
import { isDevelopment } from 'lib/utils/helpers'
import notion from '../../notion'

invariant(process.env.NOTION_DATABASE_ID, 'NOTION_DATABASE_ID is required')

const blogDatabaseID = process.env.NOTION_DATABASE_ID

const fetchPostFilter = isDevelopment
  ? undefined
  : { property: 'Status', select: { equals: 'Public' } }

export const fetchPosts = async () => {
  const { results } = await notion.databases.query({
    database_id: blogDatabaseID,
    filter: fetchPostFilter,
    sorts: [
      {
        property: 'Created Time',
        direction: 'descending',
      },
    ],
  })

  return (results as PageObjectResponse[]).map((page) =>
    mapPageResponseToPost(page, 'short')
  )
}

export const fetchPostBySlug = async (slug: string) => {
  const { results } = await notion.databases.query({
    database_id: blogDatabaseID,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  })

  const [post] = (results as PageObjectResponse[]).map((page) =>
    mapPageResponseToPost(page, 'long')
  )

  return post
}

export const fetchPostContent = async (pageId: string) => {
  const { results } = await notion.blocks.children.list({
    block_id: pageId,
  })

  return results as BlockObjectResponse[]
}
