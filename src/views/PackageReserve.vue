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
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <div class="flex grow w-10/12 flex-col mt-8 mb-8 overflow-auto items-center">
    <div
      class="flex space-x-8 h-full z-10 rounded-2xl bg-white p-4 justify-between"
    >
      <img
        alt=""
        src="/src/assets/images/snorlax.jpg"
        class="h-full rounded-xl"
      />
      <div>
        <h1>{{ packageData.name }}</h1>
        <p>{{ packageData.description }}</p>
        <br />
        <h2>Services:</h2>
        <div v-for="(service, j) in packageData.services" :key="j">
          <p>{{ j + 1 + ". " + service }}</p>
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

    <form
      v-show="showModal"
      class="w-full text-white -mt-12 pt-20 p-8 bg-yellow-900 rounded-2xl"
    >
      <h2>Shelter Reservation</h2>
      <p>Fill the form to reserve a Deluxe Care package.</p>
      <h3>Pokemon Information</h3>

      <div class="form-section">
        <div class="pokemon-info">
          <label for="name">Name</label>
          <input type="text" v-model="form.pokemon.name" />
        </div>

        <div class="pokemon-info">
          <label for="specie">Specie</label>
          <input type="text" v-model="form.pokemon.specie" />
        </div>

        <div class="pokemon-info">
          <label for="age">Age</label>
          <input type="number" v-model="form.pokemon.age" />
        </div>
      </div>

      <h3>Reservation Information</h3>
      <div class="form-section">
        <div class="reservation-info">
          <label for="checkIn">Check-In:</label>
          <div>
            <input type="date" v-model="form.reservation.checkInDate" />
            <input type="time" v-model="form.reservation.checkInTime" />
          </div>
        </div>

        <div class="reservation-info">
          <label for="checkOut">Check-Out:</label>
          <div>
            <input type="date" v-model="form.reservation.checkOutDate" />
            <input type="time" v-model="form.reservation.checkOutTime" />
          </div>
        </div>
      </div>

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
  @apply rounded-3xl text-center p-2 text-black;
}

label {
  @apply font-semibold w-1/4;
}

button {
  @apply text-white px-8 py-2 rounded-full;
}

h3 {
  @apply bg-yellow-600 -mx-8 px-8 py-4;
}

.form-section {
  @apply space-y-4 w-full py-8;
}

.pokemon-info {
  @apply justify-between flex w-full;
}

.pokemon-info input {
  @apply w-2/3;
}

.reservation-info {
  @apply justify-between flex;
}

.reservation-info div {
  @apply w-2/3;
}

.reservation-info input {
  @apply w-1/2;
}
</style>
