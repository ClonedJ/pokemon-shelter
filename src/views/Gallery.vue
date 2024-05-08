<script setup>
const pics = [
  "Backyard(_).png",
  "Spa-ing.png",
  "Beach.png",
  "Mountain.png",
  "Camping.png",
  "PokemonConcierge.png",
  "PokemonSaBeach.png",
  "Pool.png",
  "Reception.png",
  "Zipline.png",
  "Bridge.png",
  "ResortAtNight.png",
  "HillSurfing.png",
  "LeavingResort.png",
  "PokeFriends2.png",
];
</script>
<template>
  <div
    class="grid grid-cols-3 grow w-10/12 gap-8 auto-rows-min justify-between mb-8"
  >
    <figure
      v-for="(pic, index) in pics"
      class="bg-white pb-16 px-2 py-2 relative flex flex-col items-center"
      :key="index"
    >
      <img
        src="/src/assets/images/pngwing.com.png"
        class="absolute -mt-5"
        width="50"
      />
      <img :src="`/src/assets/images/gallery/` + pic" />
    </figure>
  </div>
</template>
