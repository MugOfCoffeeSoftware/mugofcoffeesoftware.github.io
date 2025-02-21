import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";


const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/projects'}),
    schema: ({ image }) => z.object({
        name: z.string(),
        cover: image().optional(),
        description: z.string().default("No description set.")
    })
})


export const collections = { projects };