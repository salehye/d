<template>
    <section id="services" class="py-24 bg-muted/20 animate-on-scroll">
        <div class="container mx-auto px-4">
            <div class="text-center mb-20 max-w-3xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-4">خدماتنا المتكاملة</h2>
                <p class="text-lg text-muted-foreground">
                    نقدم مجموعة شاملة من خدمات الهدم والبناء بأحدث التقنيات
                </p>
            </div>

            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :breakpoints="swiperBreakpoints" class="services-swiper">
                <SwiperSlide v-for="service in detailedServices" :key="service.id">
                    <div
                        class="bg-card rounded-2xl p-7 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                            <component :is="service.icon" class="w-7 h-7 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-3">{{ service.title }}</h3>
                        <p class="text-muted-foreground mb-5 flex-grow">{{ service.description }}</p>
                        <ul class="space-y-2">
                            <li v-for="feature in service.features" :key="feature"
                                class="flex items-start gap-2 text-sm text-muted-foreground">
                                <Icon name="lucide:check" class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { onMounted } from 'vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Building, Shield, Trash2, Warehouse } from 'lucide-vue-next';
interface Service {
    id: number
    title: string
    description: string
    icon: string
    features: string[]
}

const services: Service[] = [
    {
        id: 1,
        title: 'هدم المباني السكنية والتجارية',
        description: 'خدمة هدم متكاملة تشمل جميع أنواع المباني السكنية والتجارية بأحدث المعدات.',
        icon: 'lucide:building',
        features: [
            'هدم المباني السكنية بأنواعها',
            'هدم المباني التجارية والمنشآت',
            'استخدام أحدث المعدات والآلات',
            'مراعاة أعلى معايير السلامة'
        ]
    },
    {
        id: 2,
        title: 'ترحيل المخلفات والأنقاض',
        description: 'خدمة متكاملة لترحيل المخلفات والأنقاض مع الالتزام بالمعايير البيئية.',
        icon: 'lucide:trash2',
        features: [
            'ترحيل جميع أنواع المخلفات',
            'التخلص البيئي الآمن',
            'تنظيف شامل للموقع',
            'شهادات التخلص الآمن'
        ]
    },
    {
        id: 3,
        title: 'شراء وفك الهناجر',
        description: 'خدمات متخصصة في شراء وفك وتركيب الهناجر والمستودعات المعدنية.',
        icon: 'lucide:hammer',
        features: [
            'شراء الهناجر المستعملة',
            'فك وتركيب الهناجر',
            'صيانة وتجهيز الهناجر',
            'نقل وتركيب في مواقع جديدة'
        ]
    },
    {
        id: 4,
        title: 'الإجراءات القانونية والتراخيص',
        description: 'نوفر جميع الخدمات الإدارية والقانونية المتعلقة بأعمال الهدم والترحيل.',
        icon: 'lucide:file-check',
        features: [
            'إصدار رخص الهدم مجاناً',
            'متابعة الإجراءات الحكومية',
            'توفير المستندات المطلوبة',
            'استشارات قانونية مجانية'
        ]
    }
]

const detailedServices = [
    {
        id: 1,
        icon: Building,
        title: 'هدم المباني السكنية',
        description: 'هدم شامل للمباني السكنية بجميع أنواعها',
        features: ['هدم آمن ومنظم', 'إزالة الأنقاض', 'تنظيف الموقع', 'تراخيص مجانية']
    },
    {
        id: 2,
        icon: Warehouse,
        title: 'هدم المنشآت الصناعية',
        description: 'هدم المصانع والمستودعات والمنشآت الصناعية',
        features: ['معدات متخصصة', 'فريق مدرب', 'سلامة عالية', 'تخطيط دقيق']
    },
    {
        id: 3,
        icon: Trash2,
        title: 'إزالة المخلفات',
        description: 'ترحيل وتنظيف المخلفات بأنواعها',
        features: ['شاحنات متخصصة', 'تدوير المخلفات', 'بيئة نظيفة', 'أسعار مناسبة']
    },
    {
        id: 4,
        icon: Shield,
        title: 'السلامة والمتابعة',
        description: 'مراقبة ومتابعة مشاريع الهدم',
        features: ['مراقبة مستمرة', 'تقارير دورية', 'التزام بالجودة', 'مشرفون متخصصون']
    }
];

</script>