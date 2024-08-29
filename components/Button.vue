<script setup>
defineProps({
    color: {
        type: String,
    },
    size: {
        type: String,
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
        default: 'md',
    },
})

const sizeStyles = {
    sm: 'padding: 5px 10px; font-size: 12px;',
    md: 'padding: 10px 20px; font-size: 14px;',
    lg: 'padding: 15px 30px; font-size: 16px;',
}
</script>

<template>
    <button :style="`${sizeStyles[size]}; background-color: ${color};`">
        <slot />
    </button>
</template>
