<script setup>
import { parseUrl } from "@/utils/dataParser.js";
import { getPackageData } from "@/utils/package.js";
import { fileReservation } from "@/utils/reservation.js";
import { currentUser } from "@/utils/user.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const packageUrl = router.currentRoute._value.params.id;
const packageKey = parseUrl(packageUrl);
const packageData = getPackageData(packageKey);

const showModal = ref(false);
const form = ref({
  user: currentUser.creds.username,
  package: packageData.name,
  pokemon: {
    name: "",
    specie: "",
    age: 0,
  },
  reservation: {
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
  },
});

const openModal = () => {
  if (currentUser.type == "trainer") {
    showModal.value = true;
  } else {
    alert("Please login to reserve a package");
  }
};

const closeModal = () => {
  showModal.value = false;
};

const submit = (event) => {
  if (currentUser.type == "trainer") {
    fileReservation(form.value);
    alert("You have successfully reserved!");
  } else {
    alert("Something went wrong!");
  }
  event.preventDefault();
};

const pokemonInfo = ["name", "specie", "age"];
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <div class="bg-yellow-900 w-11/12 rounded-2xl">
    <div class="flex space-x-4 bg-white rounded-2xl">
      <figure class="">
        <img alt="" src="/src/assets/images/snorlax.jpg" class="rounded-xl" />
      </figure>
      <div>
        <h1>{{ packageData.name }}</h1>
        <h3>{{ packageData.description }}</h3>
        <br />
        <h2>Services:</h2>
        <div v-for="(service, j) in packageData.services" :key="j">
          <h3>{{ j + 1 + ". " + service }}</h3>
        </div>
        <button
          type="button"
          v-show="!showModal"
          @click="openModal"
          class="bg-amber-400"
        >
          Reserve
        </button>
      </div>
    </div>

    <form v-show="showModal" class="w-full">
      <h2>Pokemon Information</h2>
      <label for="name">Name</label>
      <input type="text" v-model="form.pokemon.name" /><br />

      <label for="specie">Specie</label>
      <input type="text" v-model="form.pokemon.specie" /><br />

      <label for="age">Age</label>
      <input type="number" v-model="form.pokemon.age" /><br /><br />

      <h2>Reservation Information</h2>
      <label for="checkIn">Check-In:</label>
      <input type="date" v-model="form.reservation.checkInDate" />
      <input type="time" v-model="form.reservation.checkInTime" /><br />

      <label for="checkOut">Check-Out:</label>
      <input type="date" v-model="form.reservation.checkOutDate" />
      <input type="time" v-model="form.reservation.checkOutTime" /><br /><br />

      <div class="space-x-4 flex justify-end">
        <button type="button" @click="closeModal()" class="bg-lime-800">
          Cancel
        </button>
        <button type="button" @click="submit($event)" class="bg-red-600">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
  @apply rounded-3xl w-2/3 text-center p-2;
}

label {
  @apply font-semibold w-1/4;
}

button {
  @apply text-white px-8 py-2 rounded-full;
}
</style>
