import 'styled-components'
import light from '../styles/theme/light'

export interface DefaultTheme {}

type ThemeType = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
