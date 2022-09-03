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
`

export const Icons = styled.section`
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
