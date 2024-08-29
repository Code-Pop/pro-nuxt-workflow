<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
    }
})
const { items } = props
// console.log('Items in Posts component:', items)
</script>

<template>
    <UContainer>
        <div v-for="(post, index) in items" :key="index" class="space-y-3">
            <UCard class="py-2" :ui="{
            body: {
                padding: 'py-0'
            }
        }">
                <div class="flex w-full">
                    <UAvatar class="ml-4" src="/logo.jpeg" alt="User avatar" size="md" />
                    <div class="ml-3 w-full">
                        <div class="flex items-baseline">
                            <h3 class="text-base font-bold">Vue Mastery</h3>
                            <span class="text-sm ml-2 text-[#686E73]">@VueMastery</span>
                        </div>
                        <p>{{ post.content }}</p>
                        <div class="flex w-full justify-between mt-3 text-[#71777B]">
                            <div class="flex items-center">
                                <Icon name="heroicons:chat-bubble-oval-left" />
                                <span class="ml-2">2</span>
                            </div>
                            <div class="flex items-center">
                                <Icon name="system-uicons:retweet" />
                                <span class="ml-2">1</span>
                            </div>
                            <div class="flex items-center">
                                <Icon name="heroicons:heart" />
                                <span class="ml-2">2</span>
                            </div>
                            <div class="flex items-center">
                                <Icon name="heroicons:eye" />
                                <span class="ml-2">120</span>
                            </div>
                            <div class="flex items-center pr-3">
                                <Icon name="heroicons:arrow-up-tray" />
                            </div>
                        </div>
                    </div>
                </div>
            </UCard>
        </div>
    </UContainer>
</template>