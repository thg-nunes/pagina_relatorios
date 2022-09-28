import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
  height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({theme}) => theme.spacings["1.25"]} 0;
  gap: 2rem;
  position:  relative;

  h2 {
    font-size: 2rem;
  }
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
    position: absolute;
    width: 180px;
    text-align: center;
    padding: ${({theme}) => theme.spacings["5"]} 0;
    background: ${({theme}) => theme.colors.blue[600]};
    color: white;
    font-weight: 600;
    cursor: pointer;

    border: none;
    border-radius: 10px;

    left: 50%;
    transform: translateX(-50%);

    transition: 150ms all ease-in-out;

    :hover {
      filter: brightness(.95);
    }
  }
`

export const DragAndDropContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
