<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/" active-class="active">HOME</RouterLink>
    <RouterLink to="/package" active-class="active">PACKAGE</RouterLink>
    <RouterLink to="/gallery" active-class="active">GALLERY</RouterLink>
    <RouterLink to="/about" active-class="active">ABOUT</RouterLink>
    <RouterLink to="/login" active-class="active">LOGIN</RouterLink>
  </div>
</template>
