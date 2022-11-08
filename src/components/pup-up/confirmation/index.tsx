import * as Styled from './styled'

type PopUpConfimationActionProps = {
  text: string
  actionConfirm: () => void
  actionCancel: () => void
}

export const ConfimationAction = ({ text, actionConfirm, actionCancel }: PopUpConfimationActionProps) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>{text}</Styled.Title>

        <Styled.ButtonSection>
          <Styled.Button isConfirmation onClick={actionConfirm}>Confirmar</Styled.Button>
          <Styled.Button onClick={actionCancel}>Cancelar</Styled.Button>
        </Styled.ButtonSection>
      </Styled.Content>
    </Styled.Container>
  )
}
