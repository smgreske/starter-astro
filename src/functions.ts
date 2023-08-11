import type { CollectionEntry } from "astro:content"


export const getUniqueTags = (allPosts: CollectionEntry<'posts'>[]) => { 
  const fullTagArray: any[] = []

  allPosts.forEach( (current) => 
    {fullTagArray.push(current.data.tags)})
  const flattendedFullTagArray = fullTagArray.flat()
  
  return [...new Set(flattendedFullTagArray)]
}