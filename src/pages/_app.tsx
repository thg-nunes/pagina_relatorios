import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/global-styles'
import { ContextProvider } from '../contexts/contextProvider'
import { Header } from '../components/header'
import { NavegationLinks } from '../components/navegationLinks'
import { AuthProvider } from '../contexts/authContext/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Header text='Acervo de Relatórios Estatísticos - JUCEMA' />
          <NavegationLinks />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </ContextProvider>
  )
}

export default MyApp
