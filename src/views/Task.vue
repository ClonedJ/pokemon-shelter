<script setup>
import {
  reservations,
  doNextTask,
  completeReservation,
} from "@/utils/reservation";
import Table from "@/components/Table.vue";

const fields = [
  { label: "name", data: "pokemon.name" },
  { label: "place", data: "currentPlace" },
  { label: "state", data: "currentState" },
  { label: "task", data: "tasks[record.currentTask].name" },
  { label: "do task" },
  { label: "return to owner" },
];
const tasks = reservations.filter(
  (reservation) => reservation.state === "Reserved"
);
</script>

<template>
  <div class="bg-image bg-image-3"></div>
  <!-- <div v-for="(reservation, i) in reservations" :key="i">
    <template v-if="reservation.state === 'Reserved'">
      <h1>Name: {{ reservation.pokemon.name }}</h1>
      <h1>Place: {{ reservation.currentPlace }}</h1>
      <h1>State: {{ reservation.currentState }}</h1>
      <button class="bg-white" @click="doNextTask(reservation)">Do Task</button
      ><br />
      <button class="bg-white" @click="completeReservation(reservation)">
        Reunite with Owner
      </button>
      <h1>
        Next Task:
        {{
          " " + reservation.tasks.length != reservation.currentTask
            ? reservation.tasks[reservation.currentTask].name
            : "None"
        }}
      </h1>
    </template>
  </div> -->
  <Table
    :fields="fields"
    :records="tasks"
    @handleFirstButton="doNextTask"
    @handleSecondButton="completeReservation"
  />
</template>
