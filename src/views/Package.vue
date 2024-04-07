<script setup>
import packages from "../assets/data/packageData.json";
</script>
<template>
  <div v-for="(packagee, i) in packages.data" :key="i">
    <h1>{{ packagee.name }}</h1>
    <h3>{{ packagee.description }}</h3>
    <br />
    <h2>Services:</h2>
    <div v-for="(service, j) in packagee.services" :key="j">
      <h3>{{ j + 1 + ". " + service }}</h3>
    </div>
    <br />
    <br />
  </div>
</template>
