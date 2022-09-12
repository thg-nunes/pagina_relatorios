import Link from 'next/link'
import * as Styled from './styled'

type MyLinkProps = {
  href: string
}

export const MyLink = ({ href }: MyLinkProps) => {
  return (
    <Link href={`/${href === 'Home' ? '' : href.toLowerCase()}`} passHref>
      <Styled.Container>{href}</Styled.Container>
    </Link>
  )
}
