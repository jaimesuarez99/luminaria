<template>
  <div class="toggle">
    <div class="logo">
      <img src="../../assets/logo.svg" alt="Prestadores Logo" />
      <h2>
        <p>A</p>
        D
        <p>A</p>
        PTA
      </h2>
    </div>
    <div class="close" id="menu-close-btn" @click="closeSideBar">
      <span class="material-symbols-outlined"> close </span>
    </div>
  </div>
</template>

<script setup>
const closeSideBar = () => {
  const sideMenu = document.querySelector("aside");
  const backDrop = document.getElementById("backdrop");
  sideMenu.classList.remove("aside-fixed");
  backDrop.style.display = "none";
};
</script>

<style lang="scss" scoped></style>
