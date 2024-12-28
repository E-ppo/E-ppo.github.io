import { router } from "@/navigations/navigationConstants"
import { About, BlogMain, Home, Portfolio } from "@/pages"
import { Routes, Route } from "react-router-dom"

const PageRouter = () => {
  return (
    <Routes>
      <Route path={router.MAIN} element={<Home />} />
      <Route path={router.ABOUT} element={<About />} />
      <Route path={router.PORTFOLIO} element={<Portfolio />} />
      <Route path={router.BLOG} element={<BlogMain />} />
    </Routes>
  )
}

export default PageRouter
