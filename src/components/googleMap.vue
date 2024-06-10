<template>
  <div class="relative">
    <GMapMap
      ref="mapRef"
      :center="center"
      :zoom="zoom"
      :options="options"
      map-type-id="roadmap"
      style="width: 100%; height: 74dvh"
    >
      <GMapCluster :minimumClusterSize="1" :zoomOnClick="true">
        <GMapMarker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          :icon="marker.icon"
          @click="showLightInfo(marker)"
        />
      </GMapCluster>
    </GMapMap>

    <div v-if="selectedLight" class="absolute top-0 right-0">
      <ligthInfo :data="selectedLight" />
    </div>
  </div>
</template>

<script>
import {
  getZoneInfo,
  getDevicesByType,
  getDeviceInfo,
} from "@/utils/getSalentoDevices";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ligthInfo from "./ligthInfo.vue";

export default {
  name: "googleMap",
  props: ["selectedLmUid"],
  setup() {
    const route = useRoute();
    const mapRef = ref(null);
    const center = ref({ lat: 6.33732, lng: -75.55795 });
    const zoom = ref(15); // Add zoom as a reactive reference
    const markers = ref([]);
    const selectedLight = ref(null);
    const selectedMarker = ref(null);
    const infoCardStyle = ref({});

    const setupMap = async () => {
      console.log(route.params.id);
      const zoneInfo = await getZoneInfo(route.params.id);
      if (zoneInfo && zoneInfo.center_lat && zoneInfo.center_lon) {
        center.value = {
          lat: parseFloat(zoneInfo.center_lat),
          lng: parseFloat(zoneInfo.center_lon),
        };
      }

      const devicesInfo = await getDevicesByType(1, route.params.id);
      console.log('marker devInfo:', devicesInfo)
      if (devicesInfo) {
        markers.value = devicesInfo.map((device) => ({
          device_uid: device.device_uid,
          device_label: device.device_label,
          device_MAC: device.MAC,
          gateway_MAC: device.gateway_MAC,
          device_type_id: device.device_type_id,
          device_instance: device.device_instance,
          position: {
            lat: parseFloat(device.gps_lat),
            lng: parseFloat(device.gps_lon),
          },
          icon: "/bulb.png",
        }));
      }

      // IN CASE WE NEED TO UPDATE THE ZOOM VALUE
      // const map = mapRef.value.$mapObject;
      // map.addListener('zoom_changed', () => {
      //   zoom.value = map.getZoom();
      // });
    };

    const showLightInfo = async (marker) => {
      console.log("showLightInfo", marker);
      selectedMarker.value = Object.assign(marker);
      zoomToLocation(marker.position);
      const deviceInfo = await getDeviceInfo(marker.device_uid);
      selectedLight.value = {...deviceInfo, ...marker}
      // setInfoCardPosition(marker.position);
    };

    const formatLabel = (label) => {
      return label.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    };

    const zoomToLocation = (event) => {
      const map = mapRef.value.$mapObject;
      smoothPanTo(map, event, 20);
    };

    const smoothPanTo = (map, targetPosition, targetZoom) => {
      const panDuration = 1000; // Pan duration in milliseconds
      const startCenter = map.getCenter();
      const startZoom = map.getZoom();
      const start = performance.now();

      const animate = (time) => {
        const progress = (time - start) / panDuration;
        if (progress < 1) {
          const currentLat =
            startCenter.lat() +
            (targetPosition.lat - startCenter.lat()) * progress;
          const currentLng =
            startCenter.lng() +
            (targetPosition.lng - startCenter.lng()) * progress;
          const currentZoom = startZoom + (targetZoom - startZoom) * progress;
          map.setCenter({ lat: currentLat, lng: currentLng });
          map.setZoom(currentZoom);
          requestAnimationFrame(animate);
        } else {
          map.setCenter(targetPosition);
          map.setZoom(targetZoom);
        }
      };

      requestAnimationFrame(animate);
    };

    onMounted(() => {
      setupMap();
      const selectedZone = sessionStorage.getItem("zonesList");
      console.log(`Selected Zone: ${selectedZone}`);
    });

    return {
      center,
      zoom,
      markers,
      selectedLight,
      selectedMarker,
      showLightInfo,
      formatLabel,
      infoCardStyle,
      options: {
        mapId: "ea4d36c80703bba4",
        zoomControl: true,
        scrollwheel: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      },
      mapRef,
      zoomToLocation,
    };
  },
  watch: {
    selectedLmUid(uid) {
      // this.selectedLight = null;
      const marker = Object.assign(
        this.markers.find((el) => el.device_uid === uid)
      );
      this.showLightInfo(marker);
    },
    selectedMarker(newVal) {
      console.log("data:", newVal);
      const data = newVal !== null ? newVal.device_uid : null;
      this.$emit("onSelectedLm", data);
    },
  },
  components: { ligthInfo },
};
</script>

<style></style>
