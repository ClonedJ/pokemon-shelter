<script setup>
import { validateUserCred, login } from "../utils/user.js";
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
  <form>
    <label for="username">Username:</label>
    <input type="text" v-model="form.username" /><br />

    <label for="password">Password:</label>
    <input type="password" v-model="form.password" /><br />

    <button @click="submit($event)">Login</button>
  </form>
</template>
