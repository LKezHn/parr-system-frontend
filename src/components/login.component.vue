<template>
    <v-card
        class="mx-auto my-auto text-center py-5 px-2"
        width="400"
    > 
        <v-avatar size="72" color="primary" rounded="xl" class="mx-auto mb-4">
            <v-icon icon="mdi-church" size="36" color="white"></v-icon>
        </v-avatar>
        <v-card-title class="justify-center font-weight-black">
        Sistema de Iglesia
        </v-card-title>

        <!-- Subtitulo -->
        <v-card-subtitle>
        Ingrese sus credenciales para acceder
        </v-card-subtitle>

              <!-- Formulario -->
      <v-form>

        <!-- Usuario -->
        <v-text-field
          v-model="username"
          label="Usuario"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          density="comfortable"
          class="mb-3"
        ></v-text-field>

        <!-- Contraseña -->
        <v-text-field
          v-model="password"
          label="Contraseña"
          prepend-inner-icon="mdi-lock"
          append-inner-icon="mdi-eye"
          variant="outlined"
          density="comfortable"
          type="password"
          class="mb-2"
        ></v-text-field>

        <!-- Opciones -->
        <div class="d-flex justify-space-between align-center mb-4">

          <v-checkbox
            v-model="remember"
            label="Recordarme"
            density="compact"
            hide-details
          ></v-checkbox>

          <a href="#" class="text-primary text-caption">
            Olvidé mi contraseña
          </a>

        </div>

        <!-- Botón -->
        <v-btn
          block
          color="primary"
          size="large"
          class="mb-2"
        >
          Iniciar sesión
        </v-btn>

      </v-form>

    </v-card>

</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const remember = ref(false)
</script>