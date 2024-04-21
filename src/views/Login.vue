<script setup>
import { validateUserCred, login } from "@/utils/user.js";
import Swal from "sweetalert2";
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
    Swal.fire({
      icon: "success",
      title: "Login successful",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    }).then(() => {
      router.push("/");
    });
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
        class="bg-white w-full h-full p-8 rounded-2xl flex flex-col bg-opacity-80"
      >
        <RouterLink class="self-start" to="/">
          <img alt="Back" src="/src/assets/images/arrow.png" class="w-8 h-8" />
        </RouterLink>

        <div class="text-center space-y-2">
          <h1 class="font-bold text-4xl">Welcome</h1>
          <p class="">
            Welcome to our Pokémon shelter, where trainers and their beloved
            Pokémon companions find a safe haven and caring community.
          </p>
        </div>

        <div class="flex flex-col mt-4">
          <label for="username" class="font-semibold">Username</label>
          <input type="text" v-model="form.username" /><br />

          <label for="password" class="font-semibold">Password</label>
          <input type="password" v-model="form.password" /><br />

          <button
            @click="submit($event)"
            class="bg-amber-400 font-bold rounded-full py-4 text-white"
          >
            LOG IN
          </button>
        </div>
        <!-- <p class="w-full text-center mt-8">Not yet a member? Sign up.</p> -->
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
