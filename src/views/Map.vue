<template>
  <div class="w-full flex gap-4">
    <Card
      class="flex-auto"
      :pt="{ body: '!p-4 !gap-2' }"
      :ptOptions="{ mergeProps: true }"
    >
      <template #title>
        <h1><slot name="title">Mapa</slot></h1>
      </template>
      <template #content>
        <googleMap />
      </template>
    </Card>
    <Card
      class="flex-auto max-w-[22rem]"
      :pt="{ body: '!p-4 !gap-2' }"
      :ptOptions="{ mergeProps: true }"
    >
      <template #title>
        <h1><slot name="title">Controles</slot></h1>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <Dropdown
            v-model="selectedOption"
            :options="option"
            optionLabel="label"
            placeholder="Filtros..."
            class="w-full"
          />
          <devicesList
            :zone-id="$route.params.id"
            @on-lm-clicked="handleLmClicked"
          />
          <mapLegend />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import devicesList from "@/components/devicesList.vue";
import mapLegend from "@/components/mapLegend.vue";
import googleMap from "@/components/googleMap.vue";

import { ref } from "vue";

const option = ref([
  { label: "Luminarias en funcionamiento", value: "working" },
  { label: "Luminarias por atender", value: "toServe" },
  { label: "Programadas para ser atendidas", value: "served" },
]);

const handleLmClicked = (event) => {
  console.log(event);
  return event;
};

const selectedOption = ref(null);
</script>
