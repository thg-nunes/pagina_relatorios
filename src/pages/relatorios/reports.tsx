import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useState, useEffect } from 'react';
import { FiltersCreate } from "../../client/filtersCreate"
import { MessageDeleteReporte } from '../../components/alerts/deleteReport';
import { PopUp } from '../../components/pup-up';
import { Report } from "../../components/report"
import { useMyContextFilters } from "../../hooks/contexts/useMyContextFilters"
import { getAllReports } from '../../hooks/reports';
import * as Styled from '../../styles/pages'

type ReportsFiles = {
  id: string
  file: string
} []

export default function Reports() {
  const { push } = useRouter()
  const cookies = parseCookies()
  const isFirstAccess = cookies['relatorio.first_access']

  const { state } = useMyContextFilters()
  const [statusDeleteReport, setStatusDeleteReport] = useState<string>('')
  const [data, setData] = useState<ReportsFiles>([])
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  useEffect(() => {
    async function fetchData(){
      const reports = await getAllReports()
      setData(reports.data)
    }

    if(cookies['relatorio.token']) {
      fetchData()
    } else {
      push('/relatorios/login')
    }
  }, [])

  if(data.length){
    months.forEach((month, monthIndex) => {
      data.forEach(file => {
        file.file = file.file.replace(month, `${monthIndex + 1 < 10 ? '0' : ''}${monthIndex+1}/`)
      })
      if(state.searchByMonthOrYear !== null) {
        state.searchByMonthOrYear.forEach(file => {
          file.file = file.file.replace(month, `${monthIndex + 1 < 10 ? '0' : ''}${monthIndex+1}/`)
        })
      }
    })
  }

  return (
    <Styled.ReportsContainer isFirstAccess={isFirstAccess}>
      <FiltersCreate />

      {state.searchByMonthOrYear !== null && typeof state.searchByMonthOrYear !==  'string' ? (
        <Report textReport={state.searchByMonthOrYear![0].file} fileId={state.searchByMonthOrYear[0].id} setStatusDeleteReport={setStatusDeleteReport} />
      ) : (
        <Styled.Container>
          {data.map(data => (
            <Report key={data.id} textReport={data.file} fileId={data.id} setStatusDeleteReport={setStatusDeleteReport} />
          ))}
          {statusDeleteReport !== '' && statusDeleteReport === 'ok' && (
            <MessageDeleteReporte isSuccess message='Relatório excluído com sucesso.' />
          )}
          {statusDeleteReport !== '' && statusDeleteReport !== 'ok' && (
            <MessageDeleteReporte isSuccess={false}  message='Relatório não excluído.' />
          )}
        </Styled.Container>
      )}

    </Styled.ReportsContainer>
  )
}
