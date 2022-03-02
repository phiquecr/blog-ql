import styled from "styled-components";
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  background: var(--background);
  transition: background, color 0.5s;

  ${media.greaterThan("large")`
    padding: 0 3.75rem 0 20rem;
  `}

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`