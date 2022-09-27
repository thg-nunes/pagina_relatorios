import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  gap: ${({theme}) => theme.spacings[5]};

  padding: ${({theme}) => theme.spacings[75]} 0;

  @media (max-width: 540px) {
    max-width: 500px;
    display: block;
    padding: ${({theme}) => theme.spacings[75]} ${({theme}) => theme.spacings[5]};
  }
`
