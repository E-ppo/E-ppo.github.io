import BlogIntro from "@/containers/blog/BlogIntro"
import CategorySidebar from "@/containers/blog/CategorySidebar"
import { useState } from "react"
import styled from "styled-components"

const BlogList = () => {
  const [category, setCategory] = useState("react")
  return (
    <>
      <BlogIntro />
      <InnerContainer>
        <CategorySidebar category={category} setCategory={setCategory} />
        <div>내용이 올 곳</div>
      </InnerContainer>
    </>
  )
}

export default BlogList

const InnerContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`
