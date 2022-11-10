import styled from 'styled-components'
import { Input as InputStyle } from '../input/styled'
import { Container as AlertContainer } from '../alerts/succesOrError/styled'

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100vh - 3rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, .4);

  ${AlertContainer} {
    top: 0;
  }
`

export const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  border-radius: 5px;
  padding: 2.25rem;
  gap: 1.75rem;
  background: white;

  span {
    position: absolute;
    right: 2.25rem;
    color: #AEAEAE;
    font-size: 1.5rem;
    margin: 0;
    cursor: pointer;
  }
`

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const Input = styled(InputStyle)``

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.4375rem;

  input {
    width: 29.5625rem;
    height: 3.4375rem;
    border-radius: 5px;
    padding: 1.25rem;
  }
`

export const Title = styled.h2`
  font: 1.5rem 'Open Sans', sans-serif 700;
`

export const TextDescription = styled.p`
  font: 1rem 'Open Sans', sans-serif 400;
`

export const Button = styled.button`
   width: 100%;
    max-width: 12.25rem;

    padding: .5rem 0;

    font-weight: 700;

    border: none;
    border-radius: 5px;

    color: white;
    transition: 200ms all ease-in-out;

    background: ${({theme}) => theme.colors.blue[600]};

    :hover {
      filter: brightness(.9);
    }
`
