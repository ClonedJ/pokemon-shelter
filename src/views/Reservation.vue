<script setup>
import {
  reservations,
  acceptReservation,
  rejectReservation,
} from "@/utils/reservation";
import Table from "@/components/Table.vue";
import { parseTable } from "@/utils/dataParser";

const fields = [
  { label: "id", data: "id" },
  { label: "user", data: "user.creds.username" },
  { label: "package", data: "package" },
  { label: "check in", data: "reservation.checkInDate" },
  { label: "check out", data: "reservation.checkOutDate" },
  { label: "accept" },
  { label: "reject" },
];
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <Table
    :fields="fields"
    :records="parseTable(reservations)"
    @handleFirstButton="acceptReservation"
    @handleSecondButton="rejectReservation"
  />
</template>
