<template>
    <svg viewBox="0 0 200 120" class="w-full h-full">
        <!-- خلفية الموقع النظيف -->
        <rect x="0" y="0" width="200" height="120" fill="oklch(0.92 0.02 80)" />

        <!-- الأرض المستوية -->
        <rect x="20" y="80" width="160" height="40" fill="oklch(0.75 0.05 80)" />

        <!-- شاحنة الترحيل -->
        <rect x="30" y="65" width="40" height="15" fill="oklch(0.3 0.2 200)" rx="2" />
        <rect x="70" y="70" width="25" height="10" fill="oklch(0.4 0.15 200)" />
        <circle cx="45" cy="80" r="5" fill="oklch(0.2 0.1 0)" />
        <circle cx="65" cy="80" r="5" fill="oklch(0.2 0.1 0)" />
        <circle cx="80" cy="80" r="5" fill="oklch(0.2 0.1 0)" />

        <!-- الحاوية -->
        <rect x="120" y="60" width="30" height="20" fill="oklch(0.5 0.1 40)" />
        <rect x="122" y="62" width="26" height="16" fill="oklch(0.6 0.08 40)" />

        <!-- علامة صح -->
        <circle cx="170" cy="50" r="15" fill="oklch(0.2 0.8 160)" />
        <path d="M165,50 L170,55 L180,45" stroke="oklch(0.95 0.01 0)" stroke-width="3" fill="none"
            stroke-linecap="round" />

        <!-- عامل التنظيف -->
        <circle cx="150" cy="70" r="4" fill="oklch(0.4 0.1 40)" />
        <rect x="148" y="74" width="4" height="6" fill="oklch(0.55 0.18 240)" />

        <!-- مكنسة -->
        <rect x="155" y="65" width="2" height="10" fill="oklch(0.4 0.1 30)" />
        <rect x="150" y="65" width="10" height="3" fill="oklch(0.6 0.08 30)" />
    </svg>
</template>