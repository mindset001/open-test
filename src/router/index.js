/* eslint-disable no-undef */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import profile from '../views/profile.vue';
import axios from 'axios';
import store from '../store';

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue')
  },
  {

    path: '/profile',
    name: 'profile',
    component: profile,
    beforeEnter: async function(from, to, next) {
        try {
          const token = localStorage.getItem("token")
            const res = await  axios.get('https://safe-chamber-84179.herokuapp.com/opentest/api/auth', {
              headers: {
                "Auth-Token": token
              }
            }) 
            store.commit('authuser', res.data)
            next()
        } catch (error) {
          localStorage.removeItem("token")
          next('/login')
        }
       
         

    }

  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
