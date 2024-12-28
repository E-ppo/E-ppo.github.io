import { router } from "@/navigations/navigationConstants"
import { BlogEditor, BlogList, DetailBlog } from "@/pages/blog"
import { Routes, Route } from "react-router-dom"

const BlogRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path={router.DETAIL_BLOG} element={<DetailBlog />} />
      <Route path={router.EDITOR} element={<BlogEditor />} />
    </Routes>
  )
}

export default BlogRouter
