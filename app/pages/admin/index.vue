<!-- pages/admin/index.vue -->
<template>
    <div class="space-y-6">
        <!-- الإحصائيات -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- <DashboardCard title="إجمالي المقالات" :value="stats.totalArticles" icon="📝" color="blue"
                :change="stats.articlesChange" />
            <DashboardCard title="الصفحات" :value="stats.totalPages" icon="📄" color="green"
                :change="stats.pagesChange" />
            <DashboardCard title="الخدمات" :value="stats.totalServices" icon="🔧" color="purple"
                :change="stats.servicesChange" />
            <DashboardCard title="المشاريع" :value="stats.totalProjects" icon="🚀" color="orange"
                :change="stats.projectsChange" /> -->
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- النشاط الأخير -->
            <!-- <div class="bg-white rounded-lg shadow">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h3 class="text-lg font-medium text-gray-900">أحدث النشاطات</h3>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div v-for="activity in recentActivities" :key="activity.id"
                            class="flex items-start space-x-3 space-x-reverse">
                            <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-white',
                                activity.type === 'article' ? 'bg-blue-500' :
                                    activity.type === 'page' ? 'bg-green-500' :
                                        activity.type === 'service' ? 'bg-purple-500' : 'bg-orange-500'
                            ]">
                                {{ activity.icon }}
                            </div>
                            <div class="flex-1">
                                <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
                                <p class="text-sm text-gray-500">{{ activity.description }}</p>
                                <p class="text-xs text-gray-400">{{ activity.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- الإجراءات السريعة -->
            <!-- <div class="bg-white rounded-lg shadow">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h3 class="text-lg font-medium text-gray-900">إجراءات سريعة</h3>
                </div>
                <div class="p-6">
                    <div class="grid grid-cols-2 gap-4">
                        <button @click="navigateTo('/admin/articles/new')"
                            class="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-500 hover:bg-blue-50 transition">
                            <div class="text-2xl mb-2">📝</div>
                            <div class="text-sm font-medium text-gray-700">مقال جديد</div>
                        </button>
                        <button @click="navigateTo('/admin/pages/new')"
                            class="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-green-500 hover:bg-green-50 transition">
                            <div class="text-2xl mb-2">📄</div>
                            <div class="text-sm font-medium text-gray-700">صفحة جديدة</div>
                        </button>
                        <button @click="navigateTo('/admin/services/new')"
                            class="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-purple-500 hover:bg-purple-50 transition">
                            <div class="text-2xl mb-2">🔧</div>
                            <div class="text-sm font-medium text-gray-700">خدمة جديدة</div>
                        </button>
                        <button @click="navigateTo('/admin/projects/new')"
                            class="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-orange-500 hover:bg-orange-50 transition">
                            <div class="text-2xl mb-2">🚀</div>
                            <div class="text-sm font-medium text-gray-700">مشروع جديد</div>
                        </button>
                    </div>
                </div>
            </div> -->
        </div>

        <!-- المحتوى الأخير -->
        <div class="bg-white rounded-lg shadow">
            <!-- <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium text-gray-900">آخر المحتويات</h3>
                    <div class="flex space-x-2">
                        <button @click="activeTab = 'articles'"
                            :class="['px-3 py-1 rounded text-sm', activeTab === 'articles' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700']">
                            المقالات
                        </button>
                        <button @click="activeTab = 'pages'"
                            :class="['px-3 py-1 rounded text-sm', activeTab === 'pages' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:text-gray-700']">
                            الصفحات
                        </button>
                    </div>
                </div>
            </div> -->
            <div class="p-6">
                <!-- <div v-if="activeTab === 'articles'">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    المقال</th>
                                <th
                                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الحالة</th>
                                <th
                                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    التاريخ</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="article in recentArticles" :key="article.id">
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">{{ article.title }}</div>
                                            <div class="text-sm text-gray-500">{{ article.excerpt }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span :class="[
                                        'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                                        article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    ]">
                                        {{ article.status === 'published' ? 'منشور' : 'مسودة' }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">{{ formatDate(article.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                   
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
})
// const activeTab = ref('articles')

// const { data: stats } = await useFetch('/api/admin/stats')
// const { data: recentArticles } = await useFetch('/api/articles?limit=5')
// const { data: recentActivities } = await useFetch('/api/admin/activities')
// defineProps
// const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('ar-EG')
// }
</script>