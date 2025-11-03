<!-- components/AdminSidebar.vue -->
<template>
    <!-- overlay للجوال -->
    <div v-if="isOpen" class="fixed inset-0 flex z-40 lg:hidden" @click="$emit('close')">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
    </div>

    <!-- الشريط الجانبي -->
    <div :class="[
        'fixed inset-y-0 left-0 flex flex-col z-50 bg-gray-800 text-white w-64 transform transition duration-300 ease-in-out lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
        <!-- Logo -->
        <div class="flex items-center justify-between h-16 px-4 bg-gray-900">
            <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold">C</span>
                </div>
                <span class="ml-3 text-lg font-semibold">لوحة التحكم</span>
            </div>
            <button @click="$emit('close')" class="lg:hidden text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- القائمة -->
        <nav class="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            <!-- الرئيسية -->
            <NuxtLink to="/admin"
                class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                :class="{ 'bg-gray-700 text-white': $route.path === '/admin' }">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                الرئيسية
            </NuxtLink>

            <!-- المحتوى -->
            <div class="pt-4">
                <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">المحتوى</p>
                <div class="mt-2 space-y-1">
                    <NuxtLink to="/admin/articles"
                        class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        :class="{ 'bg-gray-700 text-white': $route.path.includes('/admin/articles') }">
                        📝 المقالات
                    </NuxtLink>
                    <NuxtLink to="/admin/pages"
                        class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        :class="{ 'bg-gray-700 text-white': $route.path.includes('/admin/pages') }">
                        📄 الصفحات
                    </NuxtLink>
                    <NuxtLink to="/admin/services"
                        class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        :class="{ 'bg-gray-700 text-white': $route.path.includes('/admin/services') }">
                        🔧 الخدمات
                    </NuxtLink>
                    <NuxtLink to="/admin/projects"
                        class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        :class="{ 'bg-gray-700 text-white': $route.path.includes('/admin/projects') }">
                        🚀 المشاريع
                    </NuxtLink>
                </div>
            </div>

            <!-- الوسائط -->
            <div class="pt-4">
                <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">الوسائط</p>
                <div class="mt-2 space-y-1">
                    <NuxtLink to="/admin/media"
                        class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        :class="{ 'bg-gray-700 text-white': $route.path.includes('/admin/media') }">
                        🖼️ المكتبة
                    </NuxtLink>
                </div>
            </div>

            <!-- الإعدادات -->
            <div class="pt-4">
                <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">الإعدادات</p>
                <div class="mt-2 space-y-1">
                    <NuxtLink to="/admin/settings"
                        class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        :class="{ 'bg-gray-700 text-white': $route.path.includes('/admin/settings') }">
                        ⚙️ الإعدادات
                    </NuxtLink>
                </div>
            </div>
        </nav>

        <!-- المستخدم -->
        <div class="flex-shrink-0 flex bg-gray-700 p-4">
            <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-medium">A</span>
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium text-white">مدير النظام</p>
                    <button class="text-xs text-gray-300 hover:text-white">تسجيل الخروج</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isOpen: Boolean
})

defineEmits(['close'])
</script>