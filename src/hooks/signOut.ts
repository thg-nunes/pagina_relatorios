import Router from "next/router"
import { destroyCookie } from "nookies"

// aqui fica a config ao sair do sistema, onde token e refresh_token sao deletados dos cookies, e o usuario é redirecionado para a pagina de login
export const signOut = async () => {
  destroyCookie(undefined, 'relatorio.token')
  destroyCookie(undefined, 'relatorio.refresh_token')
  localStorage.clear()

  await Router.push('/relatorios/login')
}
