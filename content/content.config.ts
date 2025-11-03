// content/content.config.ts
import { defineCollection, z } from 'astro:content'

// تعريف أنواع مخصصة
const authorSchema = z.object({
    name: z.string(),
    avatar: z.string().url(),
    bio: z.string(),
    social: z.object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional()
    })
})

const postSchema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().max(200),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).max(10),
    author: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.object({
        src: z.string(),
        alt: z.string()
    }).optional()
})

export const collections = {
    // المدونات
    blog: defineCollection({
        type: 'content',
        schema: postSchema
    }),

    // المؤلفون
    authors: defineCollection({
        type: 'data',
        schema: authorSchema
    }),

    // المشاريع
    projects: defineCollection({
        type: 'content',
        schema: z.object({
            name: z.string(),
            description: z.string(),
            category: z.string(),
            technologies: z.array(z.string()),
            demoUrl: z.string().url().optional(),
            repoUrl: z.string().url().optional(),
            status: z.enum(['active', 'completed', 'paused']),
            featured: z.boolean().default(false)
        })
    })
}