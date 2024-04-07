<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const user = ref({ type: "guest" });

const updateUser = (newUser) => {
  user.value = newUser;
}

const clearUser = () => {
  user.value = { type: "guest" };
}

</script>

<template>
  <Navbar :user="user" @clearUser="clearUser"/>
  <RouterView @updateUser="updateUser"/>
</template>