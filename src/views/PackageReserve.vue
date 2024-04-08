<script setup>
import { parseUrl } from "../utils/dataParser.js";
import { getPackageData } from "../utils/package.js";
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

const { user } = defineProps(["user"]);
const router = useRouter();

const packageUrl = router.currentRoute._value.params.id;
const packageKey = parseUrl(packageUrl);
const packageData = getPackageData(packageKey);

const showModal = ref(false);
const form = ref({
  name: "",
  specie: "",
  age: 0,
  checkInDate: "",
  checkInTime: "",
  checkOutDate: "",
  checkOutTime: "",
});

const openModal = () => {
  if (user.type == "trainer") {
    showModal.value = true;
  } else {
    alert("Please login to reserve a package");
  }
};

const closeModal = () => {
  showModal.value = false;
};

const submit = (event) => {
  console.log(JSON.stringify(form.value));
  if (user.type == "trainer") {
    alert("You have successfully reserved!");
  } else {
    alert("Something went wrong!");
  }
  event.preventDefault();
};
</script>
<template>
  <div>
    <h1>{{ packageData.name }}</h1>
    <h3>{{ packageData.description }}</h3>
    <br />
    <h2>Services:</h2>
    <div v-for="(service, j) in packageData.services" :key="j">
      <h3>{{ j + 1 + ". " + service }}</h3>
    </div>
    <button v-show="!showModal" @click="openModal">Reserve</button>
    <br />
  </div>
  <form v-show="showModal">
    <h2>Pokemon Information</h2>
    <label for="name">Name:</label>
    <input type="text" v-model="form.name" /><br />

    <label for="specie">Specie:</label>
    <input type="text" v-model="form.specie" /><br />

    <label for="age">Age:</label>
    <input type="number" v-model="form.age" /><br /><br />

    <h2>Reservation Information</h2>
    <label for="checkIn">Check-In:</label>
    <input type="date" v-model="form.checkInDate" />
    <input type="time" v-model="form.checkInTime" /><br />

    <label for="checkOut">Check-Out:</label>
    <input type="date" v-model="form.checkOutDate" />
    <input type="time" v-model="form.checkOutTime" /><br /><br />

    <button type="button" @click="closeModal()">Close</button>
    <button @click="submit($event)">Submit</button>
  </form>
</template>