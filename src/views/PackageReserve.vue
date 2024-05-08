<script setup>
import { parseUrl } from "@/utils/dataParser.js";
import { getPackageData } from "@/utils/package.js";
import { fileReservation } from "@/utils/reservation.js";
import { currentUser } from "@/utils/user.js";
import { pokeSpecies } from "@/utils/pokemon";
import {
  convertDateToTime,
  addOneDay,
  convertDateToIDate,
} from "@/utils/datetime";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

const packageUrl = router.currentRoute._value.params.id;
const packageKey = parseUrl(packageUrl);
const packageData = getPackageData(packageKey);

const minDate = ref({
  checkIn: new Date(),
  checkOut: addOneDay(new Date()),
});

const showModal = ref(false);
const form = ref({
  user: currentUser,
  package: packageData.name,
  pokemon: {
    name: "",
    specie: "Bulbasaur",
    age: 10,
  },
  reservation: {
    checkInDate: convertDateToIDate(minDate.value.checkIn),
    checkInTime: convertDateToTime(minDate.value.checkIn),
    checkOutDate: convertDateToIDate(minDate.value.checkOut),
    checkOutTime: convertDateToTime(minDate.value.checkOut),
  },
});

watch(form.value.reservation, () => {
  const reservation = form.value.reservation;
  const checkInDate = new Date(reservation.checkInDate);
  const checkInDatePlusOneDay = addOneDay(checkInDate);
  minDate.value.checkOut = checkInDatePlusOneDay;
  if (reservation.checkInDate >= reservation.checkOutDate) {
    form.value.reservation.checkOutDate = convertDateToIDate(
      checkInDatePlusOneDay
    );
  }
});

watch(form.value.pokemon, () => {
  const age = form.value.pokemon.age;
  if (age < 8) {
    form.value.pokemon.age = 8;
  } else if (age > 100) {
    form.value.pokemon.age = 100;
  }
});

const openModal = () => {
  if (currentUser.type == "trainer") {
    showModal.value = true;
    setTimeout(() => {
      document.getElementById("reservationForm").focus();
    }, 0);
  } else {
    Swal.fire({
      icon: "warning",
      title: "Login Required",
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: "Keep browsing as Guest",
      confirmButtonText: "Go to Login",
      customClass: {
        confirmButton: "text-white px-8 py-2 rounded-full bg-amber-500",
        cancelButton: "text-white px-8 py-2 rounded-full bg-yellow-800 mr-4",
      },
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/login");
      }
    });
  }
};

const closeModal = () => {
  showModal.value = false;
};

const submit = (event) => {
  if (currentUser.type == "trainer") {
    if (form.value.pokemon.name == "") {
      Swal.fire({
        icon: "error",
        title: "૮₍˶Ó﹏Ò ⑅₎ა\n*Please complete the form*",
        buttonsStyling: false,
        customClass: {
          confirmButton: "text-white px-8 py-2 rounded-full bg-yellow-800",
        },
      });
    } else {
      fileReservation(form.value);
      Swal.fire({
        icon: "success",
        title: "૮₍´｡ᵔ ꈊ ᵔ｡`₎ა\nYou have successfully reserved!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      minDate.value = {
        checkIn: new Date(),
        checkOut: addOneDay(new Date()),
      };
      form.value.pokemon = {
        name: "",
        specie: "Bulbasaur",
        age: 10,
      };
      form.value.reservation.checkInDate = convertDateToIDate(
        minDate.value.checkIn
      );
      form.value.reservation.checkInTime = convertDateToTime(
        minDate.value.checkIn
      );
      form.value.reservation.checkOutDate = convertDateToIDate(
        minDate.value.checkOut
      );
      form.value.reservation.checkOutTime = convertDateToTime(
        minDate.value.checkOut
      );
    }
  } else {
    alert("Something went wrong!");
  }
  event.preventDefault();
};
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <div
    class="flex grow w-10/12 rounded-3xl flex-col mb-8 overflow-auto items-center"
  >
    <div
      class="flex space-x-8 h-full z-10 rounded-2xl bg-white p-4 justify-between"
    >
      <img
        alt=""
        src="/src/assets/images/snorlax.jpg"
        class="h-full rounded-3xl"
      />
      <div>
        <h1>{{ packageData.name }}</h1>
        <p>{{ packageData.description }}</p>
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
      class="w-full text-white -mt-12 pt-20 p-8 bg-yellow-900 rounded-3xl"
      id="reservationForm"
      tabindex="1"
    >
      <h1>Shelter Reservation</h1>
      <p>Fill the form to reserve a {{ packageData.name }} package.</p>
      <h3>Pokemon Information</h3>

      <div class="form-section">
        <div class="pokemon-info">
          <label for="name">Name</label>
          <input type="text" v-model="form.pokemon.name" />
        </div>

        <div class="pokemon-info">
          <label for="specie">Specie</label>
          <select v-model="form.pokemon.specie">
            <option disabled value="">Please select a Pokémon species</option>
            <option v-for="specie in pokeSpecies" :value="specie">
              {{ specie }}
            </option>
          </select>
        </div>

        <div class="pokemon-info">
          <label for="age">Age</label>
          <input type="number" min="8" max="100" v-model="form.pokemon.age" />
        </div>
      </div>

      <h3>Reservation Information</h3>
      <div class="form-section">
        <div class="reservation-info">
          <label for="checkIn">Check-In</label>
          <div>
            <input
              type="date"
              v-model="form.reservation.checkInDate"
              :min="convertDateToIDate(minDate.checkIn)"
            />
            <input type="time" v-model="form.reservation.checkInTime" />
          </div>
        </div>

        <div class="reservation-info">
          <label for="checkOut">Check-Out</label>
          <div class="">
            <input
              type="date"
              v-model="form.reservation.checkOutDate"
              :min="convertDateToIDate(minDate.checkOut)"
            />
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
select {
  @apply w-2/3 rounded-3xl text-center p-2 text-black;
}

input {
  @apply rounded-3xl text-center p-2 text-black;
}

label {
  @apply font-semibold w-1/4;
}

button {
  @apply text-white px-8 py-2 rounded-full;
}

h1 {
  @apply text-4xl font-bold;
}

h2,
h3 {
  @apply text-xl font-bold;
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
