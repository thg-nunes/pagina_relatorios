import styled from "styled-components";

type ContainerProps = {
  asPath: string
  popupVisible: boolean
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  width: ${({ popupVisible }) => {
    if(popupVisible) {
      return '100%'
    } else {
      return 'min-content'
    }
  }};
  height: calc(100vh - 3rem);

  display: ${({ asPath }) => {
    if(asPath === '/relatorios/login') return 'none'
    return 'flex'
  }};

  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid rgb(211, 211, 211);
  z-index: 3;

  > img {
    width: 1.75rem;
    height: 1.75rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    img {
      width: 1.75rem;
      height: 1.75rem;
      cursor: pointer;
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

export const Itens = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: min-content;

  padding: .5rem;
  border-right: 1px solid rgb(211, 211, 211);
`
