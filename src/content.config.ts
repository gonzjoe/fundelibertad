import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Equipo FUNDELIBERTAD'),
    image: z.string().optional(),
    category: z.string().default('Derechos Humanos'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('legal'),
    iconName: z.string().default('Scale'),
    details: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, servicios };
