<template>
  <div class="bg-[url(@/assets/photo/AuthBg.webp)] bg-cover bg-bottom min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-white mx-auto text-center pt-4 text-5xl font-bold pb-12">Create an account</h1>
    <div class="flex justify-center items-center"><AuthenticationComp buttonMessage="Create"/></div>
  </div>
</template>

<script setup lang="ts">
import AuthenticationComp from '@/components/AuthenticationComp.vue';
</script>

<style scoped>

</style>
