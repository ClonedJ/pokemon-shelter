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
  <div class="z-50 w-full flex justify-center my-8">
    <div class="bg-white w-10/12 rounded-full flex shadow-2xl justify-between">
      <RouterLink
        v-for="(item, index) in items[currentUser ? currentUser.type : 'guest']"
        :key="index"
        @click="item == 'logout' && logout()"
        :to="`/${item == 'home' || item == 'logout' ? '' : item}`"
        :active-class="item == 'logout' ? '' : 'active'"
        :class="`py-4 w-full text-center uppercase font-semibold rounded-full hover:bg-lime-800 hover:text-white`"
      >
        {{ item }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-lime-800 text-white;
}
</style>
