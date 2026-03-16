<script setup>
import { useTheme } from "vuetify"
import { useAuthStore } from "@/stores/authStore"
import { onMounted, watch } from "vue"
import { useUIStore } from "@/stores/uiStore"
import { updateVuetifyTheme } from "@/utils/updateTheme"
import { fetchLiturgicalDay } from "@/services/liturgicalAPI"
import { mapSeason } from "@/utils/liturgicalMapper"

const ui = useUIStore()
const authStore = useAuthStore()
const theme = useTheme()

onMounted(async () => {
  try {

    const data = await fetchLiturgicalDay()
    const season = mapSeason(data.season)
    ui.setSeason(season)

  } catch (error) {
    console.error("Error obteniendo calendario litúrgico")
  }
})

watch(
  () => ui.themeColor,
  (seed) => {
    updateVuetifyTheme(theme, seed)
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
