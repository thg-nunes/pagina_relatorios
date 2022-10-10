import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext, signOut } from '../../contexts/authContext/authContext'
import * as Styled from './styled'

 export const NavegationLinks = () => {
  const { asPath } = useRouter()
  const { role } = useContext(AuthContext)

  return (
    <Styled.Container asPath={asPath}>
      <section>
        <Link href='/reports'>
          <a>
            <img className='icon' src='/icons/home-button.svg' alt='botão para voltar à página  inicial' />
          </a>
        </Link>
        {role === 'admin' && (
          <Link href='/upload'>
            <a>
              <img src='/icons/upload-button.svg' alt='botão para ir à página de upload' />
            </a>
          </Link>
        )}
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
