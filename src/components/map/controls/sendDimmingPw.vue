<template>
  <div class="flex items-center w-full">
    <section class="flex flex-col gap-4">
      <Slider v-model="value" />
      <div class="flex gap-3">
        <button
          @click="value = item"
          v-for="(item, index) in preDefinedDimming"
          :key="index"
          class="block rounded-full w-8 h-8 bg-infodark text-center align-middle"
          :class="{ 'mr-3': index === 0 }"
        >
          <p class="text-sm text-white">{{ item }}</p>
        </button>
      </div>
    </section>
    <section class="flex grow gap-2 flex-col justify-center items-center">
      <p class="text-xl">{{ value }}%</p>
      <Button label="Enviar" severity="info" rounded size="small"></Button>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(0);
const preDefinedDimming = ref(["0", "25", "50", "75", "100"]);
</script>

<style lang="scss" scoped></style>
