<template>
    <section class="relative min-h-screen flex items-center justify-center bg-background">
        <!-- خلفية بسيطة -->
        <div class="absolute inset-0 bg-gradient-hero"></div>

        <!-- نقاط خلفية خفيفة -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full opacity-40"></div>
            <div class="absolute bottom-20 right-20 w-80 h-80 bg-muted rounded-full opacity-30"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- المحتوى النصي -->
                <div class="space-y-8 text-center lg:text-right animate-fade-in">
                    <!-- شارة -->
                    <div
                        class="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 border border-primary/20">
                        <Award class="w-4 h-4" />
                        <span class="font-medium text-sm">الشركة الرائدة منذ 2011</span>
                    </div>

                    <!-- العنوان الرئيسي -->
                    <div class="space-y-4">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            <span class="block">هدم المباني</span>
                            <span class="block gradient-text">باحترافية وأمان</span>
                        </h1>

                        <!-- الوصف -->
                        <p class="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mr-0">
                            نقدم حلولاً متكاملة لهدم المباني وترحيل المخلفات
                            بأعلى معايير <span class="text-primary font-semibold">السلامة والجودة</span>
                        </p>
                    </div>

                    <!-- أزرار التحويل -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                        <Button size="lg"
                            class="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                            <NuxtLink to="/contact" class="flex items-center gap-2">
                                <Calculator class="w-5 h-5" />
                                <span>اطلب عرض سعر</span>
                            </NuxtLink>
                        </Button>

                        <Button variant="outline" size="lg"
                            class="h-14 px-8 text-base font-semibold border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                            <NuxtLink to="/services" class="flex items-center gap-2">
                                <PlayCircle class="w-5 h-5" />
                                <span>شاهد أعمالنا</span>
                            </NuxtLink>
                        </Button>
                    </div>

                    <!-- إحصائيات -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-xl mx-auto lg:mr-0">
                        <div v-for="stat in previewStats" :key="stat.label"
                            class="text-center p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                            <div class="text-2xl font-bold text-primary mb-1">{{ stat.value }}</div>
                            <div class="text-sm font-medium text-foreground">{{ stat.label }}</div>
                            <div class="text-xs text-muted-foreground mt-1">{{ stat.subtitle }}</div>
                        </div>
                    </div>
                </div>

                <!-- الشريط البصري -->
                <div class="relative animate-scale-in">
                    <!-- البطاقة الرئيسية -->
                    <div class="relative bg-card rounded-2xl p-6 border border-border shadow-soft">
                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="(service, index) in featuredServices" :key="index"
                                class="bg-muted/50 rounded-xl p-4 border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors">
                                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                    <component :is="service.icon" class="w-6 h-6 text-primary" />
                                </div>
                                <h3 class="font-semibold text-foreground mb-2 text-sm">{{ service.title }}</h3>
                                <p class="text-xs text-muted-foreground">{{ service.description }}</p>
                            </div>
                        </div>

                        <!-- عناصر مميزة -->
                        <div
                            class="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-medium">
                            <Icon name="lucide:shield-check" class="w-6 h-6 text-primary-foreground" />
                        </div>
                    </div>

                    <!-- بطاقات إضافية -->
                    <div class="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-soft border border-border">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                                <Icon name="lucide:clock" class="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                                <div class="font-semibold text-foreground text-sm">سرعة التنفيذ</div>
                                <div class="text-xs text-muted-foreground">أقل من 48 ساعة</div>
                            </div>
                        </div>
                    </div>

                    <div class="absolute -top-4 -right-4 bg-card rounded-xl p-3 shadow-soft border border-border">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <Icon name="lucide:users" class="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <div class="font-semibold text-foreground text-sm">فريق متخصص</div>
                                <div class="text-xs text-muted-foreground">+50 متخصص</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- سهم التمرير -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div class="flex flex-col items-center gap-2">
                <div class="text-xs text-muted-foreground">اكتشف المزيد</div>
                <div class="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Award, Building, Calculator, File, PlayCircle, Trash2, Warehouse, WarehouseIcon } from 'lucide-vue-next';

const previewStats = [
    { value: '13+', label: 'مدينة', subtitle: 'خدماتنا' },
    { value: '1000+', label: 'مشروع', subtitle: 'منجز' },
    { value: '99%', label: 'رضا عملاء', subtitle: 'مضمون' },
    { value: '24/7', label: 'دعم فني', subtitle: 'متاح' }
]

const featuredServices = [
    {
        icon: Building,
        title: 'هدم المباني',
        description: 'سكنية وتجارية وصناعية'
    },
    {
        icon: Trash2,
        title: 'ترحيل المخلفات',
        description: 'وتنظيف شامل للمواقع'
    },
    {
        icon: WarehouseIcon,
        title: 'فك الهناجر',
        description: 'والمستودعات المعدنية'
    },
    {
        icon: File,
        title: 'تراخيص الهدم',
        description: 'مجاناً مع الخدمة'
    }
]
</script>

<style scoped>
/* استخدام الأنيميشن المحددة في النظام */
.animate-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* تحسينات للشاشات الصغيرة */
@media (max-width: 768px) {
    .text-4xl {
        font-size: 2.5rem;
    }

    .text-5xl {
        font-size: 3rem;
    }

    .text-6xl {
        font-size: 3.5rem;
    }
}
</style>