import Router from "next/router"
import { stringify } from "qs"
import { createContext, ReactNode, useEffect, useState } from "react"
import { destroyCookie, setCookie } from 'nookies'

import { api } from "../../services/axios"

type AuthCredentials = {
  username: string
  password: string
}

type AuthContextData = {
  sign(credentials: AuthCredentials): Promise<void>
  isAuthenticated: boolean
  role: string
}

// aqui fica a config ao sair do sistema, onde token e refresh_token sao deletados dos cookies, e o usuario é redirecionado para a pagina de login
export const signOut = () => {
  destroyCookie(undefined, 'relatorio.token')
  destroyCookie(undefined, 'relatorio.refresh_token')

  Router.push('/login')
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState('user')

  useEffect(() => {
    // fazer requisição pra rota de buscar os dados de usuario e atualizar enviando o token
    /* setar valor da nova requisição - */setIsAuthenticated(true)
    // setar valor da nova requisição - setRole(role)
  }, [])

  // essa funcao é usada para fazer login, onde envio os dados necessarios para a api
  async function sign({ username, password }:AuthCredentials) {
    const dataForm = stringify({
      username,
      password
    })

    try {
      const response = await api.post(`/relatorio/login`, dataForm, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      // se o login der certo, recupero o token e adiciono nos cookies
      const { access_token, refresh_token, role } = response.data
      setCookie(undefined, 'relatorio.token', access_token)
      setCookie(undefined, 'relatorio.refresh_token', refresh_token)

      // o Authorization foi adicionado no headers na config criada no diretorio /services/axios/index
      api.defaults.headers['Authorization'] = `Bearer ${access_token}`

      Router.push('/reports')
    } catch (error) {
      // se o login falhar, o usuario é redirecionado para a rota de login
      signOut()
    }
  }

  return (
    // aqui crio um metodo para prover a funcao de sign para usa-la onde for necessaria
    <AuthContext.Provider value={{ sign, isAuthenticated, role }}>{children}</AuthContext.Provider>
  )
}
