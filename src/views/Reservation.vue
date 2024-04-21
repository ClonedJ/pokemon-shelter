<script setup>
import {
  reservations,
  acceptReservation,
  rejectReservation,
} from "@/utils/reservation";
import Table from "@/components/Table.vue";
import { parseTable } from "@/utils/dataParser";
import Swal from "sweetalert2";

const fields = [
  { label: "id", data: "id" },
  { label: "user", data: "user.creds.username" },
  { label: "package", data: "package" },
  { label: "check in", data: "reservation.checkInDate" },
  { label: "check out", data: "reservation.checkOutDate" },
];

const viewMore = (record) => {
  Swal.fire({
    title: record.id,
    confirmButtonText: "Agree",
    showDenyButton: true,
    denyButtonText: "Reject",
  }).then((result) => {
    if (result.isConfirmed) {
      acceptReservation(record);
    } else {
      rejectReservation(record);
    }
  });
};
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <Table
    :fields="fields"
    :records="parseTable(reservations)"
    @viewMore="viewMore"
  />
  <!-- @handleFirstButton="acceptReservation"
    @handleSecondButton="rejectReservation" -->
</template>
