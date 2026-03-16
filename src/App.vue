<script setup>
import { useAuthStore } from "@/stores/authStore"

const authStore = useAuthStore()

authStore.loadFromStorage()

</script>

<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
<style scoped>
</style>
