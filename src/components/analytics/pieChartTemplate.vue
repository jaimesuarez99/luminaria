<template>
  <Card :pt="{ body: '!p-4 !gap-2' }" :ptOptions="{ mergeProps: true }">
    <template #title>
      <h1><slot name="title"> Alarmas pendientes</slot></h1>
    </template>
    <template #content>
      <apexchart
        width="500"
        type="pie"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";
const series = ref([17, 22, 45, 16]);
const chartOptions = ref({
  chart: {},
  labels: [
    "Potencia baja",
    "Sobrevoltaje",
    "Subvoltaje",
    "Nodo sin comunicación",
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
});
</script>

<style lang="scss" scoped></style>
