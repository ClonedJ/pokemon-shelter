<script setup>
import {
  reservations,
  doNextTask,
  completeReservation,
} from "@/utils/reservation";
</script>
<template>
  <div v-for="(reservation, i) in reservations" :key="i">
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
  </div>
</template>
