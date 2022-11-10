import { Meta } from '@storybook/react'
import { Alert, AlertProps } from '.'

export default {
  title: 'Alert/Component',
  component: Alert,
  args: {
    message: 'Your Message',
    hasError: false
  },
  argTypes: {
    hasError: {
      type: 'boolean',
      description: 'Muda a cor de fundo. Se o valor for true a cor será vermelha, se false a cor será verde'
    },
    message: { type: 'string' },
  },

} as Meta<AlertProps>

export const ComponentSuccess = (args: AlertProps) => <Alert {...args} />

export const ComponentError = (args: AlertProps) => <Alert {...args} />

ComponentError.args = {
  hasError: true,
}
