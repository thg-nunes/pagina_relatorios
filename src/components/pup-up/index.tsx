import { parseCookies } from 'nookies'
import { useState } from 'react'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import { handleUpdatePassword } from '../../hooks/reports'
import { ErrorAlert } from '../alerts/error'
import { SuccessAlert } from '../alerts/success'
import * as Styled from './styled'

type PopUpProps = {
  title: string
  textDescription?: string
}

export const PopUp = ({ title, textDescription = '' }: PopUpProps) => {
  const [old_password, setOldPassword] = useState('')
  const [new_password, setNewPassword] = useState('')

  const cookies = parseCookies()
  const username = cookies['relatorio.username']

  const { state, dispatch } = useMyContextFilters()
  const [hasError, setHasError] = useState<boolean>()

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TextSection>
          <Styled.Title>{title}</Styled.Title>
          <Styled.TextDescription>{textDescription}</Styled.TextDescription>
        </Styled.TextSection>

        <Styled.FormSection>
          <Styled.Input
            type='password'
            placeholder='Senha Antiga'
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Styled.Input
            type='password'
            placeholder='Nova Senha'
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Styled.Button
            type='submit'
            onClick={async (e) => {
              e.preventDefault()

              await handleUpdatePassword({ old_password, new_password, username }, setHasError)
            }}>Salvar</Styled.Button>
        </Styled.FormSection>
        {state.popupVisible && (
          <span onClick={() => dispatch({ type: 'SET_POPUPVISIBLE', payload: {
            popupVisible: false
          }})}>x</span>
        )}
      </Styled.Content>

      {hasError && <ErrorAlert message='Erro ao atualizar a senha' />}

      {!hasError && hasError !== undefined && <SuccessAlert message='Senha atualizada' />}
    </Styled.Container>
  )
}
