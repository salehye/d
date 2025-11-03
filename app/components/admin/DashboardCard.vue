<!-- components/DashboardCard.vue -->
<template>
    <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
            <div class="flex items-center">
                <div :class="['flex-shrink-0 rounded-md p-3', colorClasses]">
                    <span class="text-2xl">{{ icon }}</span>
                </div>
                <div class="mr-4 flex-1">
                    <p class="text-sm font-medium text-gray-500 truncate">{{ title }}</p>
                    <p class="text-2xl font-semibold text-gray-900">{{ value }}</p>
                </div>
            </div>
        </div>
        <div v-if="change" class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
                <span :class="change > 0 ? 'text-green-600' : 'text-red-600'">
                    {{ change > 0 ? '↑' : '↓' }} {{ Math.abs(change) }}%
                </span>
                <span class="text-gray-500"> عن الشهر الماضي</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    value: [String, Number],
    icon: String,
    color: {
        type: String,
        default: 'blue'
    },
    change: Number
})

const colorClasses = computed(() => {
    const colors = {
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        purple: 'bg-purple-500',
        orange: 'bg-orange-500',
        red: 'bg-red-500'
    }
    return colors[props.color] || colors.blue
})
</script>