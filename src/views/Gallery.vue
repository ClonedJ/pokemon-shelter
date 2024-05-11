<script setup>
import Swal from "sweetalert2";

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

const viewImg = (image) => {
  Swal.fire({
    confirmButtonText: "Close",
    buttonsStyling: false,
    customClass: {
      confirmButton: "text-white px-8 py-2 rounded-full bg-lime-800 ",
    },
    html: `<img src=${image} style="height: 20rem" />`,
  });
};
</script>
<template>
  <div
    class="grid grid-cols-3 grow w-10/12 gap-8 auto-rows-min justify-between mb-8"
  >
    <figure
      v-for="(pic, index) in pics"
      class="bg-white px-2 py-2 cursor-pointer relative flex flex-col items-center shadow-md"
      :key="index"
      @click="viewImg(`/src/assets/images/gallery/${pic}.png`)"
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
