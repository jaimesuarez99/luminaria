<template>
  <template v-for="item in items" :key="item.to">
    <SidebarDropdown
      v-if="item.items?.length > 0"
      :items="item.items"
      :name="item.name"
      :symbolName="item.symbol"
    />
    <sidebarItem
      v-else
      :to="item.to"
      :name="item.name"
      :symbolName="item.symbol"
      :messageCount="item.messageCount"
    />
  </template>
</template>

<script setup>
import sidebarItem from "./sidebar-item.vue";
import SidebarDropdown from "./sidebar-dropdown.vue";
import { getZonesList, getDevicesByType } from "@/utils/getSalentoDevices";

import { ref, onMounted } from "vue";
const items = ref([
  { name: "Dashboard", symbol: "dashboard", to: "/" },
  {
    name: "Proyectos",
    symbol: "event_list",
    to: "/fsa",
    items: [],
  },
  { name: "Log Out", symbol: "logout", to: "/8" },
]);

onMounted(async () => {
  await getZones();
});

const getZones = async () => {
  const lmZoneList = await getZonesList();
  assignItems(lmZoneList, 1);
};

const assignItems = (elements, assignIndex) => {
  elements.forEach((element) => {
    items.value[assignIndex].items.push({
      name: element.name,
      to: `/project/${element.zone_id}/${element.name}/`,
    });
  });
};
</script>

<style lang="scss" scoped></style>
