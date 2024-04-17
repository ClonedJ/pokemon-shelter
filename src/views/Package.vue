<script setup>
import { packages } from "@/utils/package.js";
import { parseString } from "@/utils/dataParser.js";
import { useRouter } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import SearchBar from "@/components/SearchBar.vue";
const router = useRouter();

const submit = (event, packageName) => {
  const parsedPackageName = parseString(packageName); //ex. "Basic Care" become "basic-care"
  router.push("/package/" + parsedPackageName);
  event.preventDefault();
};
</script>
<template>
  <div class="bg-image bg-image-2"></div>
  <SearchBar />
  <div
    class="flex w-10/12 flex-col mb-8 overflow-auto items-center space-y-8 rounded-2xl"
  >
    <ListItem
      v-for="(packageData, i) in packages"
      :key="i"
      @click="submit($event, packageData.name)"
      :item-name="packageData.name"
    >
      <p>{{ packageData.description }}</p>
    </ListItem>
  </div>
</template>
