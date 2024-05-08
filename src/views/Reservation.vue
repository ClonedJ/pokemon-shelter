<script setup>
import {
  reservations,
  acceptReservation,
  rejectReservation,
  completeReservation,
} from "@/utils/reservation";
import Table from "@/components/Table.vue";
import Swal from "sweetalert2";
import { updateUserData } from "@/utils/user";

const fields = [
  { label: "id", data: "id" },
  { label: "user", data: "user.creds.username" },
  { label: "package", data: "package" },
  { label: "check in", data: "reservation.checkInDate" },
  { label: "check out", data: "reservation.checkOutDate" },
];

const filter = {
  options: ["Pending", "Reserved", "Completed", "Rejected"],
  current: "Pending",
};

const viewMore = (record) => {
  var tasks = "";
  if (record.state == "Reserved") {
    tasks += "<p>Activities:</p>";
    tasks +=
      record.tasks
        .map((task, i) => `<p>[${i + 1}] ${task.name}</p>`)
        .join("") ?? "";
  }
  const html = `
      <div class='text-start'>
        <p>Package: ${record.package}</p>
        <p>Trainer: ${record.user.creds.username}</p>
        <p>Pokemon: ${record.pokemon.name}</p>
        ${tasks}
        <p>Check In: ${record.reservation.checkInDate}</p>
        <p>Check Out: ${record.reservation.checkOutDate}</p>
      </div>
    `;
  if (record.state == "Pending") {
    Swal.fire({
      title: record.id,
      confirmButtonText: "Agree",
      showDenyButton: true,
      denyButtonText: "Reject",
      buttonsStyling: false,
      customClass: {
        confirmButton: "text-white px-8 py-2 rounded-full bg-lime-800 mr-4",
        denyButton: "text-white px-8 py-2 rounded-full bg-red-700",
      },
      html: html,
    }).then((result) => {
      if (result.isConfirmed) {
        acceptReservation(record);
        updateUserData(record.user.id);
      } else if (result.isDenied) {
        rejectReservation(record);
      }
    });
  } else if (record.state == "Reserved") {
    Swal.fire({
      title: record.id,
      confirmButtonText: "Give back to owner",
      buttonsStyling: false,
      customClass: {
        confirmButton: "text-white px-8 py-2 rounded-full bg-lime-800 mr-4",
      },
      html: html,
    }).then((result) => {
      if (result.isConfirmed) {
        completeReservation(record);
        updateUserData(record.user.id);
      }
    });
  } else {
    Swal.fire({
      title: record.id,
      customClass: {
        confirmButton: "text-white px-8 py-2 rounded-full bg-lime-800 mr-4",
        denyButton: "text-white px-8 py-2 rounded-full bg-red-700",
      },
      html: html,
    });
  }
};
</script>

<template>
  <div class="bg-image bg-image-2"></div>
  <Table
    :fields="fields"
    :records="reservations"
    :filter="filter"
    :hasViewMore="true"
    @viewMore="viewMore"
  />
  <!-- @handleFirstButton="acceptReservation"
    @handleSecondButton="rejectReservation" -->
</template>
