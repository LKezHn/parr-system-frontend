import { generateTheme } from "./themeGenerator"

export function updateVuetifyTheme(theme, seed) {

  theme.themes.value.liturgical.colors = generateTheme(seed)

}