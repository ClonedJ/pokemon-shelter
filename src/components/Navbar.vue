<script setup>
import { RouterLink } from "vue-router";
import { currentUser, logout } from "@/utils/user";

const items = {
  employee: ["home", "tasks", "trainers", "reservations", "logout"],
  trainer: ["home", "package", "gallery", "about", "logout"],
  guest: ["home", "package", "gallery", "about", "login"],
};

const colors = ["lime-800", "yellow-900", "amber-400", "cyan-600", "cyan-600"];
</script>

<template>
  <div class="flex space-x-4 justify-center rounded-full bg-white mt-8">
    <RouterLink
      v-for="(item, index) in items[currentUser ? currentUser.type : 'guest']"
      :key="index"
      @click="item == 'logout' && logout()"
      :to="`/${item == 'home' || item == 'logout' ? '' : item}`"
      active-class="active"
      :class="`px-12 py-4 uppercase font-semibold rounded-full hover:bg-${colors[index]}`"
    >
      {{ item }}
    </RouterLink>
  </div>
</template>
