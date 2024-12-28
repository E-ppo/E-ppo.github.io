import { BlogEditor, BlogList, DetailBlog } from "@/pages/blog"
import { Routes, Route } from "react-router-dom"

const BlogRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:blogId" element={<DetailBlog />} />
      <Route path="/editor" element={<BlogEditor />} />
    </Routes>
  )
}

export default BlogRouter
