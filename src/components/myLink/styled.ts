import styled from 'styled-components';

export const Container = styled.a`
  line-height: 3rem;
  color: white;
  font-weight: bold;
  padding: 0 ${({theme}) => theme.spacings[5]};
  transition: 250ms all ease-in-out;

  :hover {
    background: #3a86ff;
  }
`
