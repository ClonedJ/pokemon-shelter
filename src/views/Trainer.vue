<script setup>
import Table from "@/components/Table.vue";
import { users } from "@/utils/user";

const fields = [
  { label: "id", data: "id" },
  { label: "first name", data: "profile.firstName" },
  { label: "last name", data: "profile.lastName" },
  { label: "No. of Pokemons", data: "noOfPokemon" },
];

const filter = {
  options: ["Active", "Inactive"],
  current: "All",
};

const trainers = users.filter((user) => user.type == "trainer");
</script>
<template>
  <Table :filter="filter" :records="trainers" :fields="fields" />
</template>
