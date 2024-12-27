import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
