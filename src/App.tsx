import Header from "@/containers/Header"
import Router from "@/Router"
import GlobalStyle from "@/styles/globalStyle"
import { theme } from "@/styles/theme"
import { ThemeProvider } from "styled-components"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
