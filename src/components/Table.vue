<script setup>
import SearchBar from "./SearchBar.vue";
import Filter from "./Filter.vue";

defineProps({
  fields: {
    type: Array,
    required: true,
  },
  records: {
    type: Array,
    requied: true,
  },
});

const emit = defineEmits(["handleFirstButton", "handleSecondButton"]);

const getNestedProperty = (obj, path) => {
  const properties = path.split(".");
  return properties.reduce((acc, prop) => acc && acc[prop], obj);
};
</script>

<template>
  <div class="w-10/12 flex justify-between">
    <Filter />
    <SearchBar />
  </div>
  <table class="w-10/12 space-y-4 flex flex-col *:bg-white *:rounded-2xl">
    <thead class="sticky w-full py-4">
      <tr class="">
        <th v-for="(field, i) in fields" :key="i" class="font-bold capitalize">
          {{ field.label }}
        </th>
      </tr>
    </thead>
    <tbody class="even:bg-gray-100 *:py-4 *:border-b-2">
      <tr v-for="(record, i) in records" :key="i" @click="">
        <td v-for="(field, j) in fields.slice(0, fields.length - 2)" :key="j">
          <template v-if="field.label === 'current task'">
            <!-- Access tasks array directly -->
            {{ record.currentTask }}
          </template>
          <template v-else-if="field.label === 'next task'">
            <!-- Access tasks array directly -->
            {{ record.nextTask }}
          </template>
          <template v-else>
            <!-- For other fields, use getNestedProperty -->
            {{ getNestedProperty(record, field.data) }}
          </template>
        </td>
        <td>
          <button @click="$emit('handleFirstButton', record)">Accept</button>
        </td>
        <td>
          <button @click="$emit('handleSecondButton', record)">Reject</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
tr {
  @apply flex text-center;
}

th,
td {
  @apply w-full;
}
</style>
