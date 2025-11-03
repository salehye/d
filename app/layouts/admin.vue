<!-- layouts/admin.vue -->
<template>
    <div class="admin-layout min-h-screen bg-gray-100">
        <!-- الشريط الجانبي -->
        <AdminSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />

        <!-- المحتوى الرئيسي -->
        <div class="lg:ml-64">
            <!-- الهيدر -->
            <AdminHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />

            <!-- المحتوى -->
            <main class="p-6">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
const sidebarOpen = ref(false)
</script>