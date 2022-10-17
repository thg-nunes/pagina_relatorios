import { stringify } from "qs"
import Router from "next/router"
import { createContext, useEffect } from "react"
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import { api } from "../../services/axios"
import axios, { AxiosDefaults } from "axios"

// aqui fica a config ao sair do sistema, onde token e refresh_token sao deletados dos cookies, e o usuario é redirecionado para a pagina de login
export const signOut = () => {
  destroyCookie(undefined, 'relatorio.token')
  destroyCookie(undefined, 'relatorio.refresh_token')

  Router.push('/login')
}

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

  useEffect(() => {
    const role = localStorage.getItem('relatorio.role')
    const cookies = parseCookies()

    if(!cookies['relatorio.token'] && role) {
      localStorage.clear()
    }
  }, [])

  async function sign({ username, password }, setHaveError) {
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
      localStorage.setItem('relatorio.role', role)

      // o Authorization foi adicionado no headers na config criada no diretorio /services/axios/index
      api.defaults.headers['Authorization'] = `Bearer ${access_token}`

      Router.push('/reports')
    } catch (error) {
      setHaveError(true)

      setTimeout(() => {
        setHaveError(false)
      }, 3500)
    }
  }

  return (
    // aqui crio um metodo para prover a funcao de sign para usa-la onde for necessaria
    <AuthContext.Provider value={{ sign }}>{children}</AuthContext.Provider>
  )
}
