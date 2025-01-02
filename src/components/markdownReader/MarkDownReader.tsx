import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { markdownStyles } from "@/components/markdownReader/MarkDownStyle"

const MarkDownReader = ({ contents }: { contents: string }) => {
  return (
    <PreviewContainer>
      <StyledMarkdown remarkPlugins={[remarkGfm]}>{contents}</StyledMarkdown>
    </PreviewContainer>
  )
}

export default MarkDownReader

const PreviewContainer = styled.div`
  flex: 1;
`

const StyledMarkdown = styled(ReactMarkdown)`
  ${markdownStyles}
`
