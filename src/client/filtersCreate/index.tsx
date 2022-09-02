import { Filter } from '../../components/filter'
import * as Styled from './styled'

export const FiltersCreate = () => {

  return (
    <Styled.Container>
      <Filter
        labelId='year'
        labelText='Ano'
      />

      <Filter
        labelId='month'
        labelText='Mês'
      />

    </Styled.Container>
  )
}
