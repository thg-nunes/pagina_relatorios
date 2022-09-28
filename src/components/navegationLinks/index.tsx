import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Styled from './styled'

 export const NavegationLinks = () => {
  const { asPath } = useRouter()

  return (
    <Styled.Container asPath={asPath}>
      <section>
        <Link href='/reports'>
          <a>
            <Image src='/icons/home-button.svg' alt='botão para voltar à página  inicial' width={25} height={25} />
          </a>
        </Link>
        <Link href='/upload'>
          <a>
            <Image src='/icons/upload-button.svg' alt='botão para ir à página de upload' width={25} height={25} />
          </a>
        </Link>
      <Image src='/icons/signout-button.svg' alt='botão para deslogar do sistema' width={25} height={25} />
      </section>
    </Styled.Container>
  )
}
