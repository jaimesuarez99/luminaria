<template>
  <h1 class="mb-4 font-extrabold uppercase text-2xl tracking-wider">
    Zona > {{ $route.params.name }}
  </h1>
  <!-- <div>{{ $route.params.id }} {{ $route.params.name }}</div> -->
  <RouterView />
</template>

<script setup></script>

<style></style>
