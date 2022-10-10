import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, .2);

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({theme}) => theme.spacings[5]} ${({theme}) => theme.spacings[75]};
  }

  @media (max-width: 768px) {
    span {
      padding: .45rem;
    }
  }
`

export const Icons = styled.section`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 1024px) {
    width: 80px;
  }

  @media (max-width: 768px) {
    width: 75px;

    span {
      img {
        width: 18px;
        height: 18px;
      }
    }
  }

`
