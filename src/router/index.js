import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Modules/Home/views/home.vue'
import page404 from '../views/404.vue'

// modules
const login = () => import('../Modules/Auth/views/Login.vue') 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name:'/login',
      component: login
    },  
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: page404
    },  
   
  ]
})

export default router
