import { ProfileImg } from "@/assets/img"
import { Card } from "@/components/card"
import { theme } from "@/styles/theme"
import styled from "styled-components"

const BlogIntro = () => {
  return (
    <Card.Root direction="row" style={{ gap: 20, padding: 16 }}>
      <Profile src={ProfileImg} alt="" />
      <Card.Body>
        <Card.Title>Eppo의 테크 블로그에 오신 것을 환영합니다!</Card.Title>
        <Card.Description style={{ marginTop: 5, color: theme.colors.dustyRose }}>
          {`프론트엔드 개발의 다양한 영역을 카테고리별로 정리하고 있습니다. \n개발 과정에서 얻은 인사이트와 실용적인 팁을 공유하며, 함께 성장하는 공간을 만들어가고 있습니다.`}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

export default BlogIntro

const Profile = styled.img`
  width: 10vw;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
`
