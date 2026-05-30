import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    abstract: z.string(),
    url: z.string().url().optional(),
    status: z.enum(['published', 'preprint', 'draft']).default('published'),
  }),
});

export const collections = { publications };
