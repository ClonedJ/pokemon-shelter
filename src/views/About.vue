<script setup>
const team = [
  { name: "Haru", img: "/src/assets/images/about/haru.webp" },
  { name: "Tyler", img: "/src/assets/images/about/tyler.png" },
  { name: "Watanabe", img: "/src/assets/images/about/watanabe.jpg" },
  { name: "Alisa", img: "/src/assets/images/about/alisa.jpg" },
  { name: "Koduck", img: "/src/assets/images/about/koduck.png" },
];
</script>
<template>
  <div class="flex flex-col w-full grow items-center">
    <div
      class="flex grow w-10/12 mb-8 space-x-8 rounded-3xl bg-white p-8 justify-between bg-opacity-80"
    >
      <img
        alt="Welcome"
        src="/src/assets/images/about/about.jpg"
        class="rounded-3xl h-auto w-1/5"
      />
      <div class="space-y-8 h-full flex flex-col justify-center">
        <div class="space-y-4">
          <h1 class="font-bold text-2xl">About the Project</h1>
          <p class="text-base">
            At PokéHome, our mission is driven by a profound dedication to the
            well-being of both trainers and their cherished Pokémon companions.
            We strive to create more than just a place of refuge; we aim to
            cultivate a nurturing place where every Pokémon feels valued,
            respected, and loved. We endeavor to foster an environment where
            these extraordinary creatures can thrive and flourish alongside
            their human counterparts.
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col space-y-8 p-8 items-center w-10/12 space-x-8 rounded-3xl bg-opacity-80 bg-white mb-8"
    >
      <h2 class="font-bold text-2xl">Meet the Team</h2>
      <div class="grid grid-cols-5 gap-4 justify-center">
        <div
          v-for="member in team"
          class="flex flex-col items-center mb-4 mr-4"
        >
          <img
            :src="member.img"
            :alt="member.img"
            class="w-32 h-32 rounded-full mb-2"
          />
          <p class="font-bold">{{ member.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
