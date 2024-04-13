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
  <div class="bg-image bg-image-2"></div>
  <div class="flex w-10/12 justify-end relative">
    <input type="text" class="rounded-3xl w-1/3 p-2" />
    <img alt="search icon" src="" class="absolute" />
  </div>
  <div
    class="flex w-10/12 flex-col mt-8 mb-8 overflow-auto items-center space-y-8 rounded-2xl"
  >
    <ListItem
      v-for="(packageData, i) in packages"
      :key="i"
      @click="submit($event, packageData.name)"
      :package-name="packageData.name"
      :package-desc="packageData.description"
    />
  </div>
</template>
