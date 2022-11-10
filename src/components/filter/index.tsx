import { ReactElement, useEffect, useState } from 'react'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import { api } from '../../services/axios'
import { FilterComponent } from './component'
import * as Styled from './styled'

export type FilterProps = {
  labelId: string
  labelText: string
}

export const Filter = ({ labelId, labelText }: FilterProps) => {
  const context = useMyContextFilters()

  const [yearOptionsVisible, setYearOptionsVisible] = useState(false)
  const [monthOptionsVisible, setMonthOptionsVisible] = useState(false)

  const [allYears, setAllYears] = useState<ReactElement[]>([])
  const [allMonths, setAllMonths] = useState<ReactElement[]>([])
  const [hasMonthSelected, setHasMonthSelected] = useState(false)

  useEffect(() => {
    const allYears = async () => {
      const years: ReactElement[] = []

      const { data: { data: arrayYears } } = await api.get<{ data: number[]}>('/years')

      arrayYears.forEach((year) => {
        years.unshift(
          <span
            key={year}
            className={context.state.year === year ? 'selected': ''}
            onClick={() => {
              context.dispatch({type: 'SET_YEAR', payload: { year }})
              setYearOptionsVisible(false)
            }}
          >{year}</span>
        )
      })

      setAllYears(years)

    }

    const allMonths = async () => {
      const months: ReactElement[] = []
      const year = context.state.year

      const { data: { data: arrayMonths } } = await api.get<{ data: string[]}>(`/months/${year}`)

      arrayMonths.forEach((month, index) => {
        months.push(
          <span
            key={index}
            className={context.state.month === month ? 'selected': ''}
            onClick={() => {
              context.dispatch({type: 'SET_MONTH', payload: { month }})
              setMonthOptionsVisible(false)
              setHasMonthSelected(!hasMonthSelected)
            }}
          >{month}</span>
        )
      })

      setAllMonths(months)
    }

    allYears()
    allMonths()
  }, [context.state])

  return (
    <Styled.Container>
      {labelId === 'year' ? (
        <FilterComponent
          labelId={labelId}
          labelText={labelText}
          dataToOptionsFilter={allYears}
          setStateToFilter={setYearOptionsVisible}
          placeholder={String(context.state.year)}
          filterOptionsVisible={yearOptionsVisible}
        />
      ) : (
        <FilterComponent
          labelId={labelId}
          labelText={labelText}
          dataToOptionsFilter={allMonths}
          setStateToFilter={setMonthOptionsVisible}
          placeholder={context.state.month !== null ? context.state.month : 'Selecionar'}
          filterOptionsVisible={monthOptionsVisible}
        />
      )}

    </Styled.Container>
  )
}
