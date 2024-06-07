<template>
  <router-view></router-view>
  <div class="back-drop" id="backdrop">
    <button class="backdrop-button" @click="bDropCloseAside()"></button>
  </div>
</template>

<script setup>
const bDropCloseAside = () => {
  const sideMenu = document.querySelector("aside");
  const backDrop = document.getElementById("backdrop");
  sideMenu.classList.remove("aside-fixed");
  backDrop.style.display = "none";
};
</script>

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
