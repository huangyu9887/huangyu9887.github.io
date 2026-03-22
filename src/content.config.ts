import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().transform(d => new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())),
  updatedDate: z.coerce.date().transform(d => new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())).optional(),
});

const essays = defineCollection({
  loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

const works = defineCollection({
  loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

const design = defineCollection({
  loader: glob({ base: './src/content/design', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

const comm = defineCollection({
  loader: glob({ base: './src/content/comm', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

const daily = defineCollection({
  loader: glob({ base: './src/content/daily', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

export const collections = { essays, works, design, comm, daily };
