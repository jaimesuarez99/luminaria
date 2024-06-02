<template>
  <a class="dropdown-btn" @click="() => (dpActive = !dpActive)" v-if="hasName">
    <span class="material-symbols-outlined">
      {{ (props, symbolName) }}
    </span>
    <h3>{{ props.name }}</h3>
    <i
      class="fa fa-caret-down origin-center transition-all"
      :class="{ 'rotate-0': dpActive, 'rotate-[-90deg]': !dpActive }"
    ></i>
  </a>
  <transition name="fade">
    <div class="dropdown-container" v-show="dpActive && hasItems">
      <RouterLink
        v-for="(item, index) in props.items"
        :key="index"
        :to="item.to"
      >
        <h3>{{ item.name }}</h3>
      </RouterLink>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: null,
  },
  items: {
    type: Array,
    required: false,
    default: [],
  },
  symbolName: {
    type: String,
    default: "design_services",
  },
});

const hasName = computed(() => props.name !== null && props.name !== "");
const hasItems = computed(() => props.items.length > 0);

const dpActive = ref(false);
</script>

<style>
.dropdown-btn-active {
  background-color: green;
  color: white;
}
.dropdown-container-active {
  display: block !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
