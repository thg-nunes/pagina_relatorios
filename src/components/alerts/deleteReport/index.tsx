import { useEffect, useState } from 'react'
import * as Styled from './styled'

type SuccessAlertProps = {
  message: string
  hasError: boolean
}

export const MessageDeleteReporte = ({ message, hasError }: SuccessAlertProps) => {
  const [messageInScreen, setMessageInScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setMessageInScreen(!messageInScreen)
    }, 3500)
  }, [])

  return (
    <Styled.Container hasError={hasError} messageInScreen={messageInScreen} >
      <Styled.ContainerParagraph>
        {message}
      </Styled.ContainerParagraph>
    </Styled.Container>
  )
}
