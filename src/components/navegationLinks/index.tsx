
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../icons'
import * as Styled from './styled'

 export const NavegationLinks = () => {
  return (
    <Styled.Container>
      <section>
        <Link href='/'>
          <a>
            <Image src='/icons/home-button.svg' alt='botão para voltar à página  inicial' width={25} height={25} />
          </a>
        </Link>
        <Link href='/upload'>
          <a>
            <Image src='/icons/upload-button.svg' alt='botão para ir à página de upload' width={25} height={25} />
          </a>
        </Link>
      </section>
      <Image src='/icons/signout-button.svg' alt='botão para deslogar do sistema' width={25} height={25} />
    </Styled.Container>
  )
}
