<template>
  <div class="container">
    <!-- <sidebarHeader /> -->
    <customHeader />
    <main>
      <RouterView />
    </main>
    <sidebarMain />
  </div>
</template>

<script setup>
import sidebarMain from "../components/sidebar/sidebar-main.vue";

import customHeader from "../components/header/header.vue";
</script>

<style lang="scss" scoped></style>
