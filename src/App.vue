<template>
  <div class="flex-col">
    <headerComponent></headerComponent>
    <router-view></router-view>
  </div>
</template>

<script setup>
import headerComponent from "./components/header.vue";
</script>

<style scoped></style>
