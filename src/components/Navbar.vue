<script setup>
import { RouterLink } from "vue-router";
import { currentUser, logout } from "@/utils/user";
</script>

<template>
  <div>
    <RouterLink to="/" active-class="active">HOME</RouterLink><br />
    <RouterLink
      v-if="currentUser.type != 'employee'"
      to="/package"
      active-class="active"
      >PACKAGE</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type != 'employee'"
      to="/gallery"
      active-class="active"
      >GALLERY</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type != 'employee'"
      to="/about"
      active-class="active"
      >ABOUT</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type == 'employee'"
      to="/tasks"
      active-class="active"
      >TASKS</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type == 'employee'"
      to="/trainers"
      active-class="active"
      >TRAINERS</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type == 'trainer'"
      to="/account"
      active-class="active"
      >ACCOUNT</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type == 'guest'"
      to="/login"
      active-class="active"
      >LOGIN</RouterLink
    ><br />
    <RouterLink
      v-if="currentUser.type != 'guest'"
      @click="logout"
      to="/"
      active-class="active"
      >LOGOUT</RouterLink
    ><br />
  </div>
</template>
