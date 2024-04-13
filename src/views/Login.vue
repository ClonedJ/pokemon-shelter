<script setup>
import { validateUserCred, login } from "@/utils/user.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  username: "",
  password: "",
});

const submit = (event) => {
  const user = validateUserCred(form.value);
  if (user) {
    login(user);
    alert("Login successful");
    router.push("/");
  } else {
    alert("Something went wrong");
  }
  event.preventDefault();
};
</script>

<template>
  <div class="bg-image bg-image-1"></div>
  <div class="right-section w-1/2"></div>
  <div class="w-1/2 flex">
    <form class="bg-white rounded-2xl">
      <label for="username">Username:</label>
      <input type="text" v-model="form.username" /><br />

      <label for="password">Password:</label>
      <input type="password" v-model="form.password" /><br />

      <button @click="submit($event)">Login</button>
    </form>
  </div>
</template>

<style scoped>
.right-section {
  background-image: url("/src/assets/images/snorlax.jpg");
  background-repeat: no-repeat;
  @apply h-[100svh] fixed right-0;
}
</style>
