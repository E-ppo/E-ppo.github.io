import { About, Blog, Home, Portfolio } from "@/pages"
import { Routes, Route } from "react-router-dom"

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default PageRouter
