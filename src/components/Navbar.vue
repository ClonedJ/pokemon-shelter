<script setup>
import { RouterLink, useRoute } from "vue-router";
import { currentUser, logout } from "@/utils/user";
import { watch } from "vue";

const items = {
  employee: ["home", "reservations", "trainers", "logout"],
  trainer: ["home", "package", "gallery", "about", "logout"],
  guest: ["home", "package", "gallery", "about", "login"],
};

const router = useRoute();
watch(router);
</script>

<template>
  <div
    v-if="router.name != 'login'"
    class="z-50 w-full flex justify-center my-6"
  >
    <div class="bg-white w-10/12 rounded-full flex justify-between">
      <RouterLink
        :to="`/`"
        active-class="bg-lime-800 text-white"
        class="hover:bg-lime-800 nav-item"
      >
        Home
      </RouterLink>
      <RouterLink
        :to="currentUser.type == 'employee' ? '/reservations' : '/package'"
        active-class="bg-yellow-900 text-white"
        :class="`${
          router.name != 'package-reserve'
            ? 'hover:bg-yellow-800'
            : 'bg-yellow-900 text-white'
        } nav-item`"
      >
        {{ currentUser.type == "employee" ? "Reservations" : "Packages" }}
      </RouterLink>
      <RouterLink
        :to="'/gallery'"
        active-class="bg-amber-400 text-white"
        class="hover:bg-amber-400 nav-item"
        v-if="currentUser.type != 'employee'"
      >
        Gallery
      </RouterLink>
      <RouterLink
        :to="currentUser.type == 'employee' ? '/trainers' : '/about'"
        active-class="bg-cyan-600 text-white"
        class="hover:bg-cyan-600 nav-item"
      >
        {{ currentUser.type == "employee" ? "Trainers" : "About" }}
      </RouterLink>
      <RouterLink
        v-if="currentUser.type == 'trainer'"
        :to="`/account/my-profile`"
        active-class="bg-lime-800 text-white"
        :class="`${
          router.name != 'account/my-reservations'
            ? 'hover:bg-lime-800 hover:text-white'
            : 'bg-lime-800 text-white'
        } py-4 w-full text-center uppercase font-semibold rounded-full flex justify-center`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </RouterLink>
      <RouterLink
        @click="currentUser.type != 'guest' && logout()"
        :to="`/login`"
        active-class="bg-lime-800 text-white"
        class="hover:bg-lime-800 nav-item"
        v-if="currentUser.type != 'trainer'"
      >
        {{ currentUser.type != "guest" ? "Logout" : "Login" }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav-item {
  @apply py-4 w-full text-center uppercase font-semibold rounded-full  hover:text-white transition-colors duration-150 ease-linear;
}
</style>
