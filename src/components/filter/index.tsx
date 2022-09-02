import { Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from 'react'
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

  const [allYears] = useState<ReactElement[]>([])
  const [allMonths] = useState<ReactElement[]>([])

  function generateYears() {
    for (let i = 2020; i <= context.state.year; i++) {
      allYears.unshift(
        <span
          key={i}
          className={context.state.year === i ? 'selected': ''}
          onClick={() => {
            context.dispatch({type: 'SET_YEAR', payload: { year: i}})
            setYearOptionsVisible(!yearOptionsVisible)
          }}
        >{i}</span>
      )
    }
  }

  function generateMonths() {
    for (let i = 0; i <= months.length; i++) {
      allMonths.push(
        <span
          key={i}
          className={context.state.month === i + 1 ? 'selected': ''}
          onClick={() => {
            context.dispatch({type: 'SET_MONTH', payload: { month: i + 1}})
            setMonthOptionsVisible(!monthOptionsVisible)
          }}
        >{months[i]}</span>
      )
    }
  }

  generateYears()
  generateMonths()

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
