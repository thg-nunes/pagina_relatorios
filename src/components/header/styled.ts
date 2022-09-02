import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({theme}) => theme.spacings[5]} ${({theme}) => theme.spacings[75]};
  background: ${({theme}) => theme.colors.blue[600]};

  p {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    color: white;
    font-size: ${({theme}) => theme.font.sizes['1.5']};
    font-weight: bold;

  }
`
