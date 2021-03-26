import { graphql } from 'gatsby'
import React from 'react'

export const frontmatter = {
  data: 'woot!'
}

export default function HomePage ({ data }) {
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export const query = graphql`
{
  allJavascriptFrontmatter {
    edges {
      node {
        id
        frontmatter {
          data
          error
        }
      }
    }
  }
}
`
