import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  gap: ${({theme}) => theme.spacings[5]};
`
