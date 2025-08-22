<template>
  <div class="bg-transparent flex flex-col gap-4 w-[100%] ">
    <div class="flex flex-row gap-4 justify-center">
      <button class="text-white bg-neutral-800 px-10 py-4 rounded-full font-bold hover:transition hover:-translate-y-4 active:translate-y-0"><i class="fa-brands fa-google flex items-center justify-center"></i> Google</button>
      <button class="text-white bg-neutral-800 px-10 py-4 rounded-full font-bold hover:transition hover:-translate-y-4 active:translate-y-0"><i class="fa-brands fa-apple flex items-center justify-center"></i> Apple</button>
    </div>

<hr class="mx-auto w-full h-2 bg-white border-0 rounded-sm my-4">

    <div class="flex justify-center flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-white font-bold" for="username"><i class="fa-solid fa-user text-white"></i> Username: </label>
        <input type="text" class="text-emerald-500 bg-neutral-800 rounded-full text-xl p-2 focus:outline-0" name="username" id="username">
      </div>

            <div class="flex flex-col gap-2">
        <label class="text-white font-bold" for="email"><i class="fa-solid fa-envelope text-white"></i> Email: </label>
        <input type="email" class="text-emerald-500 bg-neutral-800 rounded-full text-xl p-2 focus:outline-0" name="email" id="emaiò">
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-white font-bold" for="password"><i class="fa-solid fa-lock text-white"></i> Password: </label>
        <input type="password" class="text-emerald-500 bg-neutral-800 rounded-full text-xl p-2 focus:outline-0" name="password" id="password">
      </div>

      <button class="text-xl mx-auto block my-4 px-[25%] py-4 rounded-full font-bold bg-emerald-500 text-white shadow-2xl shadow-emerald-900 hover:transition hover:-translate-y-4 active:translate-y-0">{{ buttonMessage }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  buttonMessage: string
}>();
</script>

<style scoped>

</style>
