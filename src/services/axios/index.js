import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from 'nookies'
import { signOut } from "../../hooks/signOut";

const cookies = parseCookies()
let isRefreshing = false
let faileruRequest = []

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
  headers: {
    'Authorization': `Bearer ${cookies['relatorio.token']}`,
  }
})

api.interceptors.response.use((response) => {
  return response
}, (err) => {
  if(err.response?.status === 401) {
    // se tiver refreshToken nos cookies, recupero aqui
    const { 'relatorio.refresh_token': refreshToken } = cookies
      const requestConfig = err.config

    // linhas 26 e 27: essa estrategia é utilizada para que o codigo de refreshToken seja executado somente na primeira ver em que houver um erro
    if(!isRefreshing) {
      isRefreshing = true

      // faço uma requeset para a rota de refreshToken enviando o refreshToken
      api.post('/refresh_token', null, {
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      })
      .then(response => {
      // com a response de token e refreshToken atualizados, recupero-os aqui
      const { access_token } = response.data

        // atualizo o cookie com o novo token e refreshToken
        setCookie(undefined, 'relatorio.token', access_token)

        // atualizo o header default com o novo token
        api.defaults.headers['Authorization'] = `Bearer ${access_token}`

        faileruRequest.forEach(request => request.onSuccess(access_token))
        faileruRequest = []
      })
      .catch(err => {
        faileruRequest.forEach(request => request.onFailure(err))
        faileruRequest = []
      })
      .finally(() => {
        isRefreshing = false
      })
    }

    return new Promise((resolve, reject) => {
      faileruRequest.push({
        // caso uma requisição falhe, vou refaze-la com o novo token
        onSuccess: (token) => {
          requestConfig.headers['Authorization'] = `Bearer ${token}`

          resolve(api(requestConfig))
        },
        // caso falhe com o novo token, somente rejeito
        onFailure: (err) => {
          reject(err)
        }
      })
    })
  } else {
    signOut()
  }

  return Promise.reject(err)
})

export { api }
