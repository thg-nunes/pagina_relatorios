import * as Styled from './styled'

type ErrorAlertProps = {
  message: string
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <Styled.Container>
      <p>
        {message}
      </p>
    </Styled.Container>
  )
}
