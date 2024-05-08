<script setup>
import { RouterLink } from "vue-router";
import { currentUser } from "@/utils/user.js";
import { getStateReservationsCount } from "@/utils/reservation";
</script>
<template>
  <div
    class="flex grow w-10/12 mb-8 overflow-auto space-x-8 rounded-3xl bg-white p-10 justify-between"
    v-if="currentUser.type != 'employee'"
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
  <div
    class="flex flex-col grow w-10/12 mb-8 rounded-3xl bg-white p-10 justify-between items-center text-center"
    v-else
  >
    <div class="space-y-4 h-1/2">
      <h1 class="font-bold text-6xl">Welcome, Staff!</h1>
      <p class="text-xl">
        Welcome to our Pokémon shelter, where trainers and their beloved Pokémon
        companions find a safe haven and caring community.
      </p>
    </div>
    <div
      class="flex bg-lime-700 h-1/2 text-white p-4 rounded-3xl *:rounded-3xl justify-center space-x-4"
    >
      <div class="bg-yellow-800 w-1/6 space-y-2">
        <p class="px-2 pt-4">Total no. of pending reservations</p>
        <p class="text-6xl font-semibold">
          {{ getStateReservationsCount("Pending") }}
        </p>
      </div>
      <div class="bg-red-700 w-1/6 space-y-2">
        <p class="px-2 pt-4">Total no. of reserved reservations</p>
        <p class="text-6xl font-semibold">
          {{ getStateReservationsCount("Reserved") }}
        </p>
      </div>
      <div class="w-2/4 flex flex-col space-y-3 *:rounded-3xl">
        <h1 class="bg-amber-500 text-lg py-1 font-semibold">
          Employee of the Month
        </h1>
        <div class="bg-amber-500 p-2 flex grow space-x-4">
          <img
            alt="Welcome"
            src="/src/assets/images/haru_pfp.jpg"
            class="rounded-3xl w-1/6"
          />
          <div class="flex flex-col text-start">
            <p class="font-bold">Haru</p>
            <p>
              A compassionate and dedicated employee who highly values the
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
