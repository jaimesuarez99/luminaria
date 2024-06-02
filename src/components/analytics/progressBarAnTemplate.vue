<template>
  <Card :pt="{ body: '!p-4 !gap-2' }" :ptOptions="{ mergeProps: true }">
    <template #title>
      <h1><slot name="title">Disponibilidad del servicio</slot></h1>
    </template>
    <template #content>
      <div
        v-if="data"
        v-for="item in data"
        class="flex gap-1 items-center"
        :class="{ 'mb-6': data.length > 1 }"
      >
        <section class="flex flex-col items-end gap-4 w-full">
          <div class="flex items-center gap-4 w-full">
            <ProgressBar
              :showValue="false"
              class="w-full h-[2rem] lg:h-[2rem]"
              :value="item.progressValue"
            ></ProgressBar>
            <p>{{ item.progressValue }}%</p>
          </div>
          <div
            v-if="item.showLongNunmbers"
            class="rounded-xl border-2 max-w-min px-4 py-1 mr-[4rem]"
          >
            <p class="tex text-md font-medium">{{ item.subTitle }}</p>
          </div>
        </section>
        <div class="flex flex-col items-center gap-2">
          <span
            class="material-symbols-outlined text-4xl text-yellow-500 lg:text-5xl"
          >
            {{ item.iconName }}
          </span>
          <h2 class="text-center font-semibold text-md lg:text-lg !leading-5">
            {{ item.iconTitle }}
          </h2>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: null,
  },
});

//{
// progressValue: 0,
// showLongNunmbers: false,
// subTitle: "",
// iconName: "",
// iconTitle: "",
//},
</script>

<style lang="css" scoped></style>
