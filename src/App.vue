<script setup>
import { RouterView, useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { ref, watchEffect } from "vue";

const bg = ref("");
const router = useRoute();

watchEffect(() => {
  if (
    router.name === "login" ||
    router.name === "home" ||
    router.name === "account/my-reservations" ||
    router.name === "account/my-profile"
  ) {
    bg.value = "bg-image-1";
  } else if (
    router.name === "package" ||
    router.name === "package-reserve" ||
    router.name === "reservations"
  ) {
    bg.value = "bg-image-2";
  } else if (router.name === "gallery" || router.name === "trainers") {
    bg.value = "bg-image-3";
  } else if (router.name === "about") {
    bg.value = "bg-image-4";
  }
});
</script>

<template>
  <div :class="`bg-image ${bg}`"></div>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </Transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-move {
  transition: all 0.25s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
