<template>
    <div>
        <!-- Hero Section -->
        <section class="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <div
                        class="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 border border-primary/20 mb-6">
                        <Icon name="lucide:settings" class="w-4 h-4" />
                        <span class="font-medium text-sm">خدمات متكاملة</span>
                    </div>

                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        خدماتنا
                        <span class="block gradient-text">المتخصصة</span>
                    </h1>

                    <p class="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        نقدم مجموعة شاملة من خدمات الهدم والبناء بأحدث التقنيات وأعلى معايير
                        <span class="text-primary font-semibold">الجودة والسلامة</span>. اكتشف خدماتنا المتكاملة التي
                        تلبي جميع احتياجاتك.
                    </p>

                    <!-- إحصائيات سريعة -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
                        <div v-for="stat in serviceStats" :key="stat.label"
                            class="text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
                            <div class="text-2xl font-bold text-primary mb-1">{{ stat.value }}</div>
                            <div class="text-sm font-medium text-foreground">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- فئات الخدمات -->
        <section class="py-16 bg-background">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">فئات الخدمات</h2>
                    <p class="text-lg text-muted-foreground">اختر من بين فئات خدماتنا المتخصصة</p>
                </div>

                <div class="flex flex-wrap justify-center gap-4 mb-16">
                    <button v-for="category in serviceCategories" :key="category.id"
                        @click="activeCategory = category.id" :class="[
                            'px-6 py-3 rounded-full border transition-all duration-300 font-medium',
                            activeCategory === category.id
                                ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                                : 'bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md'
                        ]">
                        <div class="flex items-center gap-2">
                            <component :is="category.icon" class="w-4 h-4" />
                            <span>{{ category.name }}</span>
                        </div>
                    </button>
                </div>

                <!-- قائمة الخدمات -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <NuxtLink v-for="service in filteredServices" :key="service.id" :to="`/services/${service.slug}`"
                        class="group block">
                        <div
                            class="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-strong transition-all duration-500 h-full relative overflow-hidden">
                            <!-- تأثير خلفي -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <!-- الأيقونة -->
                            <div class="relative z-10">
                                <div
                                    class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <component :is="getIconComponent(service.icon)" class="w-8 h-8 text-primary" />
                                </div>

                                <!-- العنوان والوصف -->
                                <h2
                                    class="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                    {{ service.title }}
                                </h2>

                                <p class="text-muted-foreground mb-6 leading-relaxed">
                                    {{ service.description }}
                                </p>

                                <!-- الميزات السريعة -->
                                <div class="space-y-2 mb-6">
                                    <div v-for="(feature, index) in service.features?.slice(0, 2)" :key="index"
                                        class="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Icon name="lucide:check" class="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span>{{ feature }}</span>
                                    </div>
                                    <div v-if="service.features && service.features.length > 2"
                                        class="text-xs text-primary font-medium">
                                        +{{ service.features.length - 2 }} ميزة أخرى
                                    </div>
                                </div>

                                <!-- زر التفاصيل -->
                                <div class="flex items-center justify-between">
                                    <div
                                        class="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                        <span>اعرف المزيد</span>
                                        <Icon name="lucide:arrow-left" class="w-4 h-4" />
                                    </div>

                                    <div
                                        class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <Icon name="lucide:arrow-up-left"
                                            class="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>

                <!-- حالة عدم وجود خدمات -->
                <div v-if="filteredServices.length === 0" class="text-center py-12">
                    <div class="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="lucide:search" class="w-12 h-12 text-muted-foreground" />
                    </div>
                    <h3 class="text-xl font-semibold text-foreground mb-2">لا توجد خدمات</h3>
                    <p class="text-muted-foreground">لم نتمكن من العثور على خدمات تطابق البحث</p>
                </div>
            </div>
        </section>

        <!-- قسم CTA -->
        <section class="py-20 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">لا تجد الخدمة التي تبحث عنها؟</h2>
                    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        فريقنا مستعد لتقديم حلول مخصصة تناسب احتياجاتك الخاصة. تواصل معنا للحصول على استشارة مجانية.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" class="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                            <Phone class="w-5 h-5 ml-2" />
                            اتصل بنا الآن
                        </Button>
                        <Button size="lg" variant="outline"
                            class="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                            <MessageCircle class="w-5 h-5 ml-2" />
                            اطلب استشارة
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <!-- الأسئلة الشائعة حول الخدمات -->
        <section class="py-20 bg-muted/30">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">أسئلة شائعة عن الخدمات</h2>
                        <p class="text-lg text-muted-foreground">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                        <div v-for="faq in serviceFaqs" :key="faq.id"
                            class="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                            <h3 class="text-lg font-semibold text-foreground mb-3 flex items-start gap-3">
                                <span
                                    class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span class="text-primary font-bold text-sm">؟</span>
                                </span>
                                {{ faq.question }}
                            </h3>
                            <p class="text-muted-foreground leading-relaxed">{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Building, Warehouse, Trash2, Shield, Hammer, Phone, MessageCircle } from 'lucide-vue-next';

