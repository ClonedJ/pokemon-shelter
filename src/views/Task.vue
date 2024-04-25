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
  { label: "state", data: "currentState" },
  { label: "current task", data: "currentTask" },
  { label: "next task", data: "nextTask" },
];
const tasks = reservations.filter(
  (reservation) => reservation.state === "Reserved"
);

const viewMore = (record) => {
  Swal.fire({
    title: record.id,
    confirmButtonText: "Do Task",
    showDenyButton: true,
    denyButtonText: "Return to Owner",
    buttonsStyling: false,
    customClass: {
      confirmButton: "text-white px-8 py-2 rounded-full bg-amber-500 mr-4",
      denyButton: "text-white px-8 py-2 rounded-full bg-yellow-800",
    },
    html: `
      <div class='text-start'>
        <p>Package: ${record.package}</p>
        <p>Trainer: ${record.user.creds.username}</p>
        <p>Pokemon: ${record.pokemon.name}</p>
        <p>Pokemon State: ${record.currentState}</p>
        <p>Current Task: ${record.currentTask}</p>
        <p>Current Task: ${record.nextTask}</p>
      </div>
    `,
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
