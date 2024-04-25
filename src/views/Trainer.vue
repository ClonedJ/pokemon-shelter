<script setup>
import Table from "@/components/Table.vue";

const fields = [
  { label: "", data: "" },
  { label: "first name", data: "" },
  { label: "last name", data: "" },
  { label: "No. of Pokemon", data: "" },
  { label: "Active", data: "" },
];

const filter = {
  options: ["Pending", "Reserved", "Completed", "Rejected"],
  current: "Pending",
};
</script>
<template>
  <div class="bg-image bg-image-4"></div>
  <Table :filter="filter" :fields="fields" />
</template>
