import * as Styled from './style'

type HeaderProps = {
  text: string
}

export const Header = ({text}: HeaderProps) => {
  return (
    <Styled.Container>
      <p>{text}</p>
    </Styled.Container>
  )
}
