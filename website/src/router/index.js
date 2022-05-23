import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // Default Views
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Profiles | Home",
    },
    component: HomeView
  },
  {
    path: '/imprint',
    name: 'imprint',
    meta: {
      title: "Profiles | Imprint",
    },
    component: function () {
      return import('../views/ImprintView.vue')
    },
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    meta: {
      title: "Profiles | Privacy Policy",
    },
    component: function () {
      return import('../views/PrivacyPolicyView.vue')
    },
  },
  // Profile Views
  {
    path: '/forget-password',
    name: 'forget-password',
    meta: {
      title: "Profiles | Forget Password",
    },
    // route level code-splitting
    // this generates a separate chunk (forget-password.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "forget-password" */ '../views/profile/ForgetPassword.vue')
    },
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: "Profiles | Your Profile",
    },
    component: function () {
      return import('../views/profile/ProfileView.vue')
    },
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      title: "Profiles | Settings",
    },
    component: function () {
      return import('../views/profile/SettingsView.vue')
    },
  },
  {
    path: '/signin',
    name: 'signin',
    meta: {
      title: "Profiles | Sign In",
    },
    component: function () {
      return import('../views/profile/SignInView.vue')
    },
  },
  {
    path: '/signup',
    name: 'signup',
    meta: {
      title: "Profiles | Sign Up",
    },
    component: function () {
      return import('../views/profile/SignUpView.vue')
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
