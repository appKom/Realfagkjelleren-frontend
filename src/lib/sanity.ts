import { client } from './client';

/**
 * Runs a GROQ query against Sanity.
 * @param query - The GROQ query string
 * @param params - Params referenced in the query (e.g. { slug: 'bar' })
 */
export default async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.fetch<T>(query, params);
}