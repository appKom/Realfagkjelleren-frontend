import { createClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION;

if (!projectId) throw new Error('PUBLIC_SANITY_PROJECT_ID mangler i .env');
if (!dataset) throw new Error('PUBLIC_SANITY_DATASET mangler i .env');

export const client = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion || '2025-01-01',
  useCdn: true,
});