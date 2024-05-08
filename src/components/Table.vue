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
  hasViewMore: {
    type: Boolean,
  },
});

const filterCurrent = ref(props.filter.current);
const search = ref("");
const records = ref({});
const changeFilter = (option) => {
  console.log(option);
  filterCurrent.value = option;
};
const filterRecords = () => {
  search.value = "";
  records.value = props.records.filter(
    (record) => record.state.toLowerCase() === filterCurrent.value.toLowerCase()
  );
};
const searchRecords = () => {
  records.value = props.records.filter(
    (record) =>
      record.state.toLowerCase() === filterCurrent.value.toLowerCase() &&
      (search.value === "" ||
        record.id.toLowerCase().includes(search.value.toLowerCase()))
  );
};
filterRecords();
watch(filterCurrent, filterRecords);
watch(props.records, filterRecords);
watch(search, searchRecords);

const emit = defineEmits(["viewMore"]);

const getNestedProperty = (obj, path) => {
  var properties = path.split(".");
  return properties.reduce((acc, prop) => acc && acc[prop], obj);
};
</script>

<template>
  <div class="w-full flex flex-col items-center grow">
    <div class="w-10/12 flex justify-between">
      <Filter
        :current="filterCurrent"
        :options="filter.options"
        @changeFilter="changeFilter"
      />
      <div class="flex w-10/12 mb-6 justify-end items-center relative">
        <input
          type="text"
          class="rounded-3xl w-1/3 py-2 placeholder:italic placeholder:text-slate-400 px-4"
          placeholder="Search for a record..."
          v-model.trim="search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 absolute mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
    <table class="w-10/12 space-y-4 flex flex-col *:bg-white *:rounded-2xl">
      <thead class="sticky w-full py-4">
        <tr class="">
          <th
            v-for="(field, i) in fields"
            :key="i"
            class="font-bold capitalize"
          >
            {{ field.label }}
          </th>
          <th v-if="props.hasViewMore"></th>
        </tr>
      </thead>
      <tbody class="even:bg-gray-100 *:py-4 *:border-b-2">
        <tr v-for="(record, i) in records" :key="i">
          <td v-for="(field, j) in fields" :key="j">
            {{ getNestedProperty(record, field.data) }}
          </td>
          <td v-if="props.hasViewMore">
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
  </div>
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
