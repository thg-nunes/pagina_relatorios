import { HTMLInputTypeAttribute } from 'react'
import * as Styled from './styled'

type MyInputProps = {
  type: HTMLInputTypeAttribute
  placeholder?: string
}

export const MyInput = ({ type, placeholder }: MyInputProps) => {
  return (
    <Styled.Input type={type} placeholder={placeholder} />
  )
}
