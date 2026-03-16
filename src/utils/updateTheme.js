import { useTheme } from "vuetify"
import { generateTheme } from "./themeGenerator"

export function updateVuetifyTheme(seed) {

  const theme = useTheme()

  theme.themes.value.liturgical.colors = generateTheme(seed)

}