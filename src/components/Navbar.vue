<script setup>
import { RouterLink, useRoute } from "vue-router";
import { currentUser, logout } from "@/utils/user";
import { watch } from "vue";

const items = {
  employee: ["home", "reservations", "tasks", "trainers", "logout"],
  trainer: ["home", "package", "gallery", "about", "logout"],
  guest: ["home", "package", "gallery", "about", "login"],
};

const colors = ["lime-800", "yellow-900", "amber-400", "cyan-600", "cyan-600"];
const router = useRoute();
watch(router);
</script>

<template>
  <div
    v-if="router.name != 'login'"
    class="z-50 w-full flex justify-center my-8"
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
        :to="currentUser.type == 'employee' ? '/tasks' : '/gallery'"
        active-class="bg-amber-400 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-amber-400 hover:text-white`"
      >
        {{ currentUser.type == "employee" ? "Tasks" : "Gallery" }}
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
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-lime-800 hover:text-white`"
      >
        Account
      </RouterLink>
      <RouterLink
        @click="currentUser.type != 'guest' && logout()"
        :to="`/login`"
        active-class="bg-lime-800 text-white"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-lime-800 hover:text-white`"
      >
        {{ currentUser.type == "guest" ? "Login" : "Logout" }}
      </RouterLink>
    </div>
  </div>
</template>
