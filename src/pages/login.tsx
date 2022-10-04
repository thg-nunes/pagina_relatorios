import { FormEvent, useContext, useState } from 'react'

import { AuthContext } from '../contexts/authContext/authContext'
import * as Styled from '../styles/pages/login'

export default function Login() {

  const { sign } = useContext(AuthContext)
  const [ username, setUserName ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  async function handleSubmit(e:FormEvent) {
    e.preventDefault()

    await sign({ username, password })
  }

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit}>
        <p>Acervo de Relatórios Estatísticos - JUCEMA</p>
        <Styled.InputContainer>
          <Styled.Input type='text' placeholder='User' onChange={e => setUserName(e.target.value)} />
          <Styled.Input type='password' placeholder='Senha' onChange={e => setPassword(e.target.value)} />
        </Styled.InputContainer>
        <button type='submit'>Enviar</button>
      </Styled.Form>
    </Styled.Container>
  )
}
