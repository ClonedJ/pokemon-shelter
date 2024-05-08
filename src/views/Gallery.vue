<script setup>
const pics = [
  "Backyard(_)",
  "Spa-ing",
  "Beach",
  "Mountain",
  "Camping",
  "PokemonConcierge",
  "PokemonSaBeach",
  "Pool",
  "Reception",
  "Zipline",
  "Bridge",
  "ResortAtNight",
  "HillSurfing",
  "LeavingResort",
  "PokeFriends2",
];
</script>
<template>
  <div
    class="grid grid-cols-3 grow w-10/12 gap-8 auto-rows-min justify-between mb-8"
  >
    <figure
      v-for="(pic, index) in pics"
      class="bg-white px-2 py-2 relative flex flex-col items-center shadow-md"
      :key="index"
    >
      <img
        src="/src/assets/images/pngwing.com.png"
        class="absolute -mt-5"
        width="50"
      />
      <div class="flex flex-col items-center">
        <img :src="`/src/assets/images/gallery/${pic}.png`" />
        <figcaption class="py-6">{{ pic }}</figcaption>
      </div>
    </figure>
  </div>
</template>
