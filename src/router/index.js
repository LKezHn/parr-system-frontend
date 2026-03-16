import DashboardLayout from "@/layouts/dashboard.layout.vue"
import LoginView from "@/views/login/login.view.vue"
import { createRouter, createWebHistory } from "vue-router"

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

export default router