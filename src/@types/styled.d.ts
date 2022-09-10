import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      white: string

      title: string
      text: string
      label: string
      placeholder: string

      elements: string
      'elements-dark': string
      divider: string
      background: string

      'green-light': string
      green: string
      'green-dark': string

      red: string
      'red-dark': string

      yellow: string
    }
  }
}
