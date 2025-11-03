<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
            <!-- خلفية عميقة -->
            <div class="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-muted/20"></div>

            <!-- عناصر زخرفية غير مزعجة -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/5 rounded-full blur-3xl"></div>
            </div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <!-- المحتوى النصي -->
                    <div class="space-y-8 text-center lg:text-right">
                        <div
                            class="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 border border-primary/20 backdrop-blur-sm">
                            <Award class="w-4 h-4" />
                            <span class="font-medium text-sm">الشركة الرائدة منذ 2011</span>
                        </div>

                        <div class="space-y-5">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                                <span class="block">هدم المباني</span>
                                <span
                                    class="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    باحترافية وأمان
                                </span>
                            </h1>
                            <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mr-0">
                                نقدم حلولاً متكاملة لهدم المباني وترحيل المخلفات بأعلى معايير
                                <span class="text-primary font-semibold">السلامة والجودة</span>
                            </p>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                            <Button size="lg"
                                class="h-14 px-8 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/30 transition-all duration-300">
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

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-2xl mx-auto lg:mr-0">
                            <div v-for="stat in previewStats" :key="stat.label"
                                class="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
                                <div class="text-2xl font-bold text-primary mb-1">{{ stat.value }}</div>
                                <div class="text-sm font-medium text-foreground">{{ stat.label }}</div>
                                <div class="text-xs text-muted-foreground mt-1">{{ stat.subtitle }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- البطاقة البصرية -->
                    <div class="relative">
                        <div
                            class="relative bg-card rounded-2xl p-6 border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div class="grid grid-cols-2 gap-5">
                                <div v-for="(service, index) in featuredServices" :key="index"
                                    class="bg-muted/30 rounded-xl p-5 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
                                    <div
                                        class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                        <component :is="service.icon" class="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 class="font-semibold text-foreground mb-1 text-sm">{{ service.title }}</h3>
                                    <p class="text-xs text-muted-foreground">{{ service.description }}</p>
                                </div>
                            </div>
                            <div
                                class="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                                <Icon name="lucide:shield-check" class="w-6 h-6 text-primary-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- سهم التمرير -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
                <div class="text-xs text-muted-foreground mb-2">اكتشف المزيد</div>
                <div class="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center">
                    <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>

        <!-- خدماتنا -->
        <ServicesSection />

        <!-- مشاريعنا -->
        <section id="projects" class="py-24 bg-background animate-on-scroll">
            <div class="container mx-auto px-4">
                <div class="text-center mb-20 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-4">أحدث مشاريعنا</h2>
                    <p class="text-lg text-muted-foreground">
                        شاهد مجموعة من أبرز مشاريع الهدم والتنظيف التي قمنا بتنفيذها
                    </p>
                </div>

                <Swiper :modules="[EffectCoverflow, Navigation]" :effect="'coverflow'" :grabCursor="true"
                    :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
                        rotate: 40,
                        stretch: 0,
                        depth: 120,
                        modifier: 1,
                        slideShadows: true,
                    }" :navigation="true" class="projects-swiper">
                    <SwiperSlide v-for="project in projects" :key="project.id" class="max-w-sm">
                        <div
                            class="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300">
                            <div
                                class="h-48 bg-gradient-to-br from-primary/10 to-muted/20 flex items-center justify-center">
                                <Icon name="lucide:building" class="w-16 h-16 text-primary/30" />
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-foreground mb-2">{{ project.title }}</h3>
                                <p class="text-muted-foreground mb-4">{{ project.description }}</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-primary font-semibold">{{ project.duration }}</span>
                                    <span class="text-sm text-muted-foreground">{{ project.location }}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <!-- لماذا نحن -->
        <section id="why-us" class="py-24 bg-muted/20 animate-on-scroll">
            <div class="container mx-auto px-4">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-8">لماذا تختار شركتنا؟</h2>
                        <p class="text-lg text-muted-foreground mb-10">
                            نحن نتميز بتقديم خدمات الهدم والبناء بأعلى معايير الجودة والسلامة
                        </p>
                        <div class="space-y-6">
                            <div v-for="feature in whyUsFeatures" :key="feature.id"
                                class="flex items-start gap-5 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                                <div
                                    class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <component :is="feature.icon" class="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h3 class="font-bold text-foreground mb-2">{{ feature.title }}</h3>
                                    <p class="text-muted-foreground text-sm">{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="bg-card rounded-2xl p-8 border border-border shadow-xl">
                            <div class="text-center">
                                <div
                                    class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Icon name="lucide:award" class="w-10 h-10 text-primary" />
                                </div>
                                <h3 class="text-2xl font-bold text-foreground mb-4">جائزة التميز</h3>
                                <p class="text-muted-foreground mb-6">
                                    حاصلون على جائزة التميز في خدمات الهدم والبناء للعام 2024
                                </p>
                                <Button class="bg-primary text-primary-foreground hover:bg-primary/90">
                                    شهاداتنا ومعتمداتنا
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- أنواع الهدم -->
        <section id="demolition-types" class="py-24 bg-background animate-on-scroll">
            <div class="container mx-auto px-4">
                <div class="text-center mb-20 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-4">أنواع الهدم</h2>
                    <p class="text-lg text-muted-foreground">
                        نقدم جميع أنواع عمليات الهدم المناسبة لمختلف المباني والمنشآت
                    </p>
                </div>

                <Swiper :modules="[Pagination, Autoplay]" :pagination="{ clickable: true }"
                    :autoplay="{ delay: 3500, disableOnInteraction: false }" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 }
                    }" class="types-swiper">
                    <SwiperSlide v-for="type in demolitionTypes" :key="type.id">
                        <div
                            class="bg-card rounded-2xl p-7 border border-border hover:shadow-xl transition-all duration-300 h-full text-center">
                            <div
                                class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <component :is="type.icon" class="w-10 h-10 text-primary" />
                            </div>
                            <h3 class="text-xl font-bold text-foreground mb-3">{{ type.title }}</h3>
                            <p class="text-muted-foreground mb-4">{{ type.description }}</p>
                            <div class="text-primary font-semibold text-sm">{{ type.suitable }}</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <!-- فريق العمل -->
        <section id="team" class="py-24 bg-muted/20 animate-on-scroll">
            <div class="container mx-auto px-4">
                <div class="text-center mb-20 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-4">فريقنا المتخصص</h2>
                    <p class="text-lg text-muted-foreground">
                        فريق من المهندسين والفنيين المتخصصين في مجال الهدم والبناء
                    </p>
                </div>

                <Swiper :modules="[Navigation]" :navigation="true" :breakpoints="{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }
                }" class="team-swiper">
                    <SwiperSlide v-for="member in teamMembers" :key="member.id">
                        <div
                            class="bg-card rounded-2xl p-7 border border-border hover:shadow-xl transition-all duration-300 text-center">
                            <div
                                class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                                <Icon name="lucide:user" class="w-12 h-12 text-primary/60" />
                            </div>
                            <h3 class="text-lg font-bold text-foreground mb-2">{{ member.name }}</h3>
                            <p class="text-primary font-semibold mb-3">{{ member.position }}</p>
                            <p class="text-sm text-muted-foreground mb-4">{{ member.description }}</p>
                            <div class="flex flex-wrap justify-center gap-2">
                                <span v-for="skill in member.skills" :key="skill"
                                    class="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <!-- الأسئلة الشائعة -->
        <section id="faq" class="py-24 bg-background animate-on-scroll">
            <div class="container mx-auto px-4">
                <div class="text-center mb-20 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-4">الأسئلة الشائعة</h2>
                    <p class="text-lg text-muted-foreground">
                        أجوبة على أكثر الأسئلة شيوعاً حول خدمات الهدم والبناء
                    </p>
                </div>

                <div class="max-w-4xl mx-auto space-y-5">
                    <div v-for="faq in faqs" :key="faq.id"
                        class="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors">
                        <h3 class="text-lg font-bold text-foreground mb-3">{{ faq.question }}</h3>
                        <p class="text-muted-foreground leading-relaxed">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- اتصل بنا -->
        <section id="contact"
            class="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground animate-on-scroll">
            <div class="container mx-auto px-4">
                <div class="text-center mb-20 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4">جاهزون لبدء مشروعك؟</h2>
                    <p class="text-lg opacity-95">
                        تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div v-for="contact in contactMethods" :key="contact.id"
                        class="text-center p-7 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                        <div
                            class="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <component :is="contact.icon" class="w-7 h-7 text-primary-foreground" />
                        </div>
                        <h3 class="font-bold mb-2">{{ contact.title }}</h3>
                        <p class="opacity-95">{{ contact.value }}</p>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <Button size="lg"
                        class="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
                        <Phone class="w-5 h-5 ml-2" />
                        اتصل بنا الآن
                    </Button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import {
    Award,
    Building,
    Calculator,
    File,
    PlayCircle,
    Trash2,
    Warehouse,
    Clock,
    Users,
    Shield,
    Phone,
    Mail,
    MapPin,
    Check
} from 'lucide-vue-next';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { onMounted } from 'vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import ServicesSection from '~/components/sections/ServicesSection.vue';

