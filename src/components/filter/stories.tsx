import { Meta } from '@storybook/react'
import { Filter, FilterProps } from '.'

export default {
  title: 'Filter/Component',
  component: Filter,
  args: {
    labelId: 'year',
    labelText: 'Ano'
  },
  argTypes: {
    labelId: {
      options: ['year', 'month'],
      control: 'select'
    },
    labelText: { type: 'string' }
  }
} as Meta<FilterProps>

export const Year = (args: FilterProps) => <Filter {...args} />

export const Month = (args: FilterProps) => <Filter {...args} />

Month.args = {
  labelId: 'month',
  labelText: 'Mês'
}
