<template>
  <div
    class="flex justify-center items-center gap-8 mx-8 py-6 flex-wrap md:flex-nowrap md:h-full"
  >
    <template v-for="project in projectsTemplate">
      <Projects
        :title="project.title"
        :text="project.text"
        :href="project.href"
        :disabled="project.disabled"
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
    imageUrl: "/alumbrado-publico.jpg",
    text: "96",
    disabled: false,
  },
  {
    title: "Calidad del aire",
    href: "/",
    imageUrl: "/calidad-aire.jpg",
    text: "80",
    disabled: true,
  },
  {
    title: "Parqueo inteligente",
    href: "",
    imageUrl: "/parqueo-inteligente.jpg",
    text: "87",
    disabled: true,
  },
  {
    title: "Cámaras de seguridad",
    href: "",
    imageUrl: "/camara-seguridad.jpg",
    text: "98",
    disabled: true,
  },
]);
</script>

<style lang="scss" scoped></style>
