<script setup>
const { data } = await useFetch('/api/pokemon')
</script>

<template>
    <pre>{{ data }}</pre>
</template>