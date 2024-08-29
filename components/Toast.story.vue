<script setup>
import Toast from './Toast.vue'

defineProps({
    variant: {
        type: String,
        default: 'success'
    },
    text: {
        type: String,
        default: 'Notification!'
    }
})
</script>

<template>
    <Story>
        <Toast :variant="variant" :text="text" />
    </Story>
</template>