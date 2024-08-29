<script setup lang="ts">
const authCookie = useCookie('user-auth')

function authenticate() {
    authCookie.value = '1f38d'
}
</script>

<template>
    <h1>Login Page</h1>
    <button @click="authenticate">Authenticate</button>
</template>