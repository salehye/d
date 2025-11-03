<template>
    <div v-if="notFound" class="text-center py-16">
        <p class="text-xl text-gray-600">المقال غير موجود</p>
        <NuxtLink to="/blog" class="text-blue-600 hover:underline mt-4 inline-block">
            العودة إلى المدونة
        </NuxtLink>
    </div>

    <article v-else-if="article" class="container mx-auto px-4 py-8 max-w-4xl pt-40">
        <header class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ article.title }}</h1>
            <div class="flex items-center text-gray-600 mb-4 flex-wrap gap-2">
                <span>{{ formatDate(article.date) }}</span>
                <span>•</span>
                <span>{{ article?.author }}</span>
                <span>•</span>
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {{ article?.category }}
                </span>
            </div>
            <img v-if="article.image" :src="article.image" :alt="article.title"
                class="w-full h-64 object-cover rounded-lg mb-6" />
        </header>

        <div class="prose prose-lg max-w-none">
            <ContentRenderer :value="article" />
        </div>

        <footer class="mt-12 pt-8 border-t">
            <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in article?.tags" :key="tag"
                    class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {{ tag }}
                </span>
            </div>
            <RelatedArticles :category="article.category" :current-slug="article.slug" />
        </footer>
    </article>

    <div v-else class="text-center py-16">
        <p class="text-xl text-gray-600">جارٍ التحميل...</p>
    </div>


    {{ post }}

</template>

<script setup lang="ts">
import type { ParsedContentv2 } from '@nuxt/content'

const route = useRoute()
const pageId = computed(() => 'blog-' + route.path)
const { data: post } = await useAsyncData('authors', () => {
    return queryCollection('content')
        // .path('./service')
        .all()
})
// import { } from '@nuxt/content'
// import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

// تعريف نوع المقال (يمكنك توسيعه حسب حاجتك)
interface Article extends ParsedContentv2 {
    title: string
    description?: string
    date: string
    author: string
    category: string
    image?: string
    tags?: string[]
    slug: string
}

// const route = useRoute()

const notFound = ref<boolean>(false)
const article = ref<Article | null>(null)

const slug = useRoute().params.slug
// const { data: post } = await useAsyncData(`article-${slug}`, () => {
//     return queryCollection('blog').path(`/articles/${slug}`).first()
// })
// جلب المقال
const { data } = await useAsyncData(`article-${slug}`, () => {
    return queryCollection('content')
        .path(route.path)
        .first()
})
// const { data: post } = await useAsyncData(pageId, () => {
//     return queryCollection('content')
//         .path(route.path)
//         .first()
// })

// const { data: posts } = await useAsyncData('articles', () => queryCollection('blog').all())
if (!data.value) {
    notFound.value = true
} else {
    article.value = data.value

    const { title, description = '', image, date, author, category } = article.value

    // SEO Meta
    useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogImage: image,
        twitterCard: 'summary_large_image'
    })

    // Structured Data (Schema.org)
    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    '@context': 'https://schema.org', // ملاحظة: بدون مسافات زائدة
                    '@type': 'Article',
                    headline: title,
                    description: description,
                    image: image,
                    datePublished: date,
                    author: {
                        '@type': 'Person',
                        name: author
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'مدونتي'
                    }
                } satisfies ArticleSchema)
            }
        ]
    })
}

// دالة تنسيق التاريخ
const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('ar-EG')
}

// أنواع Schema.org (Facultative but recommended)
interface ArticleSchema {
    '@context': string
    '@type': 'Article'
    headline: string
    description: string
    image?: string
    datePublished: string
    author: {
        '@type': 'Person'
        name: string
    }
    publisher: {
        '@type': 'Organization'
        name: string
    }
}
</script>