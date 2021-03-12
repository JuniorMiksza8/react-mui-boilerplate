import lightPalette from './lightPalette'
import darkPalette from './darkPalette'

const themePallete = (mode: string) => {
  if (mode === 'dark') {
    return darkPalette
  }
  return lightPalette
}

export default themePallete