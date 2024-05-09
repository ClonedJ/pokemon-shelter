<script setup>
import { ref, defineEmits } from "vue";

defineProps({
  options: {
    type: Array,
  },
  current: {
    type: String,
  },
});

const emit = defineEmits(["changeFilter"]);
const showOptions = ref(false);
</script>

<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-center gap-x-2 rounded-3xl bg-white px-4 py-2 font-semibold hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="showOptions = !showOptions"
      >
        {{ current }}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="showOptions"
        class="absolute z-10 mt-2 w-56 origin-top-right rounded-3xl bg-white shadow-lg"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <button
            @click="
              {
                $emit('changeFilter', 'All');
                showOptions = !showOptions;
              }
            "
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            All
          </button>
          <button
            v-for="(option, i) in options"
            @click="
              {
                $emit('changeFilter', option);
                showOptions = !showOptions;
              }
            "
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            :id="'menu-item-' + i + 2"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
