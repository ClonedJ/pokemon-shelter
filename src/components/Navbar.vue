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
      <!-- <RouterLink
        v-for="(item, index) in items[currentUser ? currentUser.type : 'guest']"
        :key="index"
        @click="item == 'logout' && logout()"
        :to="`/${item == 'home' || item == 'logout' ? '' : item}`"
        :active-class="item == 'logout' ? '' : `bg-${colors[index]} text-white`"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-${colors[index]} hover:text-white`"
      >
        {{ item }}
      </RouterLink> -->

      <RouterLink
        :to="`/`"
        active-class="bg-lime-800 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-lime-800 hover:text-white`"
      >
        Home
      </RouterLink>
      <RouterLink
        :to="currentUser.type == 'employee' ? '/reservations' : '/package'"
        active-class="bg-yellow-900 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-yellow-900 hover:text-white`"
      >
        {{ currentUser.type == "employee" ? "Reservations" : "Packages" }}
      </RouterLink>
      <RouterLink
        :to="'/gallery'"
        active-class="bg-amber-400 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-amber-400 hover:text-white`"
        v-if="currentUser.type != 'employee'"
      >
        Gallery
      </RouterLink>
      <RouterLink
        :to="currentUser.type == 'employee' ? '/trainers' : '/about'"
        active-class="bg-cyan-600 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-cyan-600 hover:text-white`"
      >
        {{ currentUser.type == "employee" ? "Trainers" : "About" }}
      </RouterLink>
      <RouterLink
        v-if="currentUser.type == 'trainer'"
        :to="`/account/my-profile`"
        active-class="bg-lime-800 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-lime-800 hover:text-white flex justify-center`"
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
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-lime-800 hover:text-white`"
        v-if="currentUser.type != 'trainer'"
      >
        {{ currentUser.type != "guest" ? "Logout" : "Login" }}
      </RouterLink>
    </div>
  </div>
</template>
