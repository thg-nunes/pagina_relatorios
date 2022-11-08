import styled from 'styled-components'
import { Container as PopUpContainer, Content as PopUpContent, Title as PopUpTitle, Button as PopUpButton } from '../styled'

export const Container = styled(PopUpContainer)`
  left: 0;
  z-index: 2;
`

export const Content = styled(PopUpContent)``

export const Title = styled(PopUpTitle)``

type ButtonProps = {
  isConfirmation?: boolean
}

export const ButtonSection = styled.section`
  display: flex;
  gap: 1rem;
`

export const Button = styled(PopUpButton)<ButtonProps>`
  background: ${({ isConfirmation }) => {
    if(!isConfirmation) return '#D40000'
    return '#007DD4'
  }}
`
