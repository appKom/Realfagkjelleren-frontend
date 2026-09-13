import { createClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION;

if (!projectId) throw new Error('PUBLIC_SANITY_PROJECT_ID mangler i .env');
if (!dataset) throw new Error('PUBLIC_SANITY_DATASET mangler i .env');

/**
 * The raw Sanity client, for cases where you need more than a plain
 * GROQ fetch (e.g. building image URLs with @sanity/image-url later).
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion || '2025-01-01',
  useCdn: true, // fine for published content; set to false if you need to see draft edits immediately
});

/**
 * Runs a GROQ query against Sanity.
 * @param query - The GROQ query string
 * @param params - Params referenced in the query (e.g. { slug: 'bar' })
 * @returns
 */
export default async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
