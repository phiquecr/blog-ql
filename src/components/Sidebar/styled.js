import styled from "styled-components";
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  text-align: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  padding: 2rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`