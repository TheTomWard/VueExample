import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Blog from './components/Blog.vue'
import Polls from './components/Polls.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/polls',
      name: 'polls',
      component: Polls
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})