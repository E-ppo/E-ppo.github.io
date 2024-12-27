import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      dustyRose: string
      line: string
      background: {
        gray: string
      }
      brand: {
        lighter: string
        light: string
        default: string
        dark: string
        darker: string
      }
    }
    fontSize: {
      small: string
      medium: string
      large: string
    }
  }
}
