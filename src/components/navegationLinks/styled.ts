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
    return 'flex'
  }};

  flex-direction: column;
  justify-content: space-between;

  padding: .5rem;
  border-right: 1px solid rgb(211, 211, 211);
  z-index: 2;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    > img {
      width: 1.3rem;
      height: 1.3rem;
    }

    section {
      img {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
`
