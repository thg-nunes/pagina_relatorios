import styled from "styled-components";

type ContainerProps = {
  asPath: string
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  width: max-content;
  height: calc(100vh - 3rem);

  display: ${({ asPath }) => {
    if(asPath === '/login') return 'none'
    return 'block'
  }};

  flex-direction: column;
  justify-content: space-between;

  padding: .5rem;
  border-right: 1px solid rgb(211, 211, 211);
  z-index: 2;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`
