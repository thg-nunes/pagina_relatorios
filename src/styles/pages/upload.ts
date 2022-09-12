import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  padding: ${({theme}) => theme.spacings["5"]} 0;
  gap: 1rem;
`

export const UploadFileInput = styled.section`
  width: min-content;

  input {
    display: none;
  }

  label {
    display: block;
    width: 180px;
    text-align: center;
    padding: ${({theme}) => theme.spacings["5"]} 0;
    background: ${({theme}) => theme.colors.blue[600]};
    color: white;
    font-weight: 600;
    cursor: pointer;

    transition: 150ms all ease-in-out;

    :hover {
      filter: brightness(.95);
    }
  }
`

export const SubmitButton = styled.section`
  input {
    display: block;
    width: 180px;
    text-align: center;
    padding: ${({theme}) => theme.spacings["5"]} 0;
    background: ${({theme}) => theme.colors.blue[600]};
    color: white;
    font-weight: 600;
    cursor: pointer;
    border: none;

    transition: 150ms all ease-in-out;

    :hover {
      filter: brightness(.95);
    }
  }
`
