import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";


const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/projects'}),
    schema: () => z.object({
        name: z.string(),
        cover: z.string().optional(),
        description: z.string().default("No description set."),
        url: z.string().default("#")
    })
})


export const collections = { projects };