import Image from 'next/image'
import { Filter } from '../../components/filter'
import { Icon } from '../../components/icons/print'
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

      <Icon srcImage='/search.svg' altImage='icone de busca' />

    </Styled.Container>
  )
}
