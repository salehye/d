<!-- components/SiteHeader.vue -->
<template>
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200/80 transition-all duration-300"
        :class="{
            'shadow-lg': isScrolled,
            'py-4': !isScrolled,
            'py-3': isScrolled
        }">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
                <!-- الجزء الأيسر: الشعار -->
                <div class="flex items-center gap-4">
                    <NuxtLink to="/" class="flex items-center gap-3 group" @click="closeMobileMenu">
                        <!-- الشعار -->
                        <div class="relative">
                            <img src="/assets/hadm-mabanicom-Made-with-PosterMyWall.jpg" alt="هدم مباني"
                                class="h-12 w-auto transition-all duration-300 group-hover:scale-110" :class="{
                                    'h-10': isScrolled
                                }">
                            <div
                                class="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>

                        <!-- النص -->
                        <div class="hidden sm:block">
                            <div
                                class="text-lg font-black text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                                الهدم الاحترافية
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                Demolition Experts
                            </div>
                        </div>
                    </NuxtLink>
                </div>

                <!-- الجزء الأوسط: روابط التنقل (للكمبيوتر) -->
                <div class="hidden lg:flex items-center gap-1">
                    <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.path"
                        class="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                        :class="isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'"
                        @click="closeMobileMenu">
                        {{ link.name }}

                        <!-- الخط السفلي النشط -->
                        <span
                            class="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                            :class="{
                                'w-full': isActive(link.path)
                            }"></span>

                        <!-- تأثير الخلفية عند hover -->
                        <span
                            class="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </NuxtLink>
                </div>

                <!-- الجزء الأيمن: أزرار الإجراء -->
                <div class="flex items-center gap-3">
                    <!-- زر الاتصال - للجوال فقط -->
                    <a href="tel:+966501234567"
                        class="lg:hidden flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                        aria-label="اتصل بنا">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </a>

                    <!-- زر عرض السعر - للكمبيوتر -->
                    <NuxtLink to="/contact"
                        class="hidden lg:flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 h-11 rounded-xl px-6 bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-primary/90 hover:to-primary/80"
                        @click="closeMobileMenu">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        عرض سعر مجاني
                    </NuxtLink>

                    <!-- زر القائمة - للجوال -->
                    <button @click="toggleMobileMenu"
                        class="lg:hidden flex flex-col gap-1 w-10 h-10 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                        :class="{
                            'bg-gray-100': mobileMenuOpen
                        }" aria-label="تبديل القائمة">
                        <span class="w-6 h-0.5 bg-gray-700 transition-all duration-300" :class="{
                            'transform rotate-45 translate-y-1.5': mobileMenuOpen
                        }"></span>
                        <span class="w-6 h-0.5 bg-gray-700 transition-all duration-300" :class="{
                            'opacity-0': mobileMenuOpen
                        }"></span>
                        <span class="w-6 h-0.5 bg-gray-700 transition-all duration-300" :class="{
                            'transform -rotate-45 -translate-y-1.5': mobileMenuOpen
                        }"></span>
                    </button>
                </div>
            </div>

            <!-- القائمة المتنقلة -->
            <div v-if="mobileMenuOpen"
                class="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl">
                <div class="container mx-auto px-4 py-6 space-y-4">
                    <!-- روابط التنقل -->
                    <div class="space-y-3">
                        <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.path"
                            class="flex items-center gap-3 py-4 px-4 text-base font-medium transition-all duration-300 rounded-xl group"
                            :class="isActive(link.path) ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
                            @click="closeMobileMenu">
                            <span class="w-1.5 h-1.5 bg-primary rounded-full opacity-0 transition-opacity duration-300"
                                :class="{
                                    'opacity-100': isActive(link.path)
                                }"></span>
                            {{ link.name }}

                            <svg class="w-4 h-4 mr-auto text-gray-400 group-hover:text-primary transition-colors duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </NuxtLink>
                    </div>

                    <!-- أزرار الإجراء في الجوال -->
                    <div class="pt-4 border-t border-gray-200 space-y-3">
                        <!-- زر الاتصال -->
                        <a href="tel:+966501234567"
                            class="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 group"
                            @click="closeMobileMenu">
                            <svg class="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            اتصل بنا
                            <span class="text-sm font-medium text-primary">+966 50 123 4567</span>
                        </a>

                        <!-- زر الواتساب -->
                        <a href="https://wa.me/966501234567" target="_blank"
                            class="flex items-center justify-center gap-3 w-full py-4 px-6 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 group"
                            @click="closeMobileMenu">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.189-3.553-8.449" />
                            </svg>
                            تواصل على واتساب
                        </a>

                        <!-- زر عرض السعر -->
                        <NuxtLink to="/contact"
                            class="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl font-semibold hover:from-primary/90 hover:to-primary/80 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            @click="closeMobileMenu">
                            <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            احصل على عرض سعر مجاني
                        </NuxtLink>
                    </div>

                    <!-- معلومات الاتصال -->
                    <div class="pt-4 border-t border-gray-200 space-y-3">
                        <div class="text-center text-sm text-gray-500">
                            <p>متاحون 24/7 لخدمتكم</p>
                            <p class="text-xs mt-1">نخدم جميع مناطق المملكة العربية السعودية</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Overlay للقائمة المتنقلة -->
        <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-0 mt-20"
            @click="closeMobileMenu"></div>
    </nav>

    <!-- مساحة للهيدر الثابت -->
    <div class="w-full transition-all duration-300" :class="{
        'h-24': !isScrolled,
        'h-20': isScrolled
    }"></div>
</template>

<script setup lang="ts">
// الحالة التفاعلية
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// روابط التنقل
const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'المشاريع', path: '/projects' },
    { name: 'من نحن', path: '/about' },
    { name: 'اتصل بنا', path: '/contact' }
]

// التحقق من الصفحة النشطة
const route = useRoute()
const isActive = (path: string) => {
    if (path === '/') {
        return route.path === '/'
    }
    return route.path.startsWith(path)
}

// إدارة القائمة المتنقلة
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    // منع التمرير عند فتح القائمة
    if (mobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
    document.body.style.overflow = 'auto'
}

// تتبع التمرير لتغيير شكل الهيدر
onMounted(() => {
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 50
    }

    window.addEventListener('scroll', handleScroll)

    // التنظيف
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        document.body.style.overflow = 'auto'
    })
})

// إغلاق القائمة عند تغيير المسار
watch(() => route.path, () => {
    closeMobileMenu()
})

// إغلاق القائمة عند الضغط على زر Escape
onMounted(() => {
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeMobileMenu()
        }
    }

    document.addEventListener('keydown', handleEscape)
    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape)
    })
})
</script>

<style scoped>
/* تحسينات للرسوم المتحركة */
.router-link-active {
    position: relative;
}

/* تأثيرات للروابط النشطة */
.router-link-active::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -8px;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: #3b82f6;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: translateY(-50%) scale(1);
    }

    50% {
        opacity: 0.5;
        transform: translateY(-50%) scale(1.2);
    }
}

/* تحسينات للعرض على مختلف الشاشات */
@media (max-width: 1024px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

/* تحسينات للأجهزة التي تستخدم اللمس */
@media (hover: none) {
    .group:hover .group-hover\:scale-110 {
        transform: scale(1);
    }
}
</style>