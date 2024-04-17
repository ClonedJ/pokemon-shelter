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
  <div class="w-10/12 flex grow overflow-auto">
    <div
      class="w-full h-full grid justify-between gap-8 grid-cols-2 items-center rounded-2xl"
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
  </div>
</template>
