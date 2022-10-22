<template>
  <div class="mx-auto max-w-7xl">
    <!-- HEADER COMPONENT -->
    <HeaderDefault />
    <!-- CONTENT COMPONENT -->
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component class="mt-6 mb-6" :is="Component" />
      </transition>
    </router-view>
    <!-- FOOTER COMPONENT -->
    <FooterDefault />
  </div>
</template>

<script setup>
import HeaderDefault from '@/components/Header/HeaderDefault.vue';
import FooterDefault from '@/components/Footer/FooterDefault.vue';
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
