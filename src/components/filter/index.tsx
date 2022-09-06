import { ReactElement, useContext, useEffect, useState } from 'react'
import { ContextFilters } from '../../contexts/contextProvider'
import * as Styled from './styled'

type FilterProps = {
  labelId: string
  labelText: string
}

export const Filter = ({ labelId, labelText }: FilterProps) => {

  const context = useContext(ContextFilters)
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  const [yearOptionsVisible, setYearOptionsVisible] = useState(false)
  const [monthOptionsVisible, setMonthOptionsVisible] = useState(false)

  const [allYears, setAllYears] = useState<ReactElement[]>([])
  const [allMonths, setAllMonths] = useState<ReactElement[]>([])
  const [hasMonthSelected, setHasMonthSelected] = useState(false)

  function generateYears() {
    const yearsVlid = []

    /* na linha seguinte, 2022 é o ano onde iniciou a gereção dos relatorios, nesse caso, as opções disponiveis iniciam em 2022 */
    for (let i = 2022; i <= context.state.year; i++) {
      yearsVlid.unshift(
        <span
          key={i}
          className={context.state.year === i ? 'selected': ''}
          onClick={() => {
            context.dispatch({type: 'SET_YEAR', payload: { year: i }})
            setYearOptionsVisible(false)
          }}
        >{i}</span>
      )
    }

    setAllYears(yearsVlid)
  }

  function generateMonths() {
    const monthsVlid = []

    for (let i = 0; i <= months.length; i++) {
      monthsVlid.push(
        <span
          key={i}
          className={context.state.month === i + 1 ? 'selected': ''}
          onClick={() => {
            context.dispatch({type: 'SET_MONTH', payload: { month: i + 1}})
            setMonthOptionsVisible(false)
            setHasMonthSelected(!hasMonthSelected)
          }}
        >{months[i]}</span>
      )
    }

    setAllMonths(monthsVlid)
  }

  useEffect(() => {
    generateYears()
    generateMonths()
  }, [context.state])

  return (
    <Styled.Container>
      {labelId === 'year' ? (
        <>
          <label id={labelId}>{labelText}:</label>
          <Styled.InputAndOptions>
            <input
              type="text"
              placeholder={String(context.state.year)}
              onClick={() => setYearOptionsVisible(!yearOptionsVisible)}
            />
            <Styled.Options filterVisible={yearOptionsVisible}>
              {allYears.map(year => (
                year
              ))}
            </Styled.Options>
          </Styled.InputAndOptions>
        </>
      ) : (
        <>
          <label id={labelId}>{labelText}:</label>
          <Styled.InputAndOptions>
            <input
              type="text"
              placeholder={String(months[context.state.month - 1])}
              onClick={() => setMonthOptionsVisible(!monthOptionsVisible)}
            />
            <Styled.Options filterVisible={monthOptionsVisible}>
              {allMonths.map(mmonth => (
                mmonth
              ))}
            </Styled.Options>
          </Styled.InputAndOptions>
        </>
      )}

    </Styled.Container>
  )
}
