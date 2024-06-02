<template>
  <router-link
    :to="props.href"
    class="max-w-[18rem] drop-shadow-2xl transition-all origin-center group hover:scale-105 [&_*]:border-white [&_*]:transition-all"
  >
    <div class="w-full">
      <span
        class="block w-fit p-2 bg-secondary text-white text-center font-medium rounded-t-lg group-hover:border-x-2 group-hover:border-t-2"
        >{{ props.text }}%</span
      >
    </div>
    <img
      class="object-contain rounded-tr-lg group-hover:border-x-2"
      :src="props.imageUrl"
    />
    <div
      class="flex justify-center items-center min-h-[6rem] px-2 bg-secondary rounded-b-lg group-hover:border-x-2 group-hover:border-b-2"
    >
      <h1 class="text-2xl font-bold text-white text-center">
        {{ props.title }}
      </h1>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
  text: {
    type: String,
    default: "",
    required: true,
  },
  href: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
