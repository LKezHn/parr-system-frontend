import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor
} from "@material/material-color-utilities"

export function generateTheme(seedColor) {

  const theme = themeFromSourceColor(argbFromHex(seedColor))

  const scheme = theme.schemes.light

  return {
    primary: hexFromArgb(scheme.primary),
    secondary: hexFromArgb(scheme.secondary),
    surface: hexFromArgb(scheme.surface),
    background: hexFromArgb(scheme.background),
    error: hexFromArgb(scheme.error),
  }

}