import "styled-components"

type FontSize = { pc: string; mobile: string }
type FontStyle = FontSize & { weight: string; lineHeight: string }
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
    font: {
      title: {
        lg: FontStyle
        md: FontStyle
        sm: FontStyle
      }
      text: {
        lg: FontStyle
        md: FontStyle
        sm: FontStyle
      }
      caption: FontStyle
    }
    getFont: (type: "title" | "text", size: "lg" | "md" | "sm") => string
  }
}
