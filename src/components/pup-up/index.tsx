import { MyInput } from '../input'
import * as Styled from './styled'

type PopUpProps = {
  title: string
  textDescription?: string
}

export const PopUp = ({ title, textDescription = '' }: PopUpProps) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TextSection>
          <Styled.Title>{title}</Styled.Title>
          <Styled.TextDescription>{textDescription}</Styled.TextDescription>
        </Styled.TextSection>

        <Styled.InputSection>
          <MyInput type='text' placeholder='Senha Antiga' />
          <MyInput type='text' placeholder='Nova Senha' />
          <Styled.Button>
            Salvar
          </Styled.Button>
        </Styled.InputSection>
      </Styled.Content>
    </Styled.Container>
  )
}
