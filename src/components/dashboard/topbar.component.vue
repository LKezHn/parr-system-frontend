<template>

<v-app-bar
  elevation="1"
  height="64"
>

  <!-- titulo -->

  <v-app-bar-title class="font-weight-medium">
    {{ title }}
  </v-app-bar-title>

  <v-spacer />

  <!-- notificaciones -->

  <v-btn
    icon="mdi-bell-outline"
    variant="text"
  />

  <!-- usuario -->

  <v-menu offset-y>

    <template #activator="{ props }">

      <v-btn
        v-bind="props"
        variant="text"
        class="ml-2"
      >

        <v-avatar
          size="32"
          color="primary"
          rounded="lg"
          class="mr-2"
        >
          <v-icon icon="mdi-account" color="white" size="18"/>
        </v-avatar>

        <span class="text-body-2">
          {{ username }}
        </span>

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

const username = computed(() => auth.user?.username || "Usuario")

function logout() {

  auth.logout()

  router.replace("/")

}

</script>