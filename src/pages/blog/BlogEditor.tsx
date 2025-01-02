import MarkDownReader from "@/components/markdownReader/MarkDownReader"
import Select from "@/components/select"
import { SelectItem } from "@/components/select/types"
import { theme } from "@/styles/theme"

import { useState } from "react"
import styled from "styled-components"

const frameworks = [
  { label: "React.js", value: "react" },
  { label: "React Native", value: "reactNative" },
  { label: "Test Code", value: "testCode" },
]

const BlogEditor = () => {
  const [contents, setContents] = useState("### 1")
  const [category, setCategory] = useState(frameworks[0])

  const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value)
  }

  const handleFrameworkSelect = (framework: SelectItem) => {
    setCategory(framework)
  }

  return (
    <Container>
      <EditContainer>
        <HeaderContainer>
          <Select
            style={{ width: 150 }}
            defaultValue={category}
            items={frameworks}
            onChange={handleFrameworkSelect}
          >
            <Select.Trigger
              style={{ padding: "4px 10px", border: `1px solid ${theme.colors.line}` }}
            />
            <Select.Content>
              {frameworks.map((framework) => (
                <Select.Item key={framework.value} item={framework}>
                  {framework.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
          <InputStyle placeholder="타이틀을 입력해주세요" />
        </HeaderContainer>
        <TextAreaStyles value={contents} onChange={handleContentsChange} />
        <button>제출</button>
      </EditContainer>
      <ReadMarkDownContainer>
        <MarkDownReader contents={contents} />
      </ReadMarkDownContainer>
    </Container>
  )
}

export default BlogEditor

const Container = styled.div`
  display: flex;
  padding: 5vh;
  gap: 10px;
  height: 80vh;
`
const EditContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`

const HeaderContainer = styled.div`
  display: flex;
  gap: 10px;
`

const ReadMarkDownContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.gray};
`

const InputStyle = styled.input`
  flex: 1;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.line};
`

const TextAreaStyles = styled.textarea`
  flex: 1;
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  resize: none;
`
