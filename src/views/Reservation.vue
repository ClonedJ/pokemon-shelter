<script setup>
import {
  reservations,
  acceptReservation,
  rejectReservation,
} from "@/utils/reservation";
import Table from "@/components/Table.vue";

const fields = [
  { label: "id", data: "id" },
  { label: "user", data: "user" },
  { label: "package", data: "package" },
  { label: "check in", data: "reservation.checkInDate" },
  { label: "check out", data: "reservation.checkOutDate" },
  { label: "accept" },
  { label: "reject" },
];
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <!-- <div v-for="(reservation, i) in reservations" :key="i">
    <template v-if="reservation.state === 'Pending'">
      <h1>{{ reservation.id }}</h1>
      <button @click="acceptReservation(reservation)">Accept</button>
      <button @click="rejectReservation(reservation)">Reject</button>
    </template>
  </div> -->
  <Table
    :fields="fields"
    :records="reservations"
    @handleFirstButton="acceptReservation"
    @handleSecondButton="rejectReservation"
  />
</template>
