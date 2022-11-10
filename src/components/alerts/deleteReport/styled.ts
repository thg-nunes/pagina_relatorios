import styled from "styled-components";
import { Container as ContainerMessage, Paragraph } from '../succesOrError/styled'

type ContainerProps = {
  messageInScreen: boolean
  hasError: boolean
}

export const Container = styled(ContainerMessage)<ContainerProps>`
  display: ${({ messageInScreen}) => {
    if(!messageInScreen) return 'none'
  }};
  top: 10%;
`

export const ContainerParagraph = styled(Paragraph)``
