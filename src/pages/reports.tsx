import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useState, useEffect } from 'react';
import { FiltersCreate } from "../client/filtersCreate"
import { MessageDeleteReporte } from '../components/alerts/deleteReport';
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

export default function Reports() {
  const { push } = useRouter()
  const cookies = parseCookies()

  const { state } = useMyContextFilters()
  const [statusDeleteReport, setStatusDeleteReport] = useState<number>(0)
  const [data, setData] = useState<ReportsFiles>([])
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  useEffect(() => {
    async function fetchData(){
      const date = new Date()

      const response = await api.get<Response>(`/relatorio/all`, {
        params: {
          year: date.getFullYear()
        }
      }).then(res => res.data)

      setData(response.data)
    }

    if(cookies['relatorio.token']) {
      fetchData()
    } else {
      push('/login')
    }
  }, [])

  if(data.length){
    months.forEach((month, monthIndex) => {
      data.forEach(file => {
        file.file = file.file.replace(month, `${monthIndex + 1 < 10 ? '0' : ''}${monthIndex+1}/`)
      })
    })
  }

  return (
    <Styled.ReportsContainer>
      <FiltersCreate />

      {state.searchByMonthOrYear !== null && typeof state.searchByMonthOrYear !==  'string' ? (
        <Report textReport={state.searchByMonthOrYear![0].file} fileId={state.searchByMonthOrYear[0].id} setStatusDeleteReport={setStatusDeleteReport} />
      ) : (
        <Styled.Container>
          {data.map(data => (
            <Report key={data.id} textReport={data.file} fileId={data.id} setStatusDeleteReport={setStatusDeleteReport} />
          ))}
          {statusDeleteReport !== 0 && statusDeleteReport === 200 && (
            <MessageDeleteReporte isSuccess message='Relatório excluído com sucesso.' />
          )}
          {statusDeleteReport !== 0 && statusDeleteReport !== 200 && (
            <MessageDeleteReporte isSuccess={false}  message='Relatório não excluído.' />
          )}
        </Styled.Container>
      )}
    </Styled.ReportsContainer>
  )
}
