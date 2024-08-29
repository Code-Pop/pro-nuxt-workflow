<template>
    <div :class="`toast ${variant}`">
        <div v-if="variant === 'success'">
            <!-- SVG for success -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <div v-else-if="variant === 'error'">
            <!-- SVG for error -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div v-else-if="variant === 'warning'">
            <!-- SVG for warning -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6h.01M6.938 4.501h10.154l1.898 7.132a2 2 0 01-1.065 2.682l-7.038 2.815a2 2 0 01-2.59-1.068L5.99 7.113a1 1 0 01.948-1.612z" />
            </svg>
        </div>
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        validator: (value) => ['success', 'error', 'warning'].includes(value),
        default: 'success',
    },
})
</script>

<style scoped>
.toast {
    padding: 10px 40px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    max-width: max-content;
    gap: 10px;
}

.toast.success {
    background-color: #22C55E;
}

.toast.error {
    background-color: #FF4747;
}

.toast.warning {
    background-color: #FF9966;
}

svg {
    width: 24px;
    height: 24px;
}
</style>