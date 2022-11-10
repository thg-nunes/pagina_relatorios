import styled from 'styled-components';

type ContainerProps = {
  hasError: boolean
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  width: 16.25rem;
  height: 5.125rem;
  left: 100%;

  text-align: center;

  color: white;
  font-weight: bold;
  background: ${({ hasError }) => hasError ? '#ef233c' : '#00FA00'} ;
  border-radius: 5px;

  animation: messageAnimation 2s ease-in-out forwards;

  @keyframes messageAnimation {
    from {
      left: 100%;
    } to {
      left: calc(100% - 16.25rem);
    }
  }
`

export const Paragraph = styled.p`
  line-height: 5.125rem;
`
