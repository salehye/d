<template>
    <div :class="mobile ? 'flex flex-col space-y-4' : 'flex items-center gap-6'">
        <NuxtLink v-for="link in navigationLinks" :key="link.href" :to="link.href"
            class="text-sm font-medium transition-colors hover:text-primary" :class="[
                $route.path === link.href ? 'text-primary' : 'text-foreground/80',
                mobile ? 'py-2 text-base text-right' : ''
            ]" @click="$emit('link-click')">
            {{ link.label }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
interface Props {
    mobile?: boolean
}

defineProps<Props>()
defineEmits<{
    'link-click': []
}>()

const navigationLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/projects', label: 'المشاريع' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'اتصل بنا' },
]
</script>