import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Cats from '@/components/cats'
import Dogs from '@/components/dogs'
import Horses from '@/components/horses'
import Registry from '@/components/registry'
import Users from '@/components/users'
import SignIn from '@/components/signIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cats',
      name: 'Cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: Dogs
    },
    {
      path: '/horses',
      name: 'Horses',
      component: Horses
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    }
  ]
})
