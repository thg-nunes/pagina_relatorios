import styled from "styled-components";
import { Container as ContainerMessage } from '../error/styled'

type ContainerProps = {
  messageInScreen: boolean
  isSuccess: boolean
}

export const Container = styled(ContainerMessage)<ContainerProps>`
  display: ${({ messageInScreen}) => {
    if(!messageInScreen) return 'none'
  }};
  top: 10%;
  background: ${({ isSuccess }) => {
    if(isSuccess) return '#00FA00'
  }};
`
