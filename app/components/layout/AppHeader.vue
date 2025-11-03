<template>
    <header class="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span class="text-lg font-black text-primary-foreground">ه</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-bold leading-none">هدم مباني</span>
                        <span class="text-xs text-muted-foreground leading-none">منذ 2011</span>
                    </div>
                </NuxtLink>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center gap-8">
                    <NuxtLink v-for="link in navigationLinks" :key="link.href" :to="link.href"
                        class="text-sm font-medium transition-colors hover:text-primary relative py-2"
                        :class="[$route.path === link.href ? 'text-primary' : 'text-foreground/80']">
                        {{ link.label }}
                        <div v-if="$route.path === link.href"
                            class="absolute bottom-0 right-0 w-full h-0.5 bg-primary rounded-full" />
                    </NuxtLink>

                    <Button as-child class="shadow-sm hover:shadow-md transition-shadow">
                        <NuxtLink to="/contact" class="flex items-center gap-2">
                            <Icon name="lucide:phone" class="w-4 h-4" />
                            احصل على عرض سعر
                        </NuxtLink>
                    </Button>
                </nav>

                <!-- Mobile Menu -->
                <Sheet v-model:open="isMobileMenuOpen">
                    <SheetTrigger as-child>
                        <Button variant="ghost" size="icon" class="md:hidden">
                            <Icon name="lucide:menu" class="w-5 h-5" />
                            <span class="sr-only">فتح القائمة</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" class="w-[300px] sm:w-[400px]">
                        <SheetHeader class="text-right">
                            <SheetTitle class="flex items-center gap-3 justify-end">
                                <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-sm font-bold text-primary-foreground">ه</span>
                                </div>
                                هدم مباني
                            </SheetTitle>
                        </SheetHeader>

                        <div class="mt-8 space-y-4">
                            <NuxtLink v-for="link in navigationLinks" :key="link.href" :to="link.href"
                                class="flex items-center justify-between py-3 text-lg font-medium transition-colors hover:text-primary border-b border-border/50"
                                :class="[$route.path === link.href ? 'text-primary' : 'text-foreground']"
                                @click="isMobileMenuOpen = false">
                                {{ link.label }}
                                <Icon name="lucide:chevron-left" class="w-4 h-4 text-muted-foreground" />
                            </NuxtLink>

                            <Button as-child class="w-full mt-6 shadow-sm">
                                <NuxtLink to="/contact" @click="isMobileMenuOpen = false">
                                    احصل على عرض سعر
                                </NuxtLink>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const navigationLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/projects', label: 'المشاريع' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'اتصل بنا' },
]
</script>