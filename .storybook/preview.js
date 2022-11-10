import { ThemeProvider } from 'styled-components'

import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global-styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'dark',
          value: '#141618'
        },
        {
          name: 'light',
          value: '#FFFFFF'
        }
      ]
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      {Story()}
      <GlobalStyle />
    </ThemeProvider>
  )
]
