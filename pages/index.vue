<template>
    <p>{{ data.id }}</p>
    <p>{{ data.name }}</p>
    <img :src="data.sprite" alt="pokemon sprite">
</template>

<script setup>
const data  = await $fetch('/api/snorlax')
</script>