// حالة الفئة النشطة
const activeCategory = ref('all');

// استدعاء جميع الخدمات
const { data: services } = await useAsyncData('services-list', () =>
    queryContent('services').find()
);

// إحصائيات الخدمات
const serviceStats = [
    { value: '6+', label: 'خدمة متخصصة' },
    { value: '13+', label: 'مدينة' },
    { value: '1000+', label: 'مشروع منجز' },
    { value: '99%', label: 'رضا عملاء' }
];

// فئات الخدمات
const serviceCategories = [
    { id: 'all', name: 'جميع الخدمات', icon: Hammer },
    { id: 'residential', name: 'هدم سكني', icon: Building },
    { id: 'industrial', name: 'هدم صناعي', icon: Warehouse },
    { id: 'cleaning', name: 'تنظيف مواقع', icon: Trash2 },
    { id: 'safety', name: 'سلامة ومراقبة', icon: Shield }
];

// تصفية الخدمات حسب الفئة
const filteredServices = computed(() => {
    if (!services.value) return [];

    if (activeCategory.value === 'all') {
        return services.value;
    }

    // في تطبيق حقيقي، سيكون هناك حقل category في بيانات الخدمة
    return services?.value?.filter(service => {
        const serviceId = service.id as string;
        if (activeCategory.value === 'residential') {
            return serviceId.includes('building');
        } else if (activeCategory.value === 'industrial') {
            return serviceId.includes('industrial') || serviceId.includes('structural');
        } else if (activeCategory.value === 'cleaning') {
            return serviceId.includes('waste') || serviceId.includes('clearance');
        } else if (activeCategory.value === 'safety') {
            return serviceId.includes('safety');
        }
        return true;
    });
});

// دالة لتحويل أسماء الأيقونات إلى مكونات
const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
        Building, Warehouse, Trash2, Shield, Hammer
    };
    return icons[iconName] || Building;
};

// الأسئلة الشائعة الخاصة بالخدمات
const serviceFaqs = [
    {
        id: 1,
        question: 'كم تستغرق عملية تقديم عرض السعر؟',
        answer: 'نقدم عروض الأسعار خلال 24 ساعة من استلام طلبك، ويمكن تقليل المدة في الحالات الطارئة.'
    },
    {
        id: 2,
        question: 'هل تقدمون خدمات الطوارئ؟',
        answer: 'نعم، لدينا فريق طوارئ يعمل على مدار 24/7 لمعالجة الحالات الطارئة والحرجة.'
    },
    {
        id: 3,
        question: 'ما هي مناطق الخدمة التي تغطونها؟',
        answer: 'نغطي جميع مدن المملكة العربية السعودية، مع إمكانية تقديم خدمات في دول الخليج.'
    },
    {
        id: 4,
        question: 'هل تقدمون ضمان على الخدمات؟',
        answer: 'نعم، جميع خدماتنا مغطاة بضمان يتراوح بين 6 أشهر إلى سنة حسب نوع الخدمة.'
    }
];

// SEO للصفحة
useSeoMeta({
    title: 'خدمات الهدم والبناء | شركة الهدم المتخصصة',
    description: 'اكتشف مجموعة خدمات الهدم والبناء المتكاملة. هدم مباني سكنية، صناعية، تفكيك هياكل، تنظيف مواقع، وخدمات السلامة.',
    ogTitle: 'خدمات الهدم المتخصصة - حلول متكاملة',
    ogDescription: 'مجموعة كاملة من خدمات الهدم والبناء بأعلى معايير الجودة والسلامة',
    ogImage: '/images/services/og-image.jpg',
    twitterCard: 'summary_large_image'
});

// Structured Data
useServerSeoMeta({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'خدمات الهدم والبناء',
                description: 'مجموعة متكاملة من خدمات الهدم والبناء المتخصصة',
                numberOfItems: services.value?.length || 0,
                itemListElement: services.value?.map((service, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'Service',
                        name: service.title,
                        description: service.description,
                        url: `https://demolition.com/services/${service.slug}`
                    }
                }))
            })
        }
    ]
});
</script>

<style scoped>
.gradient-text {
    background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hover-lift {
    transition: all 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
}
</style>