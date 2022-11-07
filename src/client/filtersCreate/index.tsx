import { Filter } from '../../components/filter'
import { SearchReport } from '../../components/icons/search'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import * as Styled from './styled'

export const FiltersCreate = () => {

  const context = useMyContextFilters()

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

      <SearchReport srcImage='/icons/btn-buscar.svg' altImage='icone de busca' onSearchReports={{
        year: context.state.year,
        month: context.state.month,
      }} />

    </Styled.Container>
  )
}
