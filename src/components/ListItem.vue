<script setup>
defineProps({
  itemName: {
    type: String,
    required: true,
  },
  itemDesc: {
    type: String,
    required: true,
  },
  itemImg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col h-full cursor-pointer bg-white rounded-3xl space-y-4 p-6 text-center bg-opacity-80"
  >
    <img :alt="`${itemName}`" :src="itemImg" class="h-2/3 rounded-3xl" />
    <div class="w-full space-y-2">
      <h1 class="text-xl font-bold">{{ itemName }}</h1>
      <!-- <p class="">
        {{ itemDesc }}
      </p> -->
      <slot />
    </div>
  </div>
</template>
