<template>
    <sidebarItem v-for="item in items" :key="item.to" :to="item.to" :name="item.name" :symbolName="item.symbol" :messageCount="item.messageCount"/>
</template>

<script setup>
import sidebarItem from './sidebar-item.vue';
import { ref } from 'vue';
const items = ref([
{name: 'Dashboard',symbol:'dashboard', to:'/'},
{name:'Users', symbol:'person_outline', to:'/1'},
{name:'Analytics', symbol:'insights', to:'/2'},
{name:'Tickets', symbol:'mail_outline', to:'/3', messageCount:{isActive:true,count:27}},
{name:'Sale List',symbol:'inventory', to:'/4'},
{name:'Reports', symbol:'inventory_2', to:'/5'},
{name:'Settings', symbol:'settings', to:'/6'},
{name:'New Login', symbol:'add', to:'/7'},
{name:'Log Out',symbol:'logout', to:'/8'}]);

</script>

<style lang="scss" scoped>

</style>