// --- Data ---
const previewStats = [
    { value: '13+', label: 'مدينة', subtitle: 'خدماتنا' },
    { value: '1000+', label: 'مشروع', subtitle: 'منجز' },
    { value: '99%', label: 'رضا عملاء', subtitle: 'مضمون' },
    { value: '24/7', label: 'دعم فني', subtitle: 'متاح' }
];

const featuredServices = [
    { icon: Building, title: 'هدم المباني', description: 'سكنية وتجارية وصناعية' },
    { icon: Trash2, title: 'ترحيل المخلفات', description: 'وتنظيف شامل للمواقع' },
    { icon: Warehouse, title: 'فك الهناجر', description: 'والمستودعات المعدنية' },
    { icon: File, title: 'تراخيص الهدم', description: 'مجاناً مع الخدمة' }
];

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

const projects = [
    { id: 1, title: 'هدم مجمع سكني', description: 'هدم مجمع سكني مكون من 5 طوابق في منطقة الرياض', duration: '15 يوم', location: 'الرياض' },
    { id: 2, title: 'تفكيك مصنع', description: 'تفكيك مصنع قديم وإعادة تدوير المواد', duration: '30 يوم', location: 'جدة' },
    { id: 3, title: 'تنظيف موقع بناء', description: 'تنظيف شامل لموقع بناء بعد الانتهاء من المشروع', duration: '7 أيام', location: 'الدمام' },
    { id: 4, title: 'هدم فيلا فاخرة', description: 'هدم فيلا قديمة وإعداد الموقع للبناء الجديد', duration: '10 أيام', location: 'الرياض' }
];

