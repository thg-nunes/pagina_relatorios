import { MyLink } from '../myLink'
import * as Styled from './styled'

type HeaderProps = {
  text: string
}

export const Header = ({text}: HeaderProps) => {
  return (
    <Styled.Container>
      <section>
        <p>{text}</p>
        <Styled.Links>
          <MyLink href='Home' />
        </Styled.Links>
      </section>
    </Styled.Container>
  )
}
