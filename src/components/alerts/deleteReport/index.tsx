import { useEffect, useState } from 'react'
import * as Styled from './styled'

type SuccessAlertProps = {
  message: string
  isSuccess: boolean
}

export const MessageDeleteReporte = ({ message, isSuccess }: SuccessAlertProps) => {
  const [messageInScreen, setMessageInScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setMessageInScreen(!messageInScreen)
    }, 3500)
  }, [])

  return (
    <Styled.Container isSuccess={isSuccess} messageInScreen={messageInScreen} >
      <p>
        {message}
      </p>
    </Styled.Container>
  )
}
