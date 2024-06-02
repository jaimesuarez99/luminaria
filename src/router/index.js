import { createRouter, createWebHistory } from 'vue-router'
import homeView from '/Users/clasealphasas/Documents/Luminarias/src/views/HomeView.vue';
import LogIn from '../views/log-in.vue';
import Home from '@/views/Home.vue';
import AnalyticsByZone from '@/views/AnalyticsByZone.vue';
import GeneralAnalytics from '@/views/GeneralAnalytics.vue';
import General from '@/views/General.vue'
import Map from '@/views/Map.vue'
import Reports from '@/views/Reports.vue'

import {
  checkToken
} from "@/utils/getSalentoDevices";

//layouts 
import fullPageLayout from '../layouts/fullPage.vue';
import mainLayout from '../layouts/main.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: mainLayout,
      children: [
        {
          path: '',
          component: homeView,
          children: [
            {
              path: '',
              alias: 'general',
              name: 'home-general',
              component: General
            },
            {
              path: 'map',
              name: 'home-map',
              component: Map
            },
            {
              path: 'reports',
              name: 'home-reports',
              component: Reports
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: fullPageLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LogIn
        }
      ]
    },
    {
      path: '/home',
      component: fullPageLayout,
      children: [
        {
          path: '/home',
          name: 'myhome',
          component: Home
        }
      ]
    },
    {
      path: '/project/:id/:name',
      component: mainLayout,
      children: [
        {
          path: '',
          name: 'project-analytics',
          component: AnalyticsByZone,
          children: [
            {
              path: '',
              alias: 'general',
              name: 'project-general',
              component: General
            },
            {
              path: 'map',
              name: 'project-map',
              component: Map
            },
            {
              path: 'reports',
              name: 'project-reports',
              component: Reports
            }
          ]
        }
      ]
    },


  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkToken()
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })
  }
  // ...
  // explicitly return true to continue the navigation.
  next()
})

export default router
