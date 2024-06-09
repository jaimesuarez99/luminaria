<template>
  <div class="p-1 max-h-40 overflow-y-scroll overflow-x-hidden">
    <ul class="list-none">
      <li
        v-for="(device, index) in deviceList"
        :key="index"
        class="flex gap-2 m-1 p-1 rounded-sm hover:bg-light cursor-pointer"
      >
        <span class="material-symbols-outlined text-md"> table_lamp </span>
        <p class="text-nowrap text-sm">
          {{ device.device_label }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { getDevicesByType } from "@/utils/getSalentoDevices";

const deviceList = ref(null);

onBeforeMount(() => {
  handleDevices();
});

const props = defineProps({
  zoneId: {
    type: String,
    default: undefined,
  },
});

const handleDevices = async () => {
  deviceList.value = await getDevicesByType(undefined, props.zoneId);
};
</script>

<style scoped></style>
