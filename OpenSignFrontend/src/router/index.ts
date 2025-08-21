import HeroSection from '@/view/HeroSection.vue'
import LogInSection from '@/view/LogInSection.vue'
import SignUpSection from '@/view/SignUpSection.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
  ],
})

export default router
