import { Card } from "@/components/card"

const BlogIntro = () => {
  return (
    <Card.Root direction="row">
      <Card.Body>
        <Card.Title>제목</Card.Title>
        <Card.Description>설명</Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

export default BlogIntro
