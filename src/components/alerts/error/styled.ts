import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  width: 16.25rem;
  height: 5.125rem;
  left: 100%;

  text-align: center;

  color: white;
  font-weight: bold;
  background: #ef233c;
  border-radius: 5px;

  animation: messageAnimation 2s ease-in-out forwards;

  p {
    line-height: 5.125rem;
  }

  @keyframes messageAnimation {
    from {
      left: 100%;
    } to {
      left: calc(100% - 16.25rem);
    }
  }
`
