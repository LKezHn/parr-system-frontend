<script setup>
import { useAuthStore } from "@/stores/authStore"
import { watch } from "vue"
import { useUIStore } from "@/stores/uiStore"
import { updateVuetifyTheme } from "@/utils/updateTheme"

const ui = useUIStore()
const authStore = useAuthStore()


watch(
  () => ui.themeColor,
  (seed) => {
    updateVuetifyTheme(seed)
  },
  { immediate: true }
)

authStore.loadFromStorage()

</script>

<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
<style scoped>
</style>
