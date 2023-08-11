import { z, defineCollection} from 'astro:content'

const postCollection = defineCollection({
  type:'content',
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    author: z.string(),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  })
})

export const collections = {
  'posts': postCollection,
}