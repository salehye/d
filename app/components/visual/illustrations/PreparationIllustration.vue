<template>
    <svg viewBox="0 0 200 120" class="w-full h-full">
        <!-- خلفية الموقع -->
        <rect x="0" y="0" width="200" height="120" fill="oklch(0.9 0.03 80)" />

        <!-- المبنى -->
        <rect x="80" y="40" width="60" height="50" fill="oklch(0.7 0.08 260)" stroke="oklch(0.5 0.1 260)"
            stroke-width="2" />

        <!-- سياج الأمان -->
        <rect x="40" y="30" width="140" height="5" fill="oklch(0.95 0.05 60)" stroke="oklch(0.7 0.1 60)"
            stroke-width="1" />
        <rect x="40" y="30" width="5" height="60" fill="oklch(0.95 0.05 60)" stroke="oklch(0.7 0.1 60)"
            stroke-width="1" />
        <rect x="175" y="30" width="5" height="60" fill="oklch(0.95 0.05 60)" stroke="oklch(0.7 0.1 60)"
            stroke-width="1" />

        <!-- لافتة تحذير -->
        <rect x="160" y="45" width="12" height="12" fill="oklch(0.9 0.1 60)" transform="rotate(45 166 51)" />
        <text x="166" y="55" text-anchor="middle" font-size="6" fill="oklch(0.3 0.1 0)" font-weight="bold">!</text>

        <!-- معدات -->
        <circle cx="50" cy="70" r="10" fill="oklch(0.4 0.2 200)" />
        <rect x="47" y="65" width="6" height="15" fill="oklch(0.3 0.15 200)" />

        <!-- عامل -->
        <circle cx="60" cy="60" r="5" fill="oklch(0.4 0.1 40)" />
        <rect x="58" y="65" width="4" height="8" fill="oklch(0.55 0.18 240)" />

        <!-- خوذة -->
        <ellipse cx="60" cy="58" rx="4" ry="3" fill="oklch(0.9 0.05 60)" />
    </svg>
</template>