<script setup>
import {
  reservations,
  doNextTask,
  completeReservation,
} from "@/utils/reservation";
import Table from "@/components/Table.vue";
import Swal from "sweetalert2";

const fields = [
  { label: "", data: "" },
  { label: "name", data: "pokemon.name" },
  { label: "place", data: "currentPlace" },
  { label: "pokemon state", data: "currentState" },
  { label: "current task", data: "tasks[record.currentTask - 1].name" },
  { label: "next task", data: "tasks[record.currentTask].name" },
];
const tasks = reservations.filter(
  (reservation) => reservation.state === "Reserved"
);

const viewMore = (record) => {
  Swal.fire({
    title: record.id,
    confirmButtonText: "Do task",
    showDenyButton: true,
    denyButtonText: "Return to Owner",
  }).then((result) => {
    if (result.isConfirmed) {
      doNextTask(record);
    } else if (result.isDenied) {
      completeReservation(record);
    }
  });
};
</script>

<template>
  <div class="bg-image bg-image-3"></div>
  <Table :fields="fields" :records="tasks" @viewMore="viewMore" />
</template>
