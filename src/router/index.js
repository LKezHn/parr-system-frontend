import DashboardLayout from "@/layouts/dashboard.layout.vue"
import LoginView from "@/views/login/login.view.vue"
import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "@/stores/authStore"
import NotFound from "@/views/errors/NotFound.vue"
import Forbidden from "@/views/errors/Forbidden.vue"

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
  },
  {
  path: "/forbidden",
  name: "forbidden",
  component: Forbidden
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

  if (to.meta.roles && !to.meta.roles.includes(auth.user?.role)) {
    return { name: "forbidden" }
  }

})

export default router