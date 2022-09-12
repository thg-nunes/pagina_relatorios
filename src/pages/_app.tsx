import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/global-styles'
import { ContextProvider } from '../contexts/contextProvider'
import { Header } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Header text='Acervo de Relatórios Estatísticos - JUCEMA' />
        <Component {...pageProps} />
        <GlobalStyle />
      </ContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
