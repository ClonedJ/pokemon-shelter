<script setup>
import { packages } from "@/utils/package.js";
import { parseString } from "@/utils/dataParser.js";
import { useRouter } from "vue-router";
import ListItem from "@/components/ListItem.vue";
const router = useRouter();

const submit = (event, packageName) => {
  const parsedPackageName = parseString(packageName); //ex. "Basic Care" become "basic-care"
  router.push("/package/" + parsedPackageName);
  event.preventDefault();
};
</script>
<template>
  <div class="flex flex-col items-center space-y-8">
    <ListItem
      v-for="(packageData, i) in packages"
      :key="i"
      @click="submit($event, packageData.name)"
      :package-name="packageData.name"
      :package-desc="packageData.description"
    />
  </div>
</template>
