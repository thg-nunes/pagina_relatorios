import { useRouter } from 'next/router'
import * as Styled from './styled'

type HeaderProps = {
  text: string
}

export const Header = ({text}: HeaderProps) => {

  const { pathname } = useRouter()

  return (
    <Styled.Container>
        {pathname !== '/login' && (
          <section>
            <p>{text}</p>
          </section>
        )}
    </Styled.Container>
  )
}
