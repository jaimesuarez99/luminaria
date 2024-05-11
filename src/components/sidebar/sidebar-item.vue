<template>
  <router-link :to="to">
    <span class="material-symbols-outlined">
      {{symbolName}}
    </span>
    <h3>{{name}}</h3>
    <span v-if="messageCount.isActive"  class="message-count">{{messageCount.count}}</span>
  </router-link>
</template>

<script setup>

const props = defineProps({
  to:{
    type: String,
    default: ''
  },
  symbolName:{
    type: String,
    default: 'design_services'
  },
  name:{
    type:String,
    default:'Put A Name'
  },
  messageCount:{
    type:Object,
    default:{ isActive:false, count:0}
  },
})


</script>

<style lang="scss" scoped>

</style>