import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

import { generateTheme } from "@/utils/themeGenerator"

const seedColor = "#2E7D32"

export const vuetify = createVuetify({
  theme: {
    defaultTheme: "liturgical",
    themes: {
      liturgical: {
        dark: false,
        colors: generateTheme(seedColor)
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})