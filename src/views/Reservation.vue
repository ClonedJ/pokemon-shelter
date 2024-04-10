<script setup>
import {
  reservations,
  acceptReservation,
  rejectReservation,
} from "@/utils/reservation";
</script>
<template>
  <div v-for="(reservation, i) in reservations" :key="i">
    <template v-if="reservation.state === 'Pending'">
      <h1>{{ reservation.id }}</h1>
      <button @click="acceptReservation(reservation)">Accept</button>
      <button @click="rejectReservation(reservation)">Reject</button>
    </template>
  </div>
</template>
