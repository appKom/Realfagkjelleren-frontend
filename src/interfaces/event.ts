import type Media from "./media";

export default interface EventItem {
    id: number;                 // Strapi id: 2
    documentId?: string;        // r5gn7...
    title: string;              // "møt emma"
    date?: string;              // "2025-10-23T01:00:00.000Z"
    description?: string;       // "møt emo emma"
    slug: string;              // "event"
    coverImage?: Media | { url: string } | null;
}