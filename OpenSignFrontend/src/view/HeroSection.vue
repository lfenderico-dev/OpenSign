<template>
  <div class="flex flex-col h-screen lg:flex-row-reverse">
    <div class="w-full h-[50vh] sm:h-[60vh] lg:h-full overflow-y-hidden">
      <img src="@/assets/photo/HeroBg.webp" class="object-top object-cover h-full w-full">
    </div>


    <div class="bg-neutral-800 text-white z-10 flex-1 -mt-8 justify-center rounded-t-4xl lg:rounded-t-none lg:-m-0 lg:-mr-8 lg:rounded-r-4xl lg:shadow-[0_12px_24px_12px_]  shadow-[0_-12px_24px_2px_] shadow-black flex flex-col gap-2 lg:px-8 lg:text-center">
      <h1 class="mx-4 mt-10 text-5xl md:text-8xl lg:text-7xl xl:text-8xl font-bold">Welcome to OpenSign</h1>
      <p class="ml-4 mr-16 mt-4 text-sm md:text-lg lg:text-sm xl:text-lg lg:mx-auto italic">The place where you can learn sign language easly and naturally.</p>
      <router-link to="/LogIn"><button class="text-xl md:text-4xl lg:text-2xl xl:text-4xl mx-auto block my-2 lg:my-4 px-[28vw] lg:px-[12vw] py-4 rounded-full font-bold bg-emerald-500 text-white shadow-2xl shadow-emerald-900 hover:transition hover:-translate-y-4 active:translate-y-0">Get started</button></router-link>
      <router-link to="SignUp"><button class="text-xl md:text-4xl lg:text-2xl xl:text-3xl mx-auto block my-0 lg:my-4 px-[28vw] lg:px-[6vw] py-4 rounded-full font-bold text-emerald-500/60 hover:transition hover:-translate-y-4 active:translate-y-0">I already have an account</button></router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
