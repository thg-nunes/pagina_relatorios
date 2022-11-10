import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import {signOut } from '../../contexts/authContext/authContext'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import { Icon } from '../../components/icons'
import { MyLink } from '../../components/myLink'
import { PopUp } from '../../components/pup-up'
import * as Styled from './styled'

 export const NavegationLinks = () => {
  const { asPath } = useRouter()
  const { dispatch } = useMyContextFilters()
  const [popupVisible, setPopUpVisible] = useState(false)

  const cookies = parseCookies()
  const isFirstAccess = cookies['relatorio.first_access']

  const { state } = useMyContextFilters()

  useEffect(() => {
    setPopUpVisible(state.popupVisible)
  },[state.popupVisible])

  return (
    <Styled.Container asPath={asPath} popupVisible={popupVisible}>
      <Styled.Itens>
        <section>
          <MyLink href='/relatorios/reports'>
            <img className='icon' src='/icons/home-button.svg' alt='botão para voltar à página inicial' />
          </MyLink>
          <MyLink href='/relatorios/upload'>
            <img className='icon' src='/icons/upload-button.svg' alt='botão para ir à página de upload' />
          </MyLink>
          <Icon
            srcImage='/icons/config.svg'
            altImage="botão para abrir tela para mudar senha"
            actionOnClick={() => {
              dispatch({ type: 'SET_POPUPVISIBLE', payload: { popupVisible: true }})
            }}
          />
        </section>

        <Icon
          srcImage='/icons/signout-button.svg'
          altImage='botão para deslogar do sistema'
          actionOnClick={() => signOut()}
        />
      </Styled.Itens>

      {isFirstAccess === 'true' &&
        <PopUp
          title='Alteração de Senha'
          textDescription='Detectamos que é o seu primeiro acesso, cadastre uma nova senha para continuar'
        />
      }

      {state.popupVisible && (
        <PopUp
          title='Alteração de Senha'
        />
      )}
    </Styled.Container>
  )
}
