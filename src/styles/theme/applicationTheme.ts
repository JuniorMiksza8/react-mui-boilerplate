import themePalette from './themePaletteMode'
import { createMuiTheme } from '@material-ui/core'

const CustomTheme = (mode: 'light' | 'dark') => createMuiTheme({
  palette: {
    type: mode,
    primary: {
      light: themePalette(mode).palette.primary.light,
      dark: themePalette(mode).palette.primary.dark,
      main: themePalette(mode).palette.primary.main,
      contrastText: themePalette(mode).palette.primary.contrastText,
    },
    secondary: {
      light: themePalette(mode).palette.secondary.light,
      dark: themePalette(mode).palette.secondary.dark,
      main: themePalette(mode).palette.secondary.main,
      contrastText: themePalette(mode).palette.secondary.contrastText,
    },
  },
  overrides: {}
})

export default CustomTheme