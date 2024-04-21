<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { currentUser } from "@/utils/user";
import { reservations } from "@/utils/reservation";
import Table from "@/components/Table.vue";
import { parseTable } from "@/utils/dataParser";

const myReservations = reservations.filter(
  (reservation) =>
    reservation.user === currentUser.id ||
    reservation.user.id === currentUser.id
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
  <h1>My Reservations</h1>
  <Sidebar />
  <Table :fields="fields" :records="parseTable(myReservations)" />
</template>
