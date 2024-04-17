<script setup>
import {
  reservations,
  doNextTask,
  completeReservation,
} from "@/utils/reservation";
import { parseTable } from "@/utils/dataParser";
import Table from "@/components/Table.vue";

const fields = [
  { label: "name", data: "pokemon.name" },
  { label: "place", data: "currentPlace" },
  { label: "pokemon state", data: "currentState" },
  { label: "current task", data: "tasks[record.currentTask - 1].name" },
  { label: "next task", data: "tasks[record.currentTask].name" },
  { label: "do next task" },
  { label: "return to owner" },
];
const tasks = reservations.filter(
  (reservation) => reservation.state === "Reserved"
);
</script>

<template>
  <div class="bg-image bg-image-3"></div>
  <Table
    :fields="fields"
    :records="parseTable(tasks)"
    @handleFirstButton="doNextTask"
    @handleSecondButton="completeReservation"
  />
</template>
