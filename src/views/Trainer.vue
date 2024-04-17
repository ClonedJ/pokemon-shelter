<script setup>
import ListItem from "@/components/ListItem.vue";
import Table from "@/components/Table.vue";

const fields = [
  { label: "first name", data: "" },
  { label: "last name", data: "" },
  { label: "No. of Pokemon", data: "" },
  { label: "Active", data: "" },
];
</script>
<template>
  <div class="bg-image bg-image-4"></div>
  <div
    class="flex w-10/12 flex-col mt-8 mb-8 overflow-auto items-center space-y-8 rounded-2xl"
  >
    <ListItem :item-name="'example-name'" :item-desc="'example-desc'" />
  </div>
</template>
