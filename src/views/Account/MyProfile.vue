<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { currentUser } from "@/utils/user";
const profile = currentUser.profile;
</script>
<template>
  <div class="bg-image bg-image-1"></div>
  <div class="bg-white flex rounded-3xl">
    <Sidebar />
    <div class="bg-white p-4">
      <div>
        Name:
        <input type="text" :placeholder="profile.firstName" />
        <input type="text" :placeholder="profile.lastName" />
      </div>
      <div>
        Email:
        <input type="text" :placeholder="profile.email" />
      </div>
      <div>
        Phone No.:
        <input type="text" :placeholder="profile.phoneNum" />
      </div>
      <div>
        Address:
        <input type="text" :placeholder="profile.street" /><br />
        <input type="text" :placeholder="profile.city" />
        <input type="text" :placeholder="profile.region" />
      </div>
      <br />
    </div>
  </div>
</template>
