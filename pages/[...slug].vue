<script setup>
const { path } = useRoute()
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>
<template>
  <article>
    <header>
      <h1>{{ blogPost.title }}</h1>
      <p>{{ blogPost.description }}</p>
      <p>By {{ blogPost.author }}</p>
    </header>
    <main>
      <ContentDoc />
    </main>
  </article>

</template>