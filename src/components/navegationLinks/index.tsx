import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import {signOut } from '../../contexts/authContext/authContext'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import { PopUp } from '../pup-up'
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
          <Link href='/relatorios/reports'>
            <a>
              <img className='icon' src='/icons/home-button.svg' alt='botão para voltar à página  inicial' />
            </a>
          </Link>
          <Link href='/relatorios/upload'>
            <a>
              <img src='/icons/upload-button.svg' alt='botão para ir à página de upload' />
            </a>
          </Link>
          <img
            className='icon-config'
            src="/icons/config.svg"
            alt="botão para abrir tela para mudar senha"
            onClick={() => {
              dispatch({ type: 'SET_POPUPVISIBLE', payload: { popupVisible: true }})
            }}
          />
        </section>
        <img
          src='/icons/signout-button.svg'
          alt='botão para deslogar do sistema'
          style={{
            cursor: 'pointer'
          }}
          onClick={() => {
            signOut()
          }}
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
