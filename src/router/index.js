import DashboardLayout from "@/layouts/dashboard.layout.vue"
import LoginView from "@/views/login/login.view.vue"
import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "@/stores/authStore"
import NotFound from "@/views/errors/NotFound.vue"


const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView
  },
   {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {

  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: "login" }
  }

  if (to.name === "login" && auth.isAuthenticated) {
    return { name: 'dashboard' }
  }


})

export default router