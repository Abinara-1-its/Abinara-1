import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/page/home/Home.vue'
import Teams from '../components/page/Teams.vue'
import Robots from '../components/page/Robots.vue'
import Achievement from '../components/page/Achievement.vue'
import Gallery from '../components/page/Gallery.vue'
import Alumni from '../components/page/Alumni.vue'
import NotFound from '../components/page/NotFound.vue'
import Advance  from '@/components/page/Advance.vue'
import RobotDump from '../components/page/RobotDump.vue'
import ThreeDView from '../components/page/ThreeDView.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/teams', component: Teams, name: 'Teams' },
  { path: '/robots', component: Robots, name: 'Robots' },
  { path: '/achievement', component: Achievement, name: 'Achievement' },
  // { path: '/gallery', component: Gallery, name: 'Gallery' },
  { path: '/alumni', component: Alumni, name: 'Alumni' },
  { path: '/robot-dump', component: RobotDump, name: 'RobotDump' },
  // { path: '/advance', component: Advance, name: 'Advance' },
  { path: '/3d-view', component: ThreeDView, name: '3d-view' },
  { path: '/:pathMatch(.*)', component: NotFound, name: 'NotFound' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
    else {
      return { top: 0 }
    }
  },
})

export default router
