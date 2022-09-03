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

  function generateYears() {
    const yearsVlid = []

    for (let i = 2020; i <= context.state.year; i++) {
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
          }}
        >{months[i]}</span>
      )
    }

    setAllMonths(monthsVlid)
  }

  useEffect(() => {
    generateYears()
    generateMonths()
  }, [])

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
