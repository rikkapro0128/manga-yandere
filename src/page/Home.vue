<template>
  <div class="sm:px-6 grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
    <CardDefault :key="temp" v-for="temp in 7" />
  </div>
</template>

<script setup>
import CardDefault from '@/components/Card/CardDefault.vue';
</script>