import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {signOut } from '../../contexts/authContext/authContext'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import * as Styled from './styled'

 export const NavegationLinks = () => {
  const { asPath } = useRouter()
  const { dispatch } = useMyContextFilters()
  const [popupVisible, setPopUpVisible] = useState(false)

  return (
    <Styled.Container asPath={asPath}>
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
            setPopUpVisible(!popupVisible)
            dispatch({ type: 'SET_POPUPVISIBLE', payload: { popupVisible: !popupVisible }})
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
    </Styled.Container>
  )
}
