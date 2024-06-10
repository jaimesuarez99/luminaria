<template>
  <div class="flex justify-center items-center">
    <apexchart
      width="150px"
      height="100%"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  dimmingLevel: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const series = ref([props.dimmingLevel]);
const chartOptions = ref({
  chart: {
    type: "radialBar",
    offsetY: 15,
    offsetX: 15,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 10, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 0.2,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: true,
          offsetY: 10,
          fontSize: "0.7rem",
          fontWeight: "normal",
          fontFamily: "Rethink Sans, sans-serif",
          color: "#373d3f",
        },
        value: {
          offsetY: -30,
          fontSize: "1.1rem",
          fontWeight: "bold",
          fontFamily: "Rethink Sans, sans-serif",
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  labels: ["Dimming Level"],
});

watch(
  () => props.isActive,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        series.value = [props.dimmingLevel];
      }, 300);
    }
  }
);
</script>

<style lang="scss" scoped></style>
