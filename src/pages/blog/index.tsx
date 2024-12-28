import BlogRouter from "@/navigations/BlogRouter"
import BlogList from "@/pages/blog/BlogList"
import DetailBlog from "@/pages/blog/DetailBlog"
import BlogEditor from "@/pages/blog/BlogEditor"
import styled from "styled-components"

const BlogMain = () => {
  return (
    <Container>
      <BlogRouter />
    </Container>
  )
}

export default BlogMain

const Container = styled.div`
  padding: 0 160px;
`

export { BlogList, DetailBlog, BlogEditor }
