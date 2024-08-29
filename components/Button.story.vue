<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

const buttonText = ref('Click me!')
</script>

<template>
    <Story>
        <Button>
            {{ buttonText }}
        </Button>

        <template #controls>
            <HstText title="default text" v-model="buttonText" />
        </template>
    </Story>
</template>