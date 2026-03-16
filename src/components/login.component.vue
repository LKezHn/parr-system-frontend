<template>
    <v-card
        class="mx-auto my-auto text-center py-7 px-5"
        width="410"
        rounded="lg"
    > 
      <v-avatar size="85" color="primary" rounded="xl" class="mx-auto mb-4">
          <v-icon icon="mdi-church" size="50" color="white"></v-icon>
      </v-avatar>
      <v-card-title class="justify-center font-weight-black">
      Sistema de Iglesia
      </v-card-title>

      <!-- Subtitulo -->
      <v-card-subtitle class="my-3">
      Ingrese sus credenciales para acceder
      </v-card-subtitle>
      <!-- Formulario -->
      <v-form ref="form" @submit.prevent="login">

        <!-- Usuario -->
        <v-text-field
          v-model="username"
          label="Usuario"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          density="comfortable"
          :rules="[required]"
          class="mb-3"
          rounded="lg"
        ></v-text-field>

        <!-- Contraseña -->
        <v-text-field
          v-model="password"
          label="Contraseña"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          variant="outlined"
          density="comfortable"
          :rules="[required]"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="togglePassword"
          class="mb-2"
          rounded="lg"
        ></v-text-field>

        <!-- Opciones -->
        <div class="d-flex justify-space-between align-center mb-4">

          <v-checkbox
            v-model="remember"
            label="Recordarme"
            density="compact"
            hide-details
            rounded="xl"
          ></v-checkbox>

          <a href="#" class="text-primary text-caption text-decoration-none">
            ¿Olvido su contraseña?
          </a>

        </div>

        <!-- Botón -->
        <v-btn
          type="submit"
          block
          color="primary"
          size="large"
          class="mb-2"
          rounded="lg"
          :loading="loading"
          :disabled="loading" 
        >
          Iniciar sesión
        </v-btn>

      </v-form>
      <div
        v-if="loginError"
        class="text-error text-caption mb-3"
      >
        {{ loginError }}
      </div>

    </v-card>

</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import api from "@/services/api"

const router = useRouter()

const form = ref(null)
const username = ref('')
const password = ref('')
const loginError = ref("")
const remember = ref(false)
const showPassword = ref(false)
const loading = ref(false)

watch([username, password], () => {
  loginError.value = ""
})

const required = v => !!v || "Este campo es obligatorio"
const togglePassword = () => showPassword.value = !showPassword.value

const login = async() => {

  const { valid } = await form.value.validate()
  loginError.value = ""

  if(!valid) return

  loading.value = true

  try {

    const response = await api.post("/auth/login", {
      username: username.value,
      password: password.value
    })

    localStorage.setItem("token", response.data.access_token)
    router.replace("/dashboard")

  }catch(error) {

    if (error.response) {
      loginError.value = "Credenciales inválidas"
    } else {
      loginError.value = "Error de conexión con el servidor"
    }
  } finally {
    loading.value = false
  }

}

</script>