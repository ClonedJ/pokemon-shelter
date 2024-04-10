<script setup>
import { RouterLink } from "vue-router";
import { currentUser, logout } from "@/utils/user";

const items = {
  employee: ["Home", "Tasks", "Trainers", "Reservations", "Logout"],
  trainer: ["Home", "Package", "Gallery", "About", "Logout"],
  guest: ["Home", "Package", "Gallery", "About", "Login"],
};

const colors = ["lime-800", "yellow-900", "amber-400", "cyan-600", "cyan-600"];
</script>

<template>
  <div class="flex space-x-4 justify-center rounded-full bg-white mt-8">
    <RouterLink
      v-for="(item, index) in items[currentUser ? currentUser.type : 'guest']"
      :key="index"
      @click="item == 'Logout' && logout()"
      :to="`/${(item != 'Home' || item != 'Logout') && item}`"
      active-class="active"
      :class="`px-12 py-4 uppercase font-semibold rounded-full hover:bg-${colors[index]}`"
    >
      {{ item }}
    </RouterLink>
  </div>
</template>
