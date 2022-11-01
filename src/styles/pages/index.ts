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

export const ReportsContainer = styled.div`
  position: relative;
  height: calc(100vh - 3rem);
  overflow: hidden;
  z-index: 2;
`
