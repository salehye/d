<template>
    <div class="relative">
        <!-- عملية الهدم خطوة بخطوة -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
            <div v-for="(step, index) in demolitionSteps" :key="index" class="text-center group cursor-pointer"
                @click="activeStep = index">
                <div
                    class="relative bg-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                    <!-- الرسم التوضيحي -->
                    <div class="relative h-32 mb-4">
                        <component :is="step.illustration" class="w-full h-full" />
                    </div>

                    <!-- العنوان والوصف -->
                    <h3 class="font-bold text-foreground mb-2">{{ step.title }}</h3>
                    <p class="text-sm text-muted-foreground">{{ step.description }}</p>

                    <!-- مؤشر النشاط -->
                    <div
                        class="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {{ step.step }}
                    </div>
                </div>
            </div>
        </div>

        <!-- الرسم التفصيلي -->
        <div class="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
                <div class="relative h-80">
                    <BuildingIllustration :step="activeStep" />
                </div>
                <div class="space-y-4">
                    <h3 class="text-2xl font-black text-foreground">{{ demolitionSteps[activeStep].detailedTitle }}</h3>
                    <p class="text-muted-foreground leading-relaxed">{{ demolitionSteps[activeStep].detailedDescription
                    }}</p>
                    <ul class="space-y-2">
                        <li v-for="point in demolitionSteps[activeStep].points" :key="point"
                            class="flex items-center gap-3 text-foreground">
                            <Icon name="lucide:check-circle" class="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CleanupIllustration from './illustrations/CleanupIllustration.vue';
import DemolitionIllustration from './illustrations/DemolitionIllustration.vue';
import PlanningIllustration from './illustrations/PlanningIllustration.vue';
import PreparationIllustration from './illustrations/PreparationIllustration.vue';

const activeStep = ref(0)

const demolitionSteps = [
    {
        step: '1',
        title: 'التخطيط',
        description: 'دراسة الموقع والتخطيط',
        detailedTitle: 'مرحلة التخطيط والدراسة',
        detailedDescription: 'نبدأ بدراسة شاملة للموقع وتحديد أفضل استراتيجية للهدم',
        points: [
            'تحليل هيكل المبنى',
            'تحديد مخاطر السلامة',
            'وضع خطة الهدم',
            'الحصول على التراخيص'
        ],
        illustration: markRaw(PlanningIllustration)
    },
    {
        step: '2',
        title: 'الإعداد',
        description: 'تجهيز المعدات والموقع',
        detailedTitle: 'مرحلة الإعداد والتجهيز',
        detailedDescription: 'نقوم بتجهيز الموقع والمعدات اللازمة لضمان عملية هدم آمنة',
        points: [
            'تأمين محيط الموقع',
            'تركيب معدات السلامة',
            'تجهيز المعدات الثقيلة',
            'تدريب فريق العمل'
        ],
        illustration: markRaw(PreparationIllustration)
    },
    {
        step: '3',
        title: 'الهدم',
        description: 'تنفيذ عملية الهدم',
        detailedTitle: 'مرحلة التنفيذ والهدم',
        detailedDescription: 'ننفذ عملية الهدم باستخدام أحدث التقنيات وأساليب الهدم المتحكم به',
        points: [
            'هدم متدرج ومنظم',
            'مراقبة مستمرة للهيكل',
            'إدارة المخلفات',
            'الالتزام بمعايير السلامة'
        ],
        illustration: markRaw(DemolitionIllustration)
    },
    {
        step: '4',
        title: 'التنظيف',
        description: 'ترحيل المخلفات والتنظيف',
        detailedTitle: 'مرحلة الترحيل والتنظيف',
        detailedDescription: 'نقوم بترحيل جميع المخلفات وتسليم الموقع نظيفاً وجاهزاً',
        points: [
            'فرز المواد القابلة لإعادة التدوير',
            'ترحيل المخلفات',
            'تنظيف شامل للموقع',
            'فحص نهائي وتسليم'
        ],
        illustration: markRaw(CleanupIllustration)
    }
]
</script>