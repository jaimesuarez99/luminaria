<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="flex flex-col gap-5">
      <ProgressBarAnTemplate :data="staticData[0]">
        <template #title> Disponibilidad del servicio </template>
      </ProgressBarAnTemplate>
      <ProgressBarAnTemplate :data="staticData[1]">
        <template #title> Luminarias por atender </template>
      </ProgressBarAnTemplate>
    </div>
    <div><PieChartTemplate></PieChartTemplate></div>
    <ProgressBarAnTemplate :data="staticData[2]" class="md:col-span-2">
      <template #title> Tasa de fallas </template>
    </ProgressBarAnTemplate>
  </div>
</template>

<script setup>
import ProgressBarAnTemplate from "@/components/analytics/progressBarAnTemplate.vue";
import PieChartTemplate from "@/components/analytics/pieChartTemplate.vue";
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

<style lang="scss" scoped></style>
