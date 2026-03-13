import './assets/main.css'
import './styles/settings.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { vuetify } from './plugins/vuetify'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())

app.mount('#app')
