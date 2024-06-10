<template>
  <Card :pt="{ body: '!p-4 !gap-2' }" :ptOptions="{ mergeProps: true }">
    <template #title>
      <h3>Detalles</h3>
    </template>
    <template #content>
      <ul class="mb-1">
        <li class="flex items-center justify-between py-1">
          <p class="text-sm">Device ID</p>
          <p class="font-bold text-xs">3242343232532</p>
        </li>
        <li class="flex items-center justify-between py-1">
          <p class="text-sm">Node MAC</p>
          <p class="font-bold text-xs">3242343232532</p>
        </li>
        <li class="flex items-center justify-between py-1">
          <p class="text-sm">Gateway Label</p>
          <p class="font-bold text-xs">3242343232532</p>
        </li>
        <li class="flex items-center justify-between py-1">
          <p class="text-sm">Gateway Name</p>
          <p class="font-bold text-xs">3242343232532</p>
        </li>
        <li class="flex items-center justify-between py-1">
          <p class="text-sm">Last data</p>
          <p class="font-bold text-xs">3242343232532</p>
        </li>
      </ul>
      <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <TabView scrollable v-model:activeIndex="activeTab">
        <TabPanel header="General">
          <section class="flex items-center mb-1">
            <ul class="divide-y grow">
              <li class="flex items-center justify-between py-1">
                <p class="text-sm">Time Stamp</p>
                <p class="font-bold text-xs">{{ data.time_stamp }}</p>
              </li>
              <li class="flex items-center justify-between py-1">
                <p class="text-sm">Active power (W)</p>
                <p class="font-bold text-xs">{{ data.active_power }}</p>
              </li>
              <li class="flex items-center justify-between py-1">
                <p class="text-sm">V rms (V)</p>
                <p class="font-bold text-xs">{{ data.V_rms }}</p>
              </li>
              <li class="flex items-center justify-between py-1">
                <p class="text-sm">I rms (A)</p>
                <p class="font-bold text-xs">{{ data.I_rms }}</p>
              </li>
            </ul>
            <dimmingPower
              :dimmingLevel="data.light_dimming_status"
              :isActive="activeTab === 0"
            />
          </section>
          <sendDimmingPw />
        </TabPanel>
        <TabPanel header="Medidas">
          <p class="m-0">2</p>
        </TabPanel>
        <TabPanel header="Comandos">
          <p class="m-0">3</p>
        </TabPanel>
      </TabView>
      <!-- <p v-for="(value, key) in data" :key="key">
        <strong>{{ formatLabel(key) }}:</strong> {{ value }}
      </p>
      <button>Cerrar</button> -->
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import dimmingPower from "./map/charts/dimmingPower.vue";
import sendDimmingPw from "./map/controls/sendDimmingPw.vue";
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const activeTab = ref(0); // Index de la pestaña activa
const formatLabel = (label) => {
  return label.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
</script>

<style>
.p-tabview-panels {
  padding: 0 !important;
}
</style>
