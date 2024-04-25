<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { currentUser } from "@/utils/user";
import { reservations } from "@/utils/reservation";
import Table from "@/components/Table.vue";

const myReservations = reservations.filter(
  (reservation) => reservation.user.id === currentUser.id
);

const fields = [
  { label: "id", data: "id" },
  { label: "pokemon", data: "pokemon.name" },
  { label: "package", data: "package" },
  { label: "check in", data: "reservation.checkInDate" },
  { label: "check out", data: "reservation.checkOutDate" },
];
</script>
<template>
  <div class="bg-image bg-image-1"></div>
  <div class="bg-white flex rounded-3xl">
    <Sidebar />
    <div v-for="record in myReservations" class="flex flex-row">
      <div>{{ record.id }}</div>
      <div>{{ record.pokemon.name }}</div>
      <div>{{ record.package }}</div>
      <div>{{ record.reservation.checkInDate }}</div>
      <div>{{ record.reservation.checkOutDate }}</div>
    </div>
  </div>

  <!-- <Table :fields="fields" :records="myReservations" /> -->
</template>
