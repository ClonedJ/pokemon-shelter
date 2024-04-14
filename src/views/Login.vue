<script setup>
import { validateUserCred, login } from "@/utils/user.js";
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

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
  <div class="flex grow w-full">
    <div class="w-1/2 p-16 flex">
      <form
        class="bg-white w-full h-full p-4 rounded-2xl flex flex-col bg-opacity-80"
      >
        <RouterLink class="self-start" to="/">
          <img alt="Back" src="/src/assets/images/arrow.png" class="w-8 h-8" />
        </RouterLink>

        <div class="text-center">
          <h1>Welcome</h1>
          <p>Lorem ipsum</p>
        </div>

        <div class="flex flex-col">
          <label for="username">Username</label>
          <input type="text" v-model="form.username" /><br />

          <label for="password">Password</label>
          <input type="password" v-model="form.password" /><br />

          <button
            @click="submit($event)"
            class="bg-amber-400 font-bold rounded-full py-2 text-white"
          >
            LOG IN
          </button>
        </div>
      </form>
    </div>
    <div class="right-section w-1/2"></div>
  </div>
</template>

<style scoped>
.right-section {
  background-image: url("/src/assets/images/snorlax.jpg");
  background-repeat: no-repeat;
  @apply h-[100svh];
}

input {
  @apply p-2 rounded-lg;
}
</style>
