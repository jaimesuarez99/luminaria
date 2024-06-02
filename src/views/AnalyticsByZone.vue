<template>
  <!-- <h1 class="fixed top-8 font-extrabold uppercase text-2xl tracking-wider">
    Zona > {{ $route.params.name }}
  </h1> -->
  <!-- <div>{{ $route.params.id }} {{ $route.params.name }}</div> -->
  <RouterView />
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col gap-5">
      <ProgressBarAnTemplate :data="staticData[0]">
        <template #title> Disponibilidad del servicio </template>
      </ProgressBarAnTemplate>
      <ProgressBarAnTemplate :data="staticData[1]">
        <template #title> Luminarias por atender </template>
      </ProgressBarAnTemplate>
      <ProgressBarAnTemplate :data="staticData[2]">
        <template #title> Tasa de fallas </template>
      </ProgressBarAnTemplate>
    </div>
    <div>Perro</div>
  </div>
</template>

<script setup>
import ProgressBarAnTemplate from "@/components/analytics/progressBarAnTemplate.vue";
import { ref } from "vue";

const staticData = ref([
  [
    {
      progressValue: 90,
      showLongNunmbers: true,
      subTitle: "2893/3000",
      iconName: "lightbulb",
      iconTitle: "Luminarias en funcionamiento",
    },
  ],
  [
    {
      progressValue: 4,
      showLongNunmbers: true,
      subTitle: "107/3000",
      iconName: "handyman",
      iconTitle: "Programa de reparaciones",
    },
  ],
  [
    {
      progressValue: 12,
      showLongNunmbers: false,
      subTitle: "",
      iconName: "bolt",
      iconTitle: "Errores en red eléctrica",
    },
    {
      progressValue: 35,
      showLongNunmbers: false,
      subTitle: "",
      iconName: "wifi",
      iconTitle: "Errores de conectividad",
    },
  ],
]);
</script>

<style></style>
