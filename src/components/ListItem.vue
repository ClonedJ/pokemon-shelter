<script setup>
defineProps({
  packageName: {
    type: String,
    required: true,
  },
  packageDesc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex w-11/12 cursor-pointer hover:opacity-95 bg-white rounded-2xl max-h-60"
  >
    <figure class="p-4 w-60">
      <img
        :alt="`${packageName}`"
        :src="`/src/assets/images/${packageName}.jpg`"
        class="h-full rounded-xl"
      />
    </figure>
    <div class="w-1/2 p-4">
      <h1>{{ packageName }}</h1>
      <p class="">
        {{ packageDesc }}
      </p>
    </div>
  </div>
</template>
