<template>

<v-container class="fill-height d-flex flex-column justify-center align-center text-center">

  <!-- Ilustración -->
  <img
    src="@/assets/404_definitive.svg"
    alt="404"
    class="mb-6"
    style="max-width: 450px; width: 450px;"
  />

  <!-- Título -->
  <h1 class="text-h4 font-weight-bold mb-2">
    Página no encontrada
  </h1>

  <!-- Subtexto -->
  <p class="text-medium-emphasis mb-6">
    Lo sentimos, la página que buscas no existe o no tienes acceso.
  </p>

  <!-- Botón -->
  <v-btn
    color="#1976D2"
    size="large"
    rounded="lg"
    @click="goHome"
  >
    Volver al inicio
  </v-btn>

</v-container>

</template>

<script setup>

import { useRouter } from "vue-router"

const router = useRouter()

function goHome() {
  router.push("/dashboard")
}

</script>