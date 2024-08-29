<template>
  <div class="grid justify-center">
    <div class="border-x border-gray-600">
      <NuxtImg src="/vue-cover.jpeg" />
      <div class="flex mx-4">
        <UAvatar class="-mt-16 justify-content" src="/logo.jpeg" alt="Avatar" size="xl" />
        <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="outline" class="ml-auto h-min mt-3">Edit
          Profile</UButton>
      </div>
      <!-- Profile bio section -->
      <div class="px-4">
        <h3 class="text-xl font-bold">Vue Mastery</h3>
        <span class="text-[#686E73] mb-3">@VueMastery</span>
        <p class="mb-6">The ultimate learning platform for Vue.js developers</p>
        <span>Learn from the experts,<br />Elevate your code, <br />Master your
          craft</span>
        <h5 class="mt-6 mb-3 text-[#2C9AF0]">vuemastery.com/courses</h5>
        <a class="flex my-3 items-center">
          <Icon mode="svg" name="material-symbols-light:link" size="24" transform="rotate(-45)" color="grey"></Icon>
          <h5 class="text-[#2C9AF0] text-base">vuemastery.com/courses</h5>
        </a>
      </div>
    </div>
  </div>
</template>