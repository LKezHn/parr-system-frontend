<template>
<v-app-bar elevation="1" height="67.5">

  <!-- Título / parroquia -->

  <v-app-bar-title class="font-weight-medium">
    {{ title }}
  </v-app-bar-title>

  <v-spacer />

  <!-- Saludo -->

  <span class="text-body-2 mr-3">
    Hola, <strong>{{ username }}</strong>
  </span>

  <!-- Menú usuario -->

  <v-menu offset-y>

    <template #activator="{ props }">

      <v-btn
        v-bind="props"
        icon
        variant="text"
      >
        <v-avatar
          size="36"
          color="primary"
          rounded="lg"
        >
          <v-icon icon="mdi-account" color="white" />
        </v-avatar>
      </v-btn>

    </template>

    <v-list density="compact">

      <v-list-item
        prepend-icon="mdi-account"
        title="Perfil"
      />

      <v-list-item
        prepend-icon="mdi-cog"
        title="Configuración"
      />

      <v-divider />

      <v-list-item
        prepend-icon="mdi-logout"
        title="Cerrar sesión"
        @click="logout"
      />

    </v-list>

  </v-menu>

</v-app-bar>
</template>

<script setup>

import { computed } from "vue"
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "vue-router"

const auth = useAuthStore()
const router = useRouter()

const title = "Dashboard"

const username = computed(() => auth.user?.name || "Usuario")

function logout() {

  auth.logout()

  router.replace("/")

}

</script>