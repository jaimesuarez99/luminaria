<template>
  <div class="p-1 max-h-40 overflow-y-scroll overflow-x-hidden">
    <ul class="list-none">
      <li
        v-for="(device, index) in deviceList"
        @click="handleClick(device)"
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

const handleClick = (device) => {
  const data = { gps_lat: device.gps_lat, gps_lon: device.gps_lon };
  emit("onLmClicked", data);
};

const emit = defineEmits(["onLmClicked"]);
</script>

<style scoped></style>
