<template>
    <svg viewBox="0 0 200 120" class="w-full h-full">
        <!-- خلفية الموقع -->
        <rect x="0" y="0" width="200" height="120" fill="oklch(0.85 0.04 80)" />

        <!-- المبنى أثناء الهدم -->
        <rect x="80" y="50" width="60" height="40" fill="oklch(0.6 0.12 25)" stroke="oklch(0.5 0.15 25)"
            stroke-width="2" />

        <!-- أجزاء مفقودة -->
        <rect x="100" y="50" width="20" height="15" fill="oklch(0.85 0.04 80)" />
        <rect x="85" y="70" width="15" height="10" fill="oklch(0.85 0.04 80)" />

        <!-- أنقاض -->
        <rect x="40" y="85" width="15" height="8" fill="oklch(0.55 0.1 40)" transform="rotate(20 47 89)" />
        <rect x="150" y="80" width="12" height="6" fill="oklch(0.5 0.12 40)" transform="rotate(-15 156 83)" />
        <circle cx="120" cy="90" r="6" fill="oklch(0.45 0.08 40)" />

        <!-- معدات الهدم -->
        <circle cx="50" cy="50" r="12" fill="oklch(0.35 0.25 200)" />
        <rect x="47" y="45" width="6" height="25" fill="oklch(0.25 0.2 200)" />

        <!-- كرة الهدم -->
        <circle cx="50" cy="85" r="8" fill="oklch(0.2 0.1 0)" />
        <line x1="50" y1="57" x2="50" y2="77" stroke="oklch(0.3 0.1 0)" stroke-width="3" />

        <!-- غبار -->
        <circle cx="100" cy="55" r="4" fill="oklch(0.8 0.02 0)" opacity="0.6" />
        <circle cx="110" cy="60" r="3" fill="oklch(0.8 0.02 0)" opacity="0.4" />
        <circle cx="95" cy="65" r="5" fill="oklch(0.8 0.02 0)" opacity="0.5" />
    </svg>
</template>