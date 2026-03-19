<template>

<v-container class="fill-height d-flex flex-column justify-center align-center text-center">

    <!-- Ilustración -->
  <img
    src="@/assets/403_definitive.svg"
    alt="404"
    class="mb-6"
    style="max-width: 450px; width: 450px;"
  />

  <!-- Título -->
  <h1 class="text-h4 font-weight-bold mb-2">
    Acceso denegado
  </h1>

  <!-- Mensaje -->
  <p class="text-medium-emphasis mb-6">
    No tienes permisos para acceder a esta sección.
  </p>

  <!-- Botones -->
  <div class="d-flex gap-3">

    <!-- Botón -->
    <v-btn
      color="#1976D2"
      size="large"
      rounded="lg"
      @click="goDashboard"
    >
      Ir al dashboard
    </v-btn>

  </div>

</v-container>

</template>

<script setup>

import { useRouter } from "vue-router"

const router = useRouter()

function goDashboard() {
  router.push("/dashboard")
}

</script>