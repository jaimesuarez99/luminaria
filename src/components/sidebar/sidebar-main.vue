<template>
  <aside>
    <div class="toggle">
      <div class="logo">
        <img src="../../assets/logo.svg" alt="Prestadores Logo">
        <h2>Prestadores</h2>
      </div>
      <div class="close" id="menu-close-btn">
        <span class="material-symbols-outlined">
          close
        </span>
      </div>
    </div>
    <div class="sidebar aside-fixed">
      <sidebarList/>
    </div>
  </aside>

</template>

<script setup>
import sidebarList from './sidebar-list.vue';
</script>

<style lang="scss" >

</style>