const whyUsFeatures = [
    { id: 1, icon: Clock, title: 'سرعة التنفيذ', description: 'ننهي المشاريع في الوقت المحدد وبكفاءة عالية' },
    { id: 2, icon: Users, title: 'فريق متخصص', description: 'فريق من المهندسين والفنيين ذوي الخبرة الطويلة' },
    { id: 3, icon: Shield, title: 'السلامة أولاً', description: 'نلتزم بأعلى معايير السلامة في جميع مشاريعنا' },
    { id: 4, icon: Award, title: 'جودة عالية', description: 'نقدم خدمات بجودة عالية تنافس أفضل الشركات' }
];

const demolitionTypes = [
    { id: 1, icon: Building, title: 'الهدم الكلي', description: 'الهدم الشامل للمباني والمنشآت', suitable: 'للمباني القديمة' },
    { id: 2, icon: Warehouse, title: 'الهدم الجزئي', description: 'هدم أجزاء محددة من المبنى', suitable: 'للتجديدات' },
    { id: 3, icon: Trash2, title: 'الهدم الانتقائي', description: 'هدم انتقائي مع إعادة تدوير المواد', suitable: 'للصديقة للبيئة' },
    { id: 4, icon: Shield, title: 'الهدم الآمن', description: 'هدم مع الحفاظ على المباني المجاورة', suitable: 'للأماكن المزدحمة' }
];

