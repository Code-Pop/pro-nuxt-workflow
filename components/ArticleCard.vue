<template>
  <div class="article__div">
    <NuxtImg class="article__img" :src="article.urlToImage" :alt="article.title" />
    <div class="article__item-div">
      <p>{{ article.title }}</p>
      <p>{{ article.author }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    article: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .article {
    &__div {
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      &:hover {
        cursor: pointer;
      }
    }
    &__img {
      width: 100%;
      object-fit: cover;
      height: 180px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      transition: all 1s ease-in-out;
      &:hover {
        object-fit: fill;
      }
    }
    &__item-div {
      padding: 0 8px;
    }
  }
</style>
