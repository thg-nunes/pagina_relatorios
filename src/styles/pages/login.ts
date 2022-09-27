import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 3rem);
  background: ${({theme}) => theme.colors.blue[600]};
`

export const Form = styled.form`

  margin: 0 auto;
  position: absolute;

  width: 100%;
  max-width: 34.375rem;
  height: 100vh;
  max-height: 25rem;

  background: white;
  border-radius: 10px;

  padding: 2.25rem;

  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);

  text-align: center;

  > p {
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 3rem;
  }

`

export const InputContainer = styled.section`
  height: 50%;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.5rem;

  button {
    width: 100%;
    max-width: 12.25rem;

    padding: .5rem 0;

    font-weight: 700;

    border: none;
    border-radius: 5px;

    color: white;

    background: ${({theme}) => theme.colors.blue[600]};
  }
`
