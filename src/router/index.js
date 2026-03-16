import DashboardLayout from "@/layouts/dashboard.layout.vue"
import LoginView from "@/views/login/login.view.vue"
import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "@/stores/authStore"

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView
  },
   {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

import { useAuthStore } from "@/stores/authStore"

router.beforeEach((to, from, next) => {

  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next("/")
  }

  next()

})

export default router