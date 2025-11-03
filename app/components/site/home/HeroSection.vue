<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

// Swiper modules
const modules = [Autoplay, EffectFade, Pagination]

const heroSlides = [
    {
        id: 1,
        title: 'هدم المباني المحترف',
        description: 'خدمات هدم آمنة وفعالة باستخدام أحدث التقنيات',
        image: '/images/hero-1.jpg',
        ctaText: 'اطلب خدمة الهدم'
    },
    {
        id: 2,
        title: 'إزالة الأنقاض',
        description: 'تنظيف شامل للمواقع وإزالة الأنقاض بكفاءة',
        image: '/images/hero-2.jpg',
        ctaText: 'تعرف على الخدمات'
    }
]
</script>

<template>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <Swiper :modules="modules" :effect="'fade'" :autoplay="{
            delay: 5000,
            disableOnInteraction: false
        }" :pagination="{
        clickable: true,
        dynamicBullets: true
    }" :loop="true" class="absolute inset-0 w-full h-full">
            <SwiperSlide v-for="slide in heroSlides" :key="slide.id" class="relative">
                <div class="absolute inset-0 bg-cover bg-center" :style="`background-image: url('${slide.image}')`">
                    <div class="absolute inset-0 bg-black/50"></div>
                </div>

                <div class="relative z-10 text-center text-white container mx-auto px-4">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        {{ slide.title }}
                    </h1>
                    <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        {{ slide.description }}
                    </p>
                    <Button size="lg" class="bg-primary text-primary-foreground hover:bg-primary/90">
                        {{ slide.ctaText }}
                        <Icon name="lucide:arrow-left" class="mr-2 h-5 w-5" />
                    </Button>
                </div>
            </SwiperSlide>
        </Swiper>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div class="animate-bounce">
                <Icon name="lucide:chevron-down" class="h-8 w-8 text-white" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>