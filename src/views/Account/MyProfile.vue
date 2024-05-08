<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { currentUser } from "@/utils/user";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { reservations } from "@/utils/reservation";

const myReservations = reservations.filter(
  (reservation) => reservation.user.id === currentUser.id
);

const profile = currentUser.profile;
const router = useRoute();
watch(router);
</script>
<template>
  <div class="bg-image bg-image-1"></div>
  <div class="flex grow w-10/12 mb-8 overflow-auto bg-white rounded-3xl">
    <Sidebar />
    <div
      class="bg-lime-800 text-white rounded-3xl justify-center space-y-8 flex flex-col w-full px-8 py-4 reservation"
      v-if="router.name == 'account/my-profile'"
    >
      <div class="reservation-info">
        <label for="name">Name</label>
        <input
          type="text"
          :placeholder="profile.firstName"
          class="w-1/2 mr-2"
          readonly
        />
        <input
          type="text"
          :placeholder="profile.lastName"
          class="w-1/2"
          readonly
        />
      </div>
      <div class="reservation-info">
        <label for="email">Email</label>
        <input
          type="text"
          :placeholder="profile.email"
          class="w-full"
          readonly
        />
      </div>
      <div class="reservation-info">
        <label for="phone">Phone No.</label>
        <input
          type="text"
          :placeholder="profile.phoneNum"
          class="w-full"
          readonly
        />
      </div>
      <div class="reservation-info">
        <div class="flex-col flex w-full space-y-4">
          <div class="w-full flex">
            <label for="address">Address</label>
            <input
              type="text"
              :placeholder="profile.street"
              class="w-1/2 mr-2"
              readonly
            />
            <input
              type="text"
              :placeholder="profile.city"
              class="w-1/2"
              readonly
            />
          </div>
          <input
            type="text"
            :placeholder="profile.region"
            class="w-4/5 self-end"
            readonly
          />
        </div>
      </div>
    </div>
    <div
      class="bg-yellow-800 grid grid-cols-2 auto-rows-min grid-flow-row gap-4 rounded-3xl overflow-auto w-full p-8"
      v-if="router.name == 'account/my-reservations'"
    >
      <div
        v-for="record in myReservations"
        class="flex flex-col bg-white rounded-3xl p-4"
      >
        <p>{{ record.id }}</p>
        <p>Pokemon: {{ record.pokemon.name }}</p>
        <p>Package Name: {{ record.package }}</p>
        <p>
          Duration:
          {{ record.reservation.checkInDate }} to
          {{ record.reservation.checkOutDate }}
        </p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Description
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply rounded-3xl text-center p-3 text-black cursor-default placeholder:text-black;
}

label {
  @apply font-semibold w-1/4;
}

.reservation-info {
  @apply justify-between items-center flex;
}
</style>
