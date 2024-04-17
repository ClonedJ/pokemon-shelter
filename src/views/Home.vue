<script setup>
import { RouterLink, useRoute } from "vue-router";
</script>
<template>
  <div class="bg-image bg-image-1"></div>
  <div
    class="flex grow w-10/12 mb-8 overflow-auto space-x-8 rounded-3xl bg-white p-10 justify-between"
  >
    <div class="space-y-8 h-full flex flex-col justify-center">
      <div class="space-y-4">
        <h1 class="font-bold text-6xl">Pokehome</h1>
        <p class="text-xl">
          Welcome to our Pokémon shelter, where trainers and their beloved
          Pokémon companions find a safe haven and caring community.
        </p>
      </div>
      <RouterLink
        :to="'/package'"
        class="bg-amber-400 p-4 w-1/3 px-8 font-semibold text-lg rounded-full text-white hover:bg-amber-500 active:bg-amber-400"
      >
        Go to Packages
      </RouterLink>
    </div>
    <img
      alt="Welcome"
      src="/src/assets/images/snorlax.jpg"
      class="rounded-3xl h-full"
    />
  </div>
</template>
