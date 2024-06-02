<template>
  <RouterView />

  <!-- <Card>
    <template #header> <h2>Luminarias</h2> </template>
    <template #content>
      <div class="card flex justify-content-left gap-4 align-items-center">
        <label> Selecciona la zona que quieres ver</label>
        <Dropdown
          @change="getZoneDevicesList"
          v-model="lmSelectedZone"
          :options="lmZoneList"
          optionLabel="name"
          placeholder="Select a Zone"
          class="w-full md:w-14rem"
        />
      </div>
      <DataTable :value="devices" tableStyle="">
        <Column field="device_uid" header="UID"></Column>
        <Column field="device_label" header="Name"></Column>
      </DataTable>
    </template>
  </Card> -->
</template>

<script setup>
// import { ref, onMounted } from "vue";
// import { getZonesList, getDevicesByType } from "@/utils/getSalentoDevices";
// const lmZoneList = ref([]);
// const lmSelectedZone = ref();
// const devices = ref();

// onMounted(async () => {
//   getZones();
// });

// const getZones = async () => {
//   lmZoneList.value = await getZonesList();
// };

// const getZoneDevicesList = async () => {
//   devices.value = await getDevicesByType(1, lmSelectedZone.value.zone_id);
// };
</script>

<style lang="scss" scoped></style>
