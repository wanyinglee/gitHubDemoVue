import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import ReadMe from '@/components/ReadMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:username',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/:username/:repository',
      name: 'ReadMe',
      component: ReadMe
    }
  ]
})