const teamMembers = [
    {
        id: 1,
        name: 'محمد أحمد',
        position: 'مدير المشاريع',
        description: 'خبرة 15 سنة في إدارة مشاريع الهدم',
        skills: ['إدارة المشاريع', 'تخطيط الهدم', 'السلامة']
    },
    {
        id: 2,
        name: 'خالد محمد',
        position: 'مهندس مدني',
        description: 'متخصص في هندسة الهدم والبناء',
        skills: ['هندسة الهدم', 'التصميم', 'الجودة']
    },
    {
        id: 3,
        name: 'أحمد علي',
        position: 'مشرف موقع',
        description: 'مشرف على تنفيذ عمليات الهدم',
        skills: ['الإشراف', 'التنفيذ', 'المراقبة']
    },
    {
        id: 4,
        name: 'سعيد حسن',
        position: 'فني هدم',
        description: 'فني متخصص في عمليات الهدم',
        skills: ['التشغيل', 'الصيانة', 'السلامة']
    }
];

const faqs = [
    {
        id: 1,
        question: 'كم تستغرق عملية الهدم لمبنى سكني؟',
        answer: 'تتراوح مدة الهدم بين 7 إلى 30 يوم حسب حجم المبنى وتعقيد العملية.'
    },
    {
        id: 2,
        question: 'هل تحتاجون إلى تراخيص للهدم؟',
        answer: 'نعم، نحن نقوم باستخراج جميع التراخيص اللازمة مجاناً مع الخدمة.'
    },
    {
        id: 3,
        question: 'كيف تتأكدون من سلامة الجيران؟',
        answer: 'نستخدم أحدث التقنيات ونتخذ جميع إجراءات السلامة لحماية المباني المجاورة.'
    },
    {
        id: 4,
        question: 'ماذا عن المخلفات والأنقاض؟',
        answer: 'نقوم بإزالة جميع المخلفات وتنظيف الموقع بالكامل بعد الانتهاء من الهدم.'
    }
];

const contactMethods = [
    { id: 1, icon: Phone, title: 'الهاتف', value: '+966 50 123 4567' },
    { id: 2, icon: Mail, title: 'البريد الإلكتروني', value: 'info@demolition.com' },
    { id: 3, icon: MapPin, title: 'العنوان', value: 'الرياض، المملكة العربية السعودية' }
];

const swiperBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 40 }
};

// --- Scroll Animation ---
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});
</script>

<style scoped>
/* Scroll animations */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-up {
    animation: fadeUp 0.6s ease-out forwards;
    opacity: 0;
}

/* Bounce animation for scroll indicator */
.animate-bounce {
    animation: bounce 2s infinite;
}

.animate-bounce-slow {
    animation: bounce 3s infinite ease-in-out;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

/* Swiper Custom */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    color: hsl(var(--primary));
    background: hsl(var(--background));
    border-radius: 50%;
    width: 44px;
    height: 44px;
    border: 1px solid hsl(var(--border));
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
}

:deep(.swiper-pagination-bullet-active) {
    background: hsl(var(--primary));
}

/* Responsive */
@media (max-width: 768px) {
    .text-4xl {
        font-size: 2.25rem;
    }

    .text-5xl {
        font-size: 2.75rem;
    }

    .text-6xl {
        font-size: 3.25rem;
    }
}
</style>