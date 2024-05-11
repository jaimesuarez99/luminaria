<template>
  <div>
    <Card>
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
        <DataTable :value="devices" tableStyle="min-width: 50rem">
          <Column field="device_uid" header="UID"></Column>
          <Column field="device_label" header="Name"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { getZonesList, getDevicesByType } from "@/utils/getSalentoDevices";
const token =
  "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.kdhRpxF0FiWPyO3bdGdRrW-WT-ikLN5GWix-RM4iVWTqzsbgv16NO-qeDjRDu665ZsKJLJZFCCdPJGuUaerWGTE4N_LdI9fC.3HRuOvOvTg-BAIupPtdKnw.jUuUuE-SGZ6z5HPnY_XwIZQCS5RBxejPcwbI2w0_DvEn0pLcl8dpgvdNLGnUpFCy-E9O_65A7s_mssejQDjP_RWyYxwovS0zW-EFUrW6Xnp0e4JxpnQ4ePPHhSbQM60l-6pojxxAQ-WMLjikHVOb5EnnUaNg8zH-weYVT8lL9ueIIPTgY6czl_eexPGyza9f_txVPyZvYLUQXnm5YpxjCWCYsd2AYeTV-EyMzM24zEUYb2SFJlDy4rSjm0qvG94W.mQzMQRkbmpppxlZvC2Vz2DUK-pawfQlC23XDM5to8eU";

const lmZoneList = ref([]);
const lmSelectedZone = ref();
const devices = ref();

onMounted(() => {
  getZones();
});

const getZones = async () => {
  lmZoneList.value = await getZonesList(token);
};

const getZoneDevicesList = async () => {
  devices.value = await getDevicesByType(
    token,
    1,
    lmSelectedZone.value.zone_id
  );
};
</script>

<style lang="scss" scoped></style>
