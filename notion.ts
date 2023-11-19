import { Client } from '@notionhq/client'
import invariant from 'invariant'

invariant(process.env.NOTION_TOKEN, 'NOTION_TOKEN is required')

export const notion = new Client({ auth: process.env.NOTION_TOKEN })

export default notion
