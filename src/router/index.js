import { createRouter, createWebHistory } from 'vue-router'
import homeView from '/Users/clasealphasas/Documents/Luminarias/src/views/HomeView.vue';
import sidebarMain from "../components/sidebar/sidebar-main.vue";
import headerTop from "../components/header/header.vue";
import Login from "../views/log-in.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: homeView,
        sidebarMain,
        headerTop,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        Login: Login
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
