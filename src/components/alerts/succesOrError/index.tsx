import * as Styled from './styled'

type AlertProps = {
  message: string
  hasError: boolean
}

export const Alert = ({ message, hasError }: AlertProps) => {
  return (
    <Styled.Container hasError={hasError}>
      <Styled.Paragraph>
        {message}
      </Styled.Paragraph>
    </Styled.Container>
  )
}
