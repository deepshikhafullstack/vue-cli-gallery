import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import GalleryListing from '@/pages/GalleryListing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/album/:id/:name',
      name: 'Album',
      component: GalleryListing
    }
  ]
})