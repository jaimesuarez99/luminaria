<template>
  <div class="header">
    <div class="nav">
      <div class="flex justify-center items-center w-full h-full gap-6">
        <router-link
          class="flex gap-2 justify-center items-center font-semibold text-xl rounded-lg px-2 py-4 btn-group"
          :to="{ path: 'general' }"
        >
          <p>General</p>
          <span class="material-symbols-outlined"> leaderboard </span>
        </router-link>
        <router-link
          class="flex gap-2 justify-center items-center font-semibold text-xl rounded-lg px-2 py-4 btn-group"
          :to="{ path: 'map' }"
        >
          <p>Mapa</p>
          <span class="material-symbols-outlined"> map </span>
        </router-link>
        <router-link
          class="flex gap-2 justify-center items-center font-semibold text-xl rounded-lg px-2 py-4 btn-group"
          :to="{ path: 'reports' }"
        >
          <p>Reportes</p>
          <span class="material-symbols-outlined"> lab_profile </span>
        </router-link>
      </div>
      <button class="menu-btn" id="menu-btn" @click="opeSideBar">
        <span class="material-symbols-outlined"> menu </span>
      </button>
      <div class="dark-mode" @click="changeColrMode">
        <span class="material-symbols-outlined active"> light_mode </span>
        <span class="material-symbols-outlined"> dark_mode </span>
      </div>
      <div class="profile">
        <div class="info">
          <p>Hey,<b> Tim</b></p>
          <smal class="text-muted">Admin</smal>
        </div>
        <div class="profile-photo">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const opeSideBar = () => {
  const sideMenu = document.querySelector("aside");
  const backDrop = document.getElementById("backdrop");
  sideMenu.classList.add("aside-fixed");
  backDrop.style.display = "block";
};
const changeColrMode = () => {
  const darkmode = document.querySelector(".dark-mode");
  const root = document.documentElement;

  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", "dark");
  }
  darkmode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkmode.querySelector("span:nth-child(2)").classList.toggle("active");
};
</script>

<style lang="scss" scoped></style>
