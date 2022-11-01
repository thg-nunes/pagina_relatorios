import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: block;

  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 10px;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, .2);

  @media (max-width: 768px) {
    width: 80%;
  }
`

type IsFirstAccessProps = {
  isFirstAccess: string |'true' | 'false'
}

export const ReportsContainer = styled.div<IsFirstAccessProps>`
  width: ${({ isFirstAccess }) => {
    if(isFirstAccess === 'true') {
      return '100%'
    } else {
      return 'calc(100% - 2.675rem)'
    }
  }};
  position: relative;
  right: ${({ isFirstAccess }) => {
    if(isFirstAccess === 'true') {
      return '0'
    } else {
      return '-2.75rem'
    }
  }};
  height: calc(100vh - 3rem);
  overflow: hidden;
  z-index: 2;
`
