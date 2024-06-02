<template>
  <div
    class="flex justify-center items-center gap-8 mx-8 py-6 flex-wrap md:flex-nowrap md:h-full"
  >
    <template v-for="project in projectsTemplate">
      <Projects
        :title="project.title"
        :text="project.text"
        :href="project.href"
        :image-url="project.imageUrl"
      />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Projects from "@/components/home/projects.vue";

const projectsTemplate = ref([
  {
    title: "Alumbrado Público",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1530575786986-06744b3d4073?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "96",
  },
  {
    title: "Calidad del aire",
    href: "/",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664693751126-a8a38ad51fb5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "80",
  },
  {
    title: "Parqueo inteligente",
    href: "",
    imageUrl:
      "https://images.unsplash.com/photo-1545179605-1296651e9d43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "87",
  },
  {
    title: "Cámaras de seguridad",
    href: "",
    imageUrl:
      "https://images.unsplash.com/photo-1529775983207-b68e16037a7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "98",
  },
]);
</script>

<style lang="scss" scoped></style>
