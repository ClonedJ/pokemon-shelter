<script setup>
import users from "../assets/data/userData.json";
import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits(['updateUser']);
const router = useRouter();

const username = ref("");
const password = ref("");

const submit = (event) => {
  const result = login();
  if(result) {
    alert("Login successful");
    router.push("/");
  } else {
    alert("Something went wrong");
  }
  event.preventDefault();
}

const login = () => {
  const user = users[username.value]
  if(user && user.password == password.value) {
    emit('updateUser', user);
    return true;
  } else {
    return false;
  }
}

</script>

<template>
  <form>
    <label for="username">Username:</label>
    <input type="text" v-model="username" /><br />

    <label for="password">Password:</label>
    <input type="password" v-model="password"/><br />

    <button @click="submit($event)">Login</button>
  </form>
</template>
