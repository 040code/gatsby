import React from 'react'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'

const ContentBody = styled.div`
  line-height: 1.6;


  & > *:first-child {
    padding-top: 0;
    margin-top: 0;
  }

  & > h1 {
    margin-top: 3rem;
    font-size: 2em;
  }

  & > h2 {
    margin-top: 3rem;
    font-size: 1.5em;
  }

  & > h3 {
    padding-top: 3rem;
    font-size: 1.17em;
  }

  & > p {
    margin: 1em 0 0 0;
  }

  & a {
    border-bottom: 1px dotted rgba(162, 162, 162, 0.8);

    &:hover {
      border-bottom-style: solid;
    }

    &.anchor,
    &.gatsby-resp-image-link {
      border: none;
    }
  }

  & > blockquote {
    box-sizing: border-box;
    margin: 1.75em 0 1.75em -2.2em;
    padding: 0 0 0 1.75em;
    border-left: 0.4em solid rgba(32, 35, 42, 0.85);
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: italic;
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    background: #2d2d2d;
    color: #ffffff;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em 0em 1.5em 0;
    font-size: 0.7em;
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight-code-line {
    background-color: #022a4b;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #ffa7c4;
  }

  & p > code.language-text,
  & li > code.language-text {
    background: rgba(255, 229, 100, 0.2);
    color: #222222cc;
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
  }

  & table {
    margin-top: 1em;
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;

    & th,
    & td {
      padding: 0.5em;
      background: #e8e8e8;
      border-bottom: 2px solid white;
    }
  }

  & :not(pre) a code[class*='language-'] {
    color: #222222cc;
    background-color: rgba(255, 229, 100, 0.2);
  }
`

class Content extends React.Component {
  render() {
    const { content, tags } = this.props

    return (
      <section>
        {tags && <ContentHeader tags={tags} />}
        <ContentBody dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    )
  }
}

export default Content
