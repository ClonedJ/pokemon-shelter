<script setup>
import { RouterLink, useRoute } from "vue-router";
import { logout } from "@/utils/user";
import { watch } from "vue";

const items = [
  { label: "My Profile", route: "account/my-profile" },
  { label: "Reservations", route: "account/my-reservations" },
  { label: "Logout", route: "" },
];
const colors = ["lime-800", "yellow-900", "amber-500"];
const router = useRoute();
watch(router);
</script>

<template>
  <div class="bg-white w-1/4 space-y-4 p-4 rounded-3xl">
    <img src="/src/assets/images/snorlax.jpg" class="rounded-3xl w-full" />
    <div class="flex flex-col">
      <RouterLink
        v-for="(item, index) in items"
        :key="index"
        @click="item.label == 'Logout' && logout()"
        :to="`/${item.route}`"
        :active-class="`bg-${colors[index]} text-white`"
        :class="`block hover:bg-${colors[index]} text-center rounded-md hover:text-white py-2`"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </div>
</template>
