// sanityImageUrl.ts
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { client } from './client' // see example client config'

// Create an image URL builder using the client
const builder = createImageUrlBuilder(client)

// Export a function that can be used to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}