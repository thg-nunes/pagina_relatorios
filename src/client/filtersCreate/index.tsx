import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Icon } from '../../components/icons'
import { Filter } from '../../components/filter'
import { searchReport } from '../../hooks/reports'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import * as Styled from './styled'

export type OnSearchReportsProps = {
  year: number
  month: number
}

export const FiltersCreate = () => {

  const [month, setMonth] = useState<number>(0)
  const { push } = useRouter()

  const context = useMyContextFilters()
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  async function getReportBYYearAndMonth({ year, month }: OnSearchReportsProps) {
    const response = await searchReport({ year, month })

    if(response?.status === 'erro') {
      push('/relatorios/notfoundreport')
    } else {
      const data = response?.data
      context.dispatch({type: 'SEARCH_REPORT', payload: { data } })
    }
  }

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

      <Icon
        srcImage='/icons/btn-buscar.svg'
        altImage='icone de busca'
        actionOnClick={() => getReportBYYearAndMonth({
          year: context.state.year,
          month
        })}
      />

    </Styled.Container>
  )
}
