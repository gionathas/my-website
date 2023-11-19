import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

type PostRawProperties = {
  Title: { title: Array<{ text: { content: string } }> }
  Slug: { rich_text: Array<{ plain_text: string }> }
  Tags: { multi_select: Array<{ name: string }> }
  'Created Time': { created_time: string }
  'Last Edit': { last_edited_time: string }
} & Record<string, unknown>

export type Post = {
  id: string
  title: string
  slug: string
  tags: string[]
  createdTime: string
  lastEditedTime: string
}

const postShortDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  timeZone: 'UTC',
})

const postLongDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export const mapPageResponseToPost = (
  page: PageObjectResponse,
  dateKind: 'short' | 'long' = 'short'
): Post => {
  const dateFormatter =
    dateKind === 'short' ? postShortDateFormatter : postLongDateFormatter

  const properties = page.properties as PostRawProperties

  return {
    id: page.id,
    title: properties['Title']['title'][0].text.content,
    slug: properties['Slug']['rich_text'][0].plain_text,
    tags: properties['Tags']['multi_select'].map((tag) => tag.name),
    createdTime: dateFormatter.format(
      new Date(properties['Created Time']['created_time'])
    ),
    lastEditedTime: dateFormatter.format(
      new Date(properties['Last Edit']['last_edited_time'])
    ),
  }
}
