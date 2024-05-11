<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { currentUser } from "@/utils/user";
import { watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { reservations } from "@/utils/reservation";
import { logout } from "@/utils/user";
import { ref } from "vue";

const items = [
  { label: "My Profile", route: "account/my-profile" },
  { label: "Reservations", route: "account/my-reservations" },
  { label: "Logout", route: "" },
];
const colors = ["lime-800", "yellow-800", "amber-500"];

const myReservations = reservations.filter(
  (reservation) => reservation.user.id === currentUser.id
);

const state = ref("My Profile");

const profile = currentUser.profile;
const router = useRoute();
watch(router);
</script>
<template>
  <div class="flex grow w-10/12 mb-8 overflow-auto bg-white rounded-3xl">
    <div class="flex flex-col bg-white w-1/3 rounded-3xl">
      <img :src="profile.pic" class="rounded-3xl w-full p-4" />
      <div class="flex flex-col grow justify-between">
        <RouterLink
          v-for="(item, index) in items"
          :key="index"
          @click="
            item.label == 'My Profile'
              ? (state = 'My Profile')
              : item.label == 'Reservations'
              ? (state = 'Reservations')
              : logout()
          "
          :to="item.label == 'Logout' ? '/' : ''"
          :class="`block cursor-pointer hover:bg-${
            colors[index]
          } hover:text-white py-2 h-full flex items-center justify-center -mr-6 ${
            state == item.label && `bg-${colors[index]} text-white`
          }`"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
    <div
      class="bg-lime-800 text-white rounded-3xl justify-center space-y-8 flex flex-col w-full px-8 py-4 reservation"
      v-if="state == 'My Profile'"
    >
      <div class="reservation-info">
        <label for="name">Name</label>
        <input
          type="text"
          :placeholder="profile.firstName"
          class="w-1/2 mr-2"
          readonly
        />
        <input
          type="text"
          :placeholder="profile.lastName"
          class="w-1/2"
          readonly
        />
      </div>
      <div class="reservation-info">
        <label for="email">Email</label>
        <input
          type="text"
          :placeholder="profile.email"
          class="w-full"
          readonly
        />
      </div>
      <div class="reservation-info">
        <label for="phone">Phone No.</label>
        <input
          type="text"
          :placeholder="profile.phoneNum"
          class="w-full"
          readonly
        />
      </div>
      <div class="reservation-info">
        <div class="flex-col flex w-full space-y-4">
          <div class="w-full flex">
            <label for="address">Address</label>
            <input
              type="text"
              :placeholder="profile.street"
              class="w-1/2 mr-2"
              readonly
            />
            <input
              type="text"
              :placeholder="profile.city"
              class="w-1/2"
              readonly
            />
          </div>
          <input
            type="text"
            :placeholder="profile.region"
            class="w-4/5 self-end"
            readonly
          />
        </div>
      </div>
    </div>
    <div
      class="bg-yellow-800 grid grid-cols-2 auto-rows-min grid-flow-row gap-4 rounded-3xl overflow-auto w-full p-8"
      v-if="state == 'Reservations'"
    >
      <div
        v-for="record in myReservations"
        class="flex flex-col bg-white rounded-3xl p-4"
      >
        <p>{{ record.id }}</p>
        <p>Pokemon: {{ record.pokemon.name }}</p>
        <p>Specie: {{ record.pokemon.specie }}</p>
        <p>Package Name: {{ record.package }}</p>
        <p>
          Duration:
          {{ record.reservation.checkInDate }} to
          {{ record.reservation.checkOutDate }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply rounded-3xl text-center p-3 text-black cursor-default placeholder:text-black;
}

label {
  @apply font-semibold w-1/4;
}

.reservation-info {
  @apply justify-between items-center flex;
}
</style>
