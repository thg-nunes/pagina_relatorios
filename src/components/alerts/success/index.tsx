import * as Styled from './styled'

type SuccessAlertProps = {
  message: string
}

export const SuccessAlert = ({ message }: SuccessAlertProps) => {
  return (
    <Styled.Container>
      <p>
        {message}
      </p>
    </Styled.Container>
  )
}
