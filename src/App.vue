<script setup>
import { useTheme } from "vuetify"
import { useAuthStore } from "@/stores/authStore"
import { onMounted, watch } from "vue"
import { useUIStore } from "@/stores/uiStore"
import { updateVuetifyTheme } from "@/utils/updateTheme"
import { fetchLiturgicalDay } from "@/services/liturgicalAPI"
import { mapSeason } from "@/utils/liturgicalMapper"
import { useParishStore } from "@/stores/parishStore"

const ui = useUIStore()
const authStore = useAuthStore()
const parishStore = useParishStore() 
const theme = useTheme()

onMounted(async () => {

  try {

    const data = await fetchLiturgicalDay()
    const season = mapSeason(data.season)
    parishStore.fetchParish()

    ui.setSeason(season)

  } catch (error) {

    console.error("Error obteniendo calendario litúrgico")
  } finally {

    ui.setLoading(false)
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
    <!-- Loader global -->
    <div v-if="ui.appLoading" class="loader-container">

      <v-progress-circular
        indeterminate
        size="64"
        width="5"
        color="primary"
      />

      <div class="mt-4 text-subtitle-1">
        Cargando sistema parroquial...
      </div>

    </div>

    <!-- App -->
    <router-view v-else />
  </v-app>
</template>
<style scoped>
</style>
