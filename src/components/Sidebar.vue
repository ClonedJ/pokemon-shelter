<script setup>
import { RouterLink, useRoute } from "vue-router";
import { logout } from "@/utils/user";
import { watch } from "vue";

const items = [
  { label: "My Profile", route: "account/my-profile" },
  { label: "Reservations", route: "account/my-reservations" },
  { label: "Logout", route: "" },
];
const colors = ["lime-800", "yellow-900", "lime-800"];
const router = useRoute();
watch(router);
</script>

<template>
  <div class="bg-white w-1/10 p-4">
    <RouterLink
      v-for="(item, index) in items"
      :key="index"
      @click="item.label == 'Logout' && logout()"
      :to="`/${item.route}`"
      :active-class="`bg-${colors[index]} text-white`"
      :class="`block hover:bg-${colors[index]} hover:text-white`"
    >
      {{ item.label }}
    </RouterLink>
  </div>
</template>
