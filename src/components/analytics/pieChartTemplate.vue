<template>
  <Card
    :pt="{ body: '!p-4 !gap-2' }"
    :ptOptions="{ mergeProps: true }"
    class="h-full"
  >
    <template #title>
      <h1><slot name="title"> Alarmas pendientes</slot></h1>
    </template>
    <template #content>
      <apexchart
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
  chart: {
    fontFamily: "Rethink Sans, sans-serif",
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -18,
      },
    },
  },
  labels: [
    "Potencia baja",
    "Sobrevoltaje",
    "Subvoltaje",
    "Nodo sin comunicación",
  ],
  colors: ["#3b7cf6", "#f6b13b", "#f63b3b", "#b0b0b0"],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "0.8rem",
      fontWeight: "bold",
      fontFamily: "Rethink Sans, sans-serif",
    },
    background: {
      enabled: false,
    },
    dropShadow: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
          height: 350,
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 1280,
      options: {
        chart: {
          width: "100%",
          height: 300,
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 1920,
      options: {
        chart: {
          width: "100%",
          height: 300,
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
