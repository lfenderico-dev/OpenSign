import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-ZGko7jY27d0F7n8bhl2ek09dhXSrA4",
  authDomain: "opensign-fe349.firebaseapp.com",
  projectId: "opensign-fe349",
  storageBucket: "opensign-fe349.firebasestorage.app",
  messagingSenderId: "167746369480",
  appId: "1:167746369480:web:9a07e45a1483f8312572fd",
  measurementId: "G-G31CB748KV"
};

 initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
