import HeroSection from '@/view/HeroSection.vue'
import LogInSection from '@/view/LogInSection.vue'
import SignUpSection from '@/view/SignUpSection.vue'
import DashboardSection from '@/view/DashboardSection.vue'
import { createRouter, createWebHistory } from 'vue-router'
import {getAuth, onAuthStateChanged} from "firebase/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HeroSection',
      component: HeroSection
    },
    {
      path: '/LogIn',
      name: 'LogInSection',
      component: LogInSection
    },
    {
      path: '/SignUp',
      name: 'SignUpSection',
      component: SignUpSection
    },
    {
      path: '/Dashboard',
      name: 'DashboardSection',
      component: DashboardSection,

      meta: {
        requiresAuth: true,
      }
    },
  ],
})

const getCurrentUser = () => {
  return new Promise((resolve, reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record)=> record.meta.requiresAuth)){
    if (await getCurrentUser){
      next();
    } else{
      alert("Access denied");
      next('/');
    }
  } else{
    next();
  }
});


export default router
