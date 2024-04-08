<script setup>
import packages from "../assets/data/packageData.json";
import { parseString } from "../utils/dataParser.js";
import { useRouter } from "vue-router";
const router = useRouter();

const submit = (event, packageName) => {
  const parsedPackageName = parseString(packageName); //ex. "Basic Care" become "basic-care"
  router.push("/package/" + parsedPackageName);
  event.preventDefault();
};
</script>
<template>
  <div
    v-for="(packageData, i) in packages.data"
    :key="i"
    @click="submit($event, packageData.name)"
  >
    <h1>{{ packageData.name }}</h1>
    <h3>{{ packageData.description }}</h3>
  </div>
</template>
