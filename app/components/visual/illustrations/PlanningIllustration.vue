<template>
    <svg viewBox="0 0 200 120" class="w-full h-full">
        <!-- خلفية المكتب -->
        <rect x="0" y="0" width="200" height="120" fill="oklch(0.97 0.01 240)" />

        <!-- الطاولة -->
        <rect x="40" y="70" width="120" height="5" fill="oklch(0.6 0.1 30)" />
        <rect x="45" y="50" width="5" height="20" fill="oklch(0.5 0.1 30)" />
        <rect x="150" y="50" width="5" height="20" fill="oklch(0.5 0.1 30)" />

        <!-- المخطط -->
        <rect x="60" y="30" width="80" height="35" fill="oklch(0.95 0.01 0)" stroke="oklch(0.8 0.05 0)"
            stroke-width="1" />

        <!-- خطوط المخطط -->
        <line x1="65" y1="40" x2="135" y2="40" stroke="oklch(0.3 0.1 0)" stroke-width="1" />
        <line x1="65" y1="50" x2="135" y2="50" stroke="oklch(0.3 0.1 0)" stroke-width="1" />
        <line x1="65" y1="60" x2="135" y2="60" stroke="oklch(0.3 0.1 0)" stroke-width="1" />

        <!-- مبنى في المخطط -->
        <rect x="80" y="45" width="20" height="15" fill="oklch(0.55 0.18 240)" />

        <!-- أدوات الرسم -->
        <circle cx="50" y="40" r="8" fill="oklch(0.9 0.05 0)" stroke="oklch(0.3 0.1 0)" stroke-width="1" />
        <rect x="155" y="35" width="3" height="15" fill="oklch(0.3 0.1 0)" transform="rotate(45 156 42)" />

        <!-- الحاسوب -->
        <rect x="150" y="55" width="25" height="15" fill="oklch(0.3 0.1 0)" rx="2" />
        <rect x="152" y="57" width="21" height="9" fill="oklch(0.55 0.18 240)" />
    </svg>
</template>