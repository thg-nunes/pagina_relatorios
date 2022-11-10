import { useEffect, useState } from 'react'
import { Filter } from '../../components/filter'
import { SearchReport } from '../../components/icons/search'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import * as Styled from './styled'

export const FiltersCreate = () => {

  const [month, setMonth] = useState<number>(0)

  const context = useMyContextFilters()
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  useEffect(() => {
    months.find((month, index) => {
      if(month === context.state.month) setMonth(index + 1)
    })
  }, [context.state])

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
        month
      }} />

    </Styled.Container>
  )
}
