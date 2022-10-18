import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { ErrorAlert } from '../components/dragAndDrop/alerts/error'

import { AuthContext } from '../contexts/authContext/authContext'
import * as Styled from '../styles/pages/login'

export default function Login() {
  const { push } = useRouter()
  const cookies = parseCookies()
  const [haveError, setHaveError] = useState(false)

  const context = useContext(AuthContext)
  const [ username, setUserName ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  async function handleSubmit(e:FormEvent) {
    e.preventDefault()

    await context.sign({ username, password }, setHaveError)
  }

  useEffect(() => {
    if(cookies['relatorio.token']) {
      push('/reports')
    }
  }, [cookies])

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

      {haveError && <ErrorAlert message='Email ou senha incorreta.' />}
    </Styled.Container>
  )
}
