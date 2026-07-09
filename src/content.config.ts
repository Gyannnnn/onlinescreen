import { defineCollection, z } from 'astro:content';
import { tools } from './data/tools';

const toolsCollection = defineCollection({
  loader: () =>
    tools.map((tool) => ({
      id: tool.id,
      name: tool.name,
      slug: tool.slug,
      category: tool.category,
      summary: tool.summary,
    })),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  tools: toolsCollection,
};
