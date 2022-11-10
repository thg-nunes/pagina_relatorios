import Link from 'next/link'
import { ReactNode } from 'react'

type MyLinkProps = {
  href: string
  children: ReactNode
}

export const MyLink = ({ href, children }: MyLinkProps) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}
