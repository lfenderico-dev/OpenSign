<template>

  <div class="bg-[url(@/assets/photo/AuthBg.webp)] bg-cover bg-top min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-white mx-auto text-center pt-4 text-5xl font-bold pb-12">Welcome back!</h1>
    <div class="flex flex-row gap-4 justify-center">
      <button @click="loginWithGoogle" class="text-white bg-neutral-800 px-10 py-4 mb-12 rounded-full font-bold hover:transition hover:-translate-y-4 active:translate-y-0"><i class="fa-brands fa-google flex items-center justify-center"></i> Google</button>
    </div>

    <div class="flex justify-center flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-white font-bold" for="email"><i class="fa-solid fa-envelope text-white"></i> Email: </label>
        <input v-model="email"  type="email" class="text-emerald-500 bg-neutral-800 rounded-full text-xl p-2 focus:outline-0" name="email" id="emaiò">
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-white font-bold" for="password"><i class="fa-solid fa-lock text-white"></i> Password: </label>
        <input v-model="password"  type="password" class="text-emerald-500 bg-neutral-800 rounded-full text-xl p-2 focus:outline-0" name="password" id="password">
      </div>

      <div class="text-white flex justify-center text-lg mt-4">{{ errorMessage }}</div>

      <button @click="login" class="text-xl mx-auto block my-4 px-[25%] py-4 rounded-full font-bold bg-emerald-500 text-white shadow-2xl shadow-emerald-900 hover:transition hover:-translate-y-4 active:translate-y-0">Enter</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { useRouter } from 'vue-router';


const email = ref()
const password = ref()
const router = useRouter()
const errorMessage = ref()

const auth = getAuth()
const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then(() => {
    console.log('Successfully signed up!')
    console.log(auth.currentUser)
    router.push('/Dashboard')
  })
  .catch((error)=>{
    console.log(error.code);
    switch(error.code){
      case "auth/invalid-email":
        errorMessage.value = 'Invalid email';
        break;
      default:
        errorMessage.value = 'Email or password was incorrect';
        break;
    }
  });
}

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result)=>{
      console.log(result.user);
      router.push('/Dashboard');
    })
    .catch((error)=>{
      console.log(error.code)
      alert('authentication failed')
    })
}
</script>

<style scoped>

</style>

