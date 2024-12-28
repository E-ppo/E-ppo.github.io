import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Header from "@/containers/Header"
import PageRouter from "@/navigations/Router"
import GlobalStyle from "@/styles/globalStyle"
import { theme } from "@/styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
        <GlobalStyle />
        <Header />
        <PageRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
