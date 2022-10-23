<template>
  <div class="grid grid-cols-5 -mx-[6px]">
    <div
      class="w-[40px] h-[40px] mx-[6px] bg-slate-300 rounded-full cursor-pointer bg-[-32px_-8px] bg-[length:820%] bg-no-repeat"
      :style="ImageReact"></div>
    <div
      class="w-[40px] h-[40px] mx-[6px] bg-slate-300 rounded-full cursor-pointer bg-[length:820%] bg-no-repeat bg-[-32px_-64px]"
      :style="ImageReact"></div>
    <div
      class="w-[40px] h-[40px] mx-[6px] bg-slate-300 rounded-full cursor-pointer bg-[length:820%] bg-no-repeat bg-[-200px_-64px]"
      :style="ImageReact"></div>
    <div
      class="w-[40px] h-[40px] mx-[6px] bg-slate-300 rounded-full cursor-pointer bg-[length:820%] bg-no-repeat bg-[-200px_-8px]"
      :style="ImageReact"></div>
    <div
      class="w-[40px] h-[40px] mx-[6px] bg-slate-300 rounded-full cursor-pointer bg-[length:820%] bg-no-repeat bg-[-87px_-8px]"
      :style="ImageReact"></div>
  </div>
</template>

<script setup>

const ImageReact = { backgroundImage: 'url(' + require(`@/assets/image/emotion/react.gif`) + ')' }

</script>