import React, { useState, useEffect } from 'react';
import { FiltersCreate } from "../client/filtersCreate"
import { Report } from "../components/report"
import { useMyContextFilters } from "../hooks/contexts/useMyContextFilters"
import { api } from "../services/axios"
import * as Styled from '../styles/pages'

type ReportsFiles = {
  id: string
  file: string
} []

type Response = {
  data: ReportsFiles
  status: string
}

export default function Home(){
  const { state } = useMyContextFilters()
  const [data, setData] = useState<ReportsFiles>([])
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  useEffect(() => {
    async function fetchData(){
      const date = new Date()

      const response = await api.get<Response>('/relatorios', {
        params: {
          year: date.getFullYear()
        }
      }).then(res => res.data)

      setData(response.data)
    }

    fetchData()
  }, [])

  if(data.length){
    months.forEach((month, monthIndex) => {
      data.forEach(file => {
        file.file = file.file.replace(month, `${monthIndex + 1 < 10 ? '0' : ''}${monthIndex+1}/`)
      })
    })
  }

  return (
    <>
      <FiltersCreate />

      {state.searchByMonthOrYear !== null && typeof state.searchByMonthOrYear !==  'string' ? (
        <Report textReport={state.searchByMonthOrYear![0].file} fileId={state.searchByMonthOrYear[0].id} />
      ) : (
        <Styled.Container>
          {data.map(data => (
            <Report key={data.id} textReport={data.file} fileId={data.id} />
          ))}
        </Styled.Container>
      )}
    </>
  )
}
