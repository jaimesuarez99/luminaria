<template>
  <RouterView name="Login" />

  <div class="container">
    <RouterView name="sidebarMain" />
    <RouterView name="headerTop" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
/* aside{
  border-width: 2px;
  border-color: rgb(255, 0, 0);
  border-style: dashed;
 } */

/* *{
  border-width: 1px;
  border-color: rgb(255, 0, 0);
  border-style: dashed;
 } */
</style>
