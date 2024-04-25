<script setup>
import SearchBar from "./SearchBar.vue";
import Filter from "./Filter.vue";
import Swal from "sweetalert2";
import { ref, watch } from "vue";

const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
  records: {
    type: Object,
    required: true,
  },
  filter: {
    type: Object,
  },
});

const filterCurrent = ref(props.filter.current);
const records = ref({});
const changeFilter = (option) => {
  console.log(option);
  filterCurrent.value = option;
};
const filterRecords = () => {
  records.value = props.records.filter(
    (record) => record.state.toLowerCase() === filterCurrent.value.toLowerCase()
  );
};
filterRecords();
watch(filterCurrent, filterRecords);
watch(props.records, filterRecords);

const emit = defineEmits(["viewMore"]);

const getNestedProperty = (obj, path) => {
  var properties = path.split(".");
  return properties.reduce((acc, prop) => acc && acc[prop], obj);
};
</script>

<template>
  <div class="w-10/12 flex justify-between">
    <Filter
      :current="filterCurrent"
      :options="filter.options"
      @changeFilter="changeFilter"
    />
    <SearchBar />
  </div>
  <table class="w-10/12 space-y-4 flex flex-col *:bg-white *:rounded-2xl">
    <thead class="sticky w-full py-4">
      <tr class="">
        <th v-for="(field, i) in fields" :key="i" class="font-bold capitalize">
          {{ field.label }}
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody class="even:bg-gray-100 *:py-4 *:border-b-2">
      <tr v-for="(record, i) in records" :key="i">
        <td v-for="(field, j) in fields" :key="j">
          {{ getNestedProperty(record, field.data) }}
        </td>
        <td>
          <button type="button" @click="$emit('viewMore', record)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
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
