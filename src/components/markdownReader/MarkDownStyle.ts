import { css } from "styled-components"

export const markdownStyles = css`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #444;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
    margin-bottom: 0.8em;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
    margin-bottom: 0.6em;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #666;
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: 1rem;
    font-weight: bold;
    color: #777;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: bold;
    color: #888;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1em;
    color: #333;
  }

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background-color: #f6f8fa;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }

  pre {
    background-color: #f6f8fa;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    border-radius: 3px;
    margin-bottom: 1em;

    code {
      background-color: transparent;
      padding: 0;
      font-size: 100%;
      border-radius: 0;
    }
  }

  ul,
  ol {
    padding-left: 2em;
    margin-bottom: 1em;

    li {
      margin-bottom: 0.5em;
      line-height: 1.6;

      ul,
      ol {
        margin-top: 0.5em;
        margin-bottom: 0;
      }
    }
  }

  ul li input[type="checkbox"] {
    margin-right: 0.5em;
  }

  blockquote {
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
    margin-bottom: 1em;
    font-style: italic;
  }

  hr {
    height: 0.25em;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
  }

  th,
  td {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }

  th {
    background-color: #f6f8fa;
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
    color: #6a737d;
  }
`
