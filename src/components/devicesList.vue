<template>
  <section>
    <p>Luminarias disponibles</p>
    <div class="p-1 max-h-40 overflow-y-scroll overflow-x-hidden">
      <ul class="list-none">
        <li
          v-for="(device, index) in deviceList"
          @click="handleClick(device)"
          :key="index"
          ref="deviceRefs"
          class="flex gap-2 m-1 p-1 rounded-sm hover:bg-light cursor-pointer"
          :class="{ 'bg-light': selectedLmUid === device.device_uid }"
        >
          <span class="material-symbols-outlined text-md"> table_lamp </span>
          <p class="text-nowrap text-sm">
            {{ device.device_label }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { getDevicesByType } from "@/utils/getSalentoDevices";

const deviceList = ref(null);
const selectedLmUid = ref(null);
const deviceRefs = ref([]);
onBeforeMount(() => {
  handleDevices();
});

const props = defineProps({
  zoneId: {
    type: String,
    default: undefined,
  },
  selectedLmUid: {
    type: String,
    default: null,
  },
});

const handleDevices = async () => {
  deviceList.value = await getDevicesByType(undefined, props.zoneId);
};

const handleClick = (device) => {
  selectedLmUid.value = device.device_uid;
  emit("onLmClicked", device.device_uid);
};

const scrollFocus = () => {
  const index = deviceList.value.findIndex(
    (el) => el.device_uid == selectedLmUid.value
  );
  console.log("index", index);
  // Hacer scroll al elemento seleccionado
  if (deviceRefs.value[index]) {
    deviceRefs.value[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

watch(
  () => props.selectedLmUid,
  (newVal) => {
    selectedLmUid.value = newVal;
    scrollFocus();
  }
);

const emit = defineEmits(["onLmClicked"]);
</script>

<style scoped></style>
