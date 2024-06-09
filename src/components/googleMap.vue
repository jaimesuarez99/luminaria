<template>
  <div>
    <select @change="zoomToLocation">
      <option v-for="(location, index) in locations" :key="index" :value="index">
        {{ location.name }}
      </option>
    </select>
    <GMapMap
      ref="mapRef"
      :center="center"
      :zoom="zoom"
      :options="options"
      map-type-id="roadmap"
      style="width: 100%; height: 80vh"
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

    <div v-if="selectedLight" :style="infoCardStyle" class="light-info-card">
      <h3>Light Info</h3>
      <p v-for="(value, key) in selectedLight" :key="key">
        <strong>{{ formatLabel(key) }}:</strong> {{ value }}
      </p>
      <button @click="selectedLight = null">Close</button>
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

export default {
  name: "App",
  setup() {
    const route = useRoute();
    const mapRef = ref(null);
    const center = ref({ lat: 6.33732, lng: -75.55795 });
    const zoom = ref(15); // Add zoom as a reactive reference
    const markers = ref([]);
    const selectedLight = ref(null);
    const infoCardStyle = ref({});
    const locations = ref([
      { name: "Location 1", lat: 4.639373, lng: -75.571208 },
      { name: "Location 2", lat: 4.638856, lng: -75.570312 },
      // Add more locations as needed
    ]);

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
      if (devicesInfo) {
        markers.value = devicesInfo.map((device) => ({
          device_uid: device.device_uid,
          device_label: device.device_label,
          position: {
            lat: parseFloat(device.assigned_lat),
            lng: parseFloat(device.assigned_lon),
          },
          icon: "/public/bulb.png",
        }));
      }

      // IN CASE WE NEED TO UPDATE THE ZOOM VALUE
      // const map = mapRef.value.$mapObject;
      // map.addListener('zoom_changed', () => {
      //   zoom.value = map.getZoom();
      // });
    };

    const showLightInfo = async (marker) => {
      selectedLight.value = await getDeviceInfo(marker.device_uid);
      setInfoCardPosition(marker.position);
    };

    const setInfoCardPosition = (position) => {
      const map = mapRef.value.$mapObject;
      const scale = Math.pow(2, map.getZoom());
      const nw = new google.maps.LatLng(
        map.getBounds().getNorthEast().lat(),
        map.getBounds().getSouthWest().lng()
      );
      const worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
      const worldCoordinate = map
        .getProjection()
        .fromLatLngToPoint(new google.maps.LatLng(position.lat, position.lng));
      const pixelOffset = new google.maps.Point(
        Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
        Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
      );

      infoCardStyle.value = {
        top: `${pixelOffset.y}px`,
        left: `${pixelOffset.x}px`,
        position: "absolute",
        transform: "translate(-5%, -10%)",
      };
    };

    const formatLabel = (label) => {
      return label.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    };

    const zoomToLocation = (event) => {
      const selectedIndex = event.target.value;
      const selectedLocation = locations.value[selectedIndex];
      if (selectedLocation) {
        const map = mapRef.value.$mapObject;
        smoothPanTo(map, selectedLocation, 20);
      }
    };

    const smoothPanTo = (map, targetPosition, targetZoom) => {
      const panDuration = 1000; // Pan duration in milliseconds
      const startCenter = map.getCenter();
      const startZoom = map.getZoom();
      const start = performance.now();

      const animate = (time) => {
        const progress = (time - start) / panDuration;
        if (progress < 1) {
          const currentLat = startCenter.lat() + (targetPosition.lat - startCenter.lat()) * progress;
          const currentLng = startCenter.lng() + (targetPosition.lng - startCenter.lng()) * progress;
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
      showLightInfo,
      formatLabel,
      infoCardStyle,
      locations,
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
};
</script>

<style>
.light-info-card {
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #5d5d5d;
}

.light-info-card h3 {
  margin-top: 0;
}

.light-info-card button {
  margin-top: 1rem;
}
</